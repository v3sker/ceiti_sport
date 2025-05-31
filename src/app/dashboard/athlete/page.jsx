'use client';

import { cn } from "@/lib/utils"
import {differenceInYears, format} from "date-fns";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { fetchAthletes } from "@/lib/data/athlete/fetch";
import { deleteAthlete } from "@/lib/data/athlete/delete";
import { useEffect, useState, useTransition } from "react";

import {
  Users,
  Plus,
  RefreshCcw,
  Download,
  X,
  EllipsisVertical,
  Trash2,
  Loader2,
  SlidersVertical,
  Check
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { CustomCombobox } from "@/components/custom-combobox";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {exportXlsx} from "@/lib/export-xlsx";

export default function AthletesPage() {
  const [orderBy, setOrderBy] = useState("created_at");
  const [orderDirection, setOrderDirection] = useState("asc");
  const [queryID, setQueryID] = useState("");
  const [querySport, setQuerySport] = useState(undefined);
  const [queryGender, setQueryGender] = useState(undefined);
  const [queryMinAge, setQueryMinAge] = useState("");
  const [queryMaxAge, setQueryMaxAge] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState({});
  const [isPending, startTransition] = useTransition();
  const [exportData, setExportData] = useState([]);

  const { data: session } = useSession();
  const user = session?.user;
  const debouncedSearch = debounce(queryID, 500);
  const debouncedMinAge = debounce(queryMinAge, 500);
  const debouncedMaxAge = debounce(queryMaxAge, 500);

  const router = useRouter();
  const t = useTranslations('athlete.page');
  const tFunc = useTranslations('athlete.function');
  const tTable = useTranslations('athlete.page.table');

  function debounce(value, delay) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounced(value);
      }, delay);

      return () => clearTimeout(handler);
    }, [value, delay]);

    return debounced;
  }

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['athletes'],
    queryFn: () => fetchAthletes({
      orderBy,
      orderDirection,
      id: debouncedSearch,
      sport: querySport,
      gender: queryGender,
      minAge: debouncedMinAge,
      maxAge: debouncedMaxAge
    }),
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    queryClient.invalidateQueries({queryKey: ['athletes']}).then()
  }, [orderBy, orderDirection, debouncedSearch, querySport, queryGender, debouncedMinAge, debouncedMaxAge])

  const ORDER_DIRECTIONS = [
    { label: t('controls.orderDirection.labels.ascending'), value: "asc" },
    { label: t('controls.orderDirection.labels.descending'), value: "desc" },
  ]

  const SORT_OPTIONS = [
    { label: "ID", value: "id" },
    { label: t('controls.orderBy.labels.createdAt'), value: "created_at" },
    { label: t('controls.orderBy.labels.updatedAt'), value: "updated_at" },
    { label: t('controls.orderBy.labels.gender'), value: "gender" },
    { label: t('controls.orderBy.labels.birthdate'), value: "birthdate" },
    { label: t('controls.orderBy.labels.height'), value: "height" },
    { label: t('controls.orderBy.labels.weight'), value: "weight" },
  ];

  const GENDERS_MAP = {
    "M": t('table.genderMap.male'),
    "F": t('table.genderMap.female')
  };

  const GENDERS_OPTIONS = [
    { label: t('table.genderMap.male'), value: "M" },
    { label: t('table.genderMap.female'), value: "F" },
  ]

  const SPORTS_MAP = {
    "FOOTBALL": t('table.sportsMap.football'),
    "BASKETBALL": t('table.sportsMap.basketball'),
    "TENNIS": t('table.sportsMap.tennis'),
    "GYMNASTICS": t('table.sportsMap.gymnastics'),
    "SWIMMING": t('table.sportsMap.swimming'),
  }

  const SPORTS_OPTIONS = [
    { label: t('table.sportsMap.football'), value: "FOOTBALL" },
    { label: t('table.sportsMap.basketball'), value: "BASKETBALL" },
    { label: t('table.sportsMap.tennis'), value: "TENNIS" },
    { label: t('table.sportsMap.gymnastics'), value: "GYMNASTICS" },
    { label: t('table.sportsMap.swimming'), value: "SWIMMING" },
  ]

  function handleDeleteAthlete() {
    const promise = new Promise((resolve, reject) => {
      try {
        startTransition(async () => {
          if (!selectedAthlete || !selectedAthlete?.id) {
            reject(tFunc('deleteAthlete.errors.1_notSpecified'));
          }

          if (!user) {
            reject(tFunc('deleteAthlete.errors.2_noUser'));
          }

          if (user.role !== 'ADMIN' && user.role !== 'SUPERUSER') {
            reject(tFunc('deleteAthlete.errors.3_accessDenied'));
          }

          await deleteAthlete(selectedAthlete.id).then(res => {
            if (!res.success && !res.error) {
              reject();
              return;
            }
            if (res.error) {
              switch (res.error) {
                case 4:
                  reject(tFunc('deleteAthlete.errors.4_notFound'));
                  return;
                default:
                  reject(res.error);
                  return;
              }
            }

            resolve();
          });

          setDeleteDialogOpen(false);
          await queryClient.invalidateQueries({queryKey: ['athletes']});
          resolve();
        })
      } catch (err) {
        console.error(err);
        reject();
      }
    });

    toast.promise(promise, {
      loading: tFunc('deleteAthlete.toast.loading'),
      success: tFunc('deleteAthlete.toast.success'),
      error: (err) => err || tFunc('deleteAthlete.toast.error')
    })

    return promise;
  }

  function handleExport() {
    const promise = new Promise((resolve, reject) => {
      try {
        startTransition(async () => {
          await exportXlsx(exportData, tTable).then(res => {
            if (!res.success && !res.error) reject('Unknown error');
            if (res.error) reject(res.error);
            if (res.success && res.url) {
              const a = document.createElement("a");
              a.href = res.url;
              a.download = `DataExport_${ format(new Date(), "yyyy-MM-dd_HH-mm") }.xlsx`;
              a.click();
              a.remove();
            }

            resolve();
          })
        })
      } catch (err) {
        console.error(err);
        reject(err.message)
      }
    });

    toast.promise(promise, {
      loading: tFunc('export.promise.loading'),
      success: tFunc('export.promise.success'),
      error: (err) => err || tFunc('export.promise.error')
    }).then();

    return promise;
  }

  return (
    <>
      <div className={'p-6 h-fit w-full max-w-[1200px] flex flex-col'}>
        <div className={'flex gap-2 items-center justify-between pb-2 overflow-scroll md:overflow-visible'}>
          <div className={'flex gap-2 items-center mr-4'}>
            <Users className={'text-muted-foreground'} />
            <h1 className={'text-2xl font-semibold'}>{t('title')}</h1>
          </div>

          <div className={'flex items-center gap-2'}>
            <Button
              variant={'outline'}
              onClick={() => {
                queryClient.invalidateQueries({queryKey: [`athletes`]}).then();
              }}
            >
              <RefreshCcw strokeWidth={1.5} />
              {t('controls.refreshBtn')}
            </Button>

            <Button
              variant={'outline'}
              className={'transition'}
              disabled={exportData.length === 0 || isPending}
              onClick={handleExport}
            >
              <Download strokeWidth={1.5} />
              {t('controls.exportBtn')}
            </Button>

            <Separator orientation={'vertical'} className={'h-[32px]'} />

            <Button className={'ml-auto flex gap-2 pl-3'} onClick={() => { router.push('/dashboard/athlete/new') }}>
              <Plus />
              {t('controls.addNewBtn')}
            </Button>
          </div>
        </div>

        <div className={'py-2 flex gap-2 overflow-scroll md:overflow-visible'}>
          <div className={'relative w-full flex items-center'}>
            <Input
              type={'text'}
              value={queryID}
              onChange={(e) => {
                const intRegex = /^[0-9]+$/;
                if (e.target.value.match(intRegex) || !e.target.value) {
                  setQueryID(e.target.value);
                }
              }}
              className={'bg-background font-medium text-sm placeholder:font-normal outline-none w-full min-w-[180px]'}
              placeholder={'Write ID to find athlete'}
            />

            <X
              className={`h-4 w-4 absolute right-0 mr-2 cursor-pointer transition ${queryID ? '' : 'hidden'}`}
              onClick={() => { setQueryID('') }}
            />
          </div>

          <CustomCombobox
            options={ORDER_DIRECTIONS}
            value={orderDirection}
            setValue={setOrderDirection}
            placeholder={t('controls.orderDirection.placeholder')}
            minWidth={'min-w-[200px]'}
          />

          <CustomCombobox
            options={SORT_OPTIONS}
            value={orderBy}
            setValue={setOrderBy}
            removeValue={true}
            placeholder={t('controls.orderBy.placeholder')}
            minWidth={'min-w-[200px]'}
          />
        </div>

        {isFetching || isLoading ? (
          <Skeleton className={'h-[320px] w-full rounded-md mt-2'} />
        ) : (
          <div className={'flex flex-col gap-3 mt-2'}>
            <div className={'border rounded-lg'}>
              <Table className={'max-w-screen'}>
                <TableHeader className={'bg-muted'}>
                  <TableRow>
                    <TableHead className={`h-[36px] font-bold`}>

                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center`}
                      >
                        ID
                      </span>
                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center`}
                      >
                        {t('table.headers.name')}
                      </span>
                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center`}
                      >
                        {t('table.headers.surname')}
                      </span>
                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center`}
                      >
                        IDNP
                      </span>
                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center justify-center`}
                      >
                        {t('table.headers.gender')}

                        <Popover>
                          <PopoverTrigger asChild>
                            <SlidersVertical className={'h-4 w-4 text-muted-foreground hover:text-foreground transition cursor-pointer'} strokeWidth={2}  />
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput placeholder={tTable('filters.gender.search')} className="h-9" />
                              <CommandList>
                                <CommandEmpty>{tTable('filters.gender.notFound')}</CommandEmpty>
                                <CommandGroup>
                                  {GENDERS_OPTIONS.map((item) => (
                                    <CommandItem
                                      key={item.value}
                                      value={item.value}
                                      onSelect={(currentValue) => {
                                        setQueryGender(currentValue === queryGender ? undefined : currentValue)
                                      }}
                                    >
                                      <Check
                                        className={queryGender === item.value ? "opacity-100" : "opacity-0"}
                                      />
                                      {item.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </span>
                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center justify-center`}
                      >
                        {t('table.headers.birthdate')}
                        <Popover>
                          <PopoverTrigger asChild>
                            <SlidersVertical className={'h-4 w-4 text-muted-foreground hover:text-foreground transition cursor-pointer'} strokeWidth={2}  />
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <div className="grid gap-2">
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">{tTable('filters.age.minLabel')}</Label>
                                <Input
                                  value={queryMinAge}
                                  className="col-span-2 h-8"
                                  onChange={(e) => {
                                    const intRegex = /^[0-9]+$/;
                                    if (e.target.value.match(intRegex) || !e.target.value) {
                                      setQueryMinAge(e.target.value);
                                    }
                                  }}
                                />
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxWidth">{tTable('filters.age.maxLabel')}</Label>
                                <Input
                                  value={queryMaxAge}
                                  className="col-span-2 h-8"
                                  onChange={(e) => {
                                    const intRegex = /^[0-9]+$/;
                                    if (e.target.value.match(intRegex) || !e.target.value) {
                                      setQueryMaxAge(e.target.value);
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </span>
                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center`}
                      >
                        {t('table.headers.height')}
                      </span>
                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <span
                            className={`text-foreground transition flex gap-1 items-center`}
                          >
                            {t('table.headers.weight')}
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-40">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">{tTable('filters.weight.text')}</h4>
                              <p className="text-sm font-normal">
                                {data && data.length > 0 ? (
                                  <>
                                    {(data.reduce((acc, curr) => acc + parseInt(curr.weight), 0) / data.length).toFixed(2)} kg
                                  </>
                                ) : (
                                  <>{tTable('filters.weight.noData')}</>
                                )}
                              </p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableHead>
                    <TableHead className={`h-[36px] font-bold`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center justify-center`}
                      >
                        {t('table.headers.sport')}
                        <Popover>
                          <PopoverTrigger asChild>
                            <SlidersVertical className={'h-4 w-4 text-muted-foreground hover:text-foreground transition cursor-pointer'} strokeWidth={2}  />
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput placeholder={tTable('filters.sport.search')} className="h-9" />
                              <CommandList>
                                <CommandEmpty>{tTable('filters.sport.notFound')}</CommandEmpty>
                                <CommandGroup>
                                  {SPORTS_OPTIONS.map((item) => (
                                    <CommandItem
                                      key={item.value}
                                      value={item.value}
                                      onSelect={(currentValue) => {
                                        setQuerySport(currentValue === querySport ? undefined : currentValue)
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "",
                                          querySport === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                      />
                                      {item.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </span>
                    </TableHead>

                    <TableHead className={'w-10'}></TableHead>
                  </TableRow>
                </TableHeader>

                {data && data?.length > 0 ? (
                  <TableBody className={'min-h-[40px]'}>
                    {data.map((item, index) => (
                      <TableRow
                        key={`athlete_${index}`}
                        className={`h-[40px] bg-background`}
                      >
                        <TableCell className={'text-center w-[40px]'}>
                          <Checkbox
                            onCheckedChange={(value) => {
                              value ?
                                setExportData([item, ...exportData])
                                : setExportData(exportData.filter(data => data.id !== item.id))
                            }}
                          />
                        </TableCell>
                        <TableCell className={'text-left py-0 w-[60px]'}>
                          {item.id}
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.name}
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.surname}
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.idnp}
                        </TableCell>
                        <TableCell className={'text-center py-0'}>
                          <Badge variant={item.gender}>{GENDERS_MAP[item.gender]}</Badge>
                        </TableCell>
                        <TableCell className={'text-center py-0 min-w-[150px]'}>
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <span>{format(item.birthdate, 'dd.MM.yyyy')}</span>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-fit p-2">
                              <div className="flex justify-between space-x-4">
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">
                                    {differenceInYears(new Date(), item.birthdate)} {tTable('years')}
                                  </h4>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.height ? `${item.height} cm` : <span className={'text-xs text-muted-foreground'}>{tTable('noData')}</span>}
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.weight ? `${item.weight} kg` : <span className={'text-xs text-muted-foreground'}>No Data</span>}
                        </TableCell>
                        <TableCell className={'text-center py-0 min-w-[160px] overflow-x-scroll'}>
                          <Badge key={`${item.id}_${item.sport.name}`} className={'mr-2'}>
                            {SPORTS_MAP[item.sport.name]}
                          </Badge>
                        </TableCell>
                        <TableCell className={'min-w-[40px] p-0'}>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                type={'button'}
                                size={'icon'}
                                variant={'ghost'}
                                className={'text-muted-foreground hover:bg-transparent'}
                              >
                                <EllipsisVertical className="w-5 h-5" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className={'font-medium'}>
                              <DropdownMenuItem
                                className={'gap-2 text-destructive cursor-pointer'}
                                onClick={() => {
                                  setSelectedAthlete(item);
                                  requestAnimationFrame(() => setDeleteDialogOpen(true))
                                }}
                              >
                                <Trash2 />
                                {t('table.submenu.delete.button')}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                ) : (
                  <TableBody>
                    <TableRow className={'bg-background h-32 hover:bg-background'}>
                      <TableCell colSpan={10} >
                        <h2 className={'text-xl text-center font-medium'}>{tTable('noData')}</h2>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </div>
          </div>
        )}
      </div>

      <ResponsiveDialog
        isOpen={deleteDialogOpen}
        setIsOpen={setDeleteDialogOpen}
        title={t('table.submenu.delete.title', { athleteName: `${selectedAthlete.name} ${selectedAthlete.surname}` })}
        closeText={t('table.submenu.delete.closeBtn')}
        description={t('table.submenu.delete.description')}
      >
        <div className="w-full flex justify-center md:space-x-4">
          <Button
            size="lg"
            variant="outline"
            disabled={isPending}
            className="w-full hidden md:block"
            type="button"
            onClick={() => setDeleteDialogOpen(false)}
          >
            {t('table.submenu.delete.closeBtn')}
          </Button>

          <Button
            size="lg"
            type="submit"
            disabled={isPending}
            className="w-full bg-destructive text-white hover:bg-destructive/80"
            onClick={() => handleDeleteAthlete(selectedAthlete.id, user)}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('table.submenu.delete.deleting')}
              </>
            ) : (
              <span>{t('table.submenu.delete.button')}</span>
            )}
          </Button>
        </div>
      </ResponsiveDialog>
    </>
  )
}