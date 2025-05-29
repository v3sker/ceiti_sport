'use client';

import { cn } from "@/lib/utils";
import {useEffect, useState} from "react";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import { queryClient } from "@/lib/query-client";
import { useQuery } from "@tanstack/react-query";
import { fetchParticipations } from "@/lib/data/participation/fetch";

import { Check, RefreshCcw, SlidersVertical, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

export default function ParticipationPage() {
  const [queryLevel, setQueryLevel] = useState(null);

  const t = useTranslations('participation.page');
  const tTable = useTranslations('participation.table');

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['participations'],
    queryFn: () => fetchParticipations({ level: queryLevel }),
  })

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["participations"] })
  }, [queryLevel])

  const COMPETITION_LEVELS_MAP = {
    "REPUBLIC": tTable('competitionLevelsMap.republic'),
    "NATIONAL": tTable('competitionLevelsMap.national'),
    "INTERNATIONAL": tTable('competitionLevelsMap.international'),
  }

  const COMPETITION_LEVEL_OPTIONS = [
    { label: tTable('competitionLevelsMap.republic'), value: "REPUBLIC" },
    { label: tTable('competitionLevelsMap.national'), value: "NATIONAL" },
    { label: tTable('competitionLevelsMap.international'), value: "INTERNATIONAL" },
  ]

  return (
    <div className={'p-6 h-fit w-full max-w-[1200px] flex flex-col'}>
      <div className={'flex gap-2 items-center justify-between pb-2 overflow-scroll md:overflow-visible'}>
        <div className={'flex gap-2 items-center mr-4'}>
          <Users className={'text-muted-foreground'} />
          <h1 className={'text-2xl font-semibold'}>{t('title')}</h1>
        </div>

        <div>
          <Button
            variant={'outline'}
            onClick={() => {
              queryClient.invalidateQueries({queryKey: [`participations`]}).then();
            }}
          >
            <RefreshCcw strokeWidth={1.5} />
            {t('controls.refreshBtn')}
          </Button>
        </div>
      </div>

      {isFetching || isLoading ? (
        <Skeleton className={'h-[320px] w-full rounded-md mt-2'} />
      ) : (
        <div className={'border rounded-lg'}>
          <Table className={'max-w-screen'}>
            <TableHeader className={'bg-muted'}>
              <TableRow>
                <TableHead className={`h-[36px] font-bold text-foreground`}>
                  {tTable('headers.athlete.fullname')}
                </TableHead>
                <TableHead className={`h-[36px] font-bold text-foreground`}>
                  {tTable('headers.competition.name')}
                </TableHead>
                <TableHead className={`h-[36px] font-bold text-foreground flex gap-1 items-center`}>
                  {tTable('headers.competition.level')}

                  <Popover>
                    <PopoverTrigger asChild>
                      <SlidersVertical className={'h-4 w-4 text-muted-foreground hover:text-foreground transition cursor-pointer'} strokeWidth={2}  />
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder={tTable('filters.competitionLevel.search')} className="h-9" />
                        <CommandList>
                          <CommandEmpty>{tTable('filters.competitionLevel.notFound')}</CommandEmpty>
                          <CommandGroup>
                            {COMPETITION_LEVEL_OPTIONS.map((item) => (
                              <CommandItem
                                key={item.value}
                                value={item.value}
                                onSelect={(currentValue) => {
                                  setQueryLevel(currentValue === queryLevel ? undefined : currentValue)
                                }}
                              >
                                <Check
                                  className={cn(
                                    "",
                                    queryLevel === item.value ? "opacity-100" : "opacity-0"
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
                </TableHead>
                <TableHead className={`h-[36px] font-bold text-center text-foreground`}>
                  {tTable('headers.athlete.placement')}
                </TableHead>
                <TableHead className={`h-[36px] font-bold text-foreground`}>
                  {tTable('headers.competition.dateFrom')}
                </TableHead>
                <TableHead className={`h-[36px] font-bold text-foreground`}>
                  {tTable('headers.competition.dateUntil')}
                </TableHead>
              </TableRow>
            </TableHeader>

            {data && data.length > 0 ? (
              <TableBody className={'bg-background'}>
                {data.map((item, index) => (
                  <TableRow key={'participation_' + index}>
                    <TableCell className={'py-2 text-left'}>
                      {item.athlete.name} {item.athlete.surname}
                    </TableCell>
                    <TableCell className={'text-left py-2 font-medium'}>
                      {item.competition.title}
                    </TableCell>
                    <TableCell className={'text-left py-2 font-medium'}>
                      {COMPETITION_LEVELS_MAP[item.competition.level]}
                    </TableCell>
                    <TableCell className={'text-center'}>
                      <Badge>{item.placement}</Badge>
                    </TableCell>
                    <TableCell>
                      {format(item.competition.from_date, 'dd.MM.yyyy')}
                    </TableCell>
                    <TableCell>
                      {format(item.competition.until_date, 'dd.MM.yyyy')}
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
      )}
    </div>
  )
}