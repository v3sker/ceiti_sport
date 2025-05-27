'use client';

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { fetchAthletes } from "@/lib/data/athlete/fetch";

import { Users, Plus, RefreshCcw, Download } from "lucide-react"

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { CustomCombobox } from "@/components/custom-combobox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AthletesPage() {
  const [orderBy, setOrderBy] = useState("created_at");
  const [orderDirection, setOrderDirection] = useState("asc");

  const router = useRouter();
  const t = useTranslations('athlete.page')

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['athletes'],
    queryFn: () => fetchAthletes({ orderBy, orderDirection }),
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    queryClient.invalidateQueries({queryKey: ['athletes']}).then()
  }, [orderBy, orderDirection])

  const ORDER_DIRECTIONS = [
    { label: t('controls.orderDirection.labels.ascending'), value: "asc" },
    { label: t('controls.orderDirection.labels.descending'), value: "desc" },
  ]

  const SORT_OPTIONS = [
    { label: "ID", value: "id" },
    { label: t('controls.orderBy.labels.createdAt'), value: "created_at" },
    { label: t('controls.orderBy.labels.updatedAt'), value: "updated_at" },
    { label: t('controls.orderBy.labels.gender'), value: "gender" },
    { label: t('controls.orderBy.labels.height'), value: "height" },
    { label: t('controls.orderBy.labels.weight'), value: "weight" },
  ];

  const TABLE_HEADERS = [
    { text: "ID" },
    { text: t('table.headers.name') },
    { text: t('table.headers.surname') },
    { text: t('table.headers.gender') },
    { text: t('table.headers.height') },
    { text: t('table.headers.weight') },
  ];

  const GENDERS_MAP = {
    "M": t('table.genderMap.male'),
    "F": t('table.genderMap.female')
  };

  return (
    <div className={'w-full max-w-[1000px] flex flex-col gap-4'}>
      <div className={'flex flex-col xl:flex-row gap-4 justify-between overflow-x-scroll'}>
        <div className={'flex gap-2 items-center group/athletes-header'}>
          <Users className={'text-muted-foreground'} />
          <h1 className={'text-2xl font-semibold'}>{t('title')}</h1>

          <Button
            size="icon"
            type="button"
            variant="outline"
            onClick={() => {
              queryClient.invalidateQueries({queryKey: [`athletes`]}).then();
            }}
            className="h-6 w-6 opacity-0 group-hover/athletes-header:opacity-100 transition"
          >
            <RefreshCcw strokeWidth={1.5} />
            <span className="sr-only">Обновить</span>
          </Button>

          <Button
            size="icon"
            type="button"
            variant="outline"
            className="h-6 w-6 opacity-0 group-hover/athletes-header:opacity-100 transition"
          >
            <Download strokeWidth={1.5} />
            <span className="sr-only">Экспорт</span>
          </Button>

          <Button className={'ml-auto flex xl:hidden gap-2'} onClick={() => { router.push('/dashboard/athlete/new') }}>
            <Plus />
            {t('controls.addNewBtn')}
          </Button>
        </div>

        <div className={'flex gap-2 ml-auto relative'}>
          <Input
            type={'text'}
            className={'bg-background font-medium text-sm placeholder:font-normal outline-none min-w-[180px]'}
            placeholder={'Write ID to find athlete'}
          />

          <CustomCombobox
            options={ORDER_DIRECTIONS}
            value={orderDirection}
            setValue={setOrderDirection}
            placeholder={t('controls.orderDirection.placeholder')}
          />

          <CustomCombobox
            options={SORT_OPTIONS}
            value={orderBy}
            setValue={setOrderBy}
            removeValue={true}
            placeholder={t('controls.orderBy.placeholder')}
          />

          <div className={'hidden xl:flex gap-2'}>
            <Separator orientation={'vertical'} />

            <Button className={'flex gap-2'} onClick={() => { router.push('/dashboard/athlete/new') }}>
              <Plus />
              {t('controls.addNewBtn')}
            </Button>
          </div>
        </div>
      </div>

      {isFetching || isLoading ? (
        <Skeleton className={'h-[640px] w-full rounded-md'} />
      ) : (
        <>
          {data && data?.length > 0 ? (
            <div className={'flex flex-col gap-3'}>
              <div className={'border'}>
                <Table className={'max-w-screen'}>
                  <TableHeader className={'bg-muted'}>
                    <TableRow>
                      {TABLE_HEADERS.map((item, itemIndex) => (
                        <TableHead key={itemIndex} className={`h-[36px] font-bold ${item.className}`}>
                      <span
                        className={`text-foreground transition flex gap-1 items-center`}
                      >
                        {item.text}
                      </span>
                        </TableHead>
                      ))}

                      <TableHead className={'w-10'}></TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className={'min-h-[40px]'}>
                    {data.map((item, index) => (
                      <TableRow
                        key={`client${index}`}
                        className={'h-[40px] bg-background'}
                      >
                        <TableCell className={'text-left py-0 w-[80px]'}>
                          {item.id}
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.name}
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.surname}
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          <Badge variant={item.gender}>{GENDERS_MAP[item.gender]}</Badge>
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.height} cm
                        </TableCell>
                        <TableCell className={'text-left py-0'}>
                          {item.weight} kg
                        </TableCell>
                        <TableCell className={'w-[40px]'}></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ) : (
            <>No data</>
          )}
        </>
      )}
    </div>
  )
}