'use client';

import toast from "react-hot-toast";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { fetchSports } from "@/lib/data/sport/fetch";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAthlete } from "@/lib/data/athlete/create";
import { getNewAthleteSchema } from "@/lib/schema/athlete";

import { MODERATOR_ROLES } from "@/app/constants/user";
import { Plus, UserPlus }  from "lucide-react";

import { Oval } from "react-loader-spinner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NewAthletePage() {
  const { data: session } = useSession();
  const user = session?.user;
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const t = useTranslations('newAthlete.page');
  const tFunc = useTranslations('newAthlete.function');
  const tSchema = useTranslations('newAthlete.schema');
  const tForm = useTranslations('newAthlete.page.form');

  const NewAthleteSchema = getNewAthleteSchema(tSchema);
  const form = useForm({
    resolver: yupResolver(NewAthleteSchema),
    defaultValues: {
      name: "",
      surname: "",
      idnp: "",
      birthdate: {
        day: '',
        month: '',
        year: '',
      },
      height: "",
      weight: "",
      sport: "",
    }
  });

  const { data: sports, isFetching, isLoading, isError } = useQuery({
    queryKey: ["sports"],
    queryFn: async () => fetchSports(),
    refetchOnWindowFocus: false
  })

  if (!user) return (
    <div className={'h-full w-full flex justify-center items-center pb-24'}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#007AFF"
        secondaryColor={'#007AFF'}
        ariaLabel="oval-loading"
      />
    </div>
  )

  if (!MODERATOR_ROLES.includes(user?.role)) return (
    <div className={'text-2xl font-medium h-full w-full flex justify-center items-center pb-24'}>
      {t('accessDenied')}
    </div>
  )

  function onSubmit(values) {
    const promise = new Promise((resolve, reject) => {
      try {
        if (!user || !user.id) reject(tFunc('errors.1_noUser'));
        if (!MODERATOR_ROLES.includes(user.role)) reject(tFunc('errors.2_accessDenied'));

        startTransition(async () => {
          console.log(values);

          await createAthlete(values).then(res => {
            if (!res.error && !res.success) {
              reject('Unknown error');
              return;
            }

            if (res.error) {
              reject(res.error);
              return;
            }

            router.push('/dashboard/athlete');
            queryClient.invalidateQueries({ queryKey: ['athletes'] })
            resolve(res);
          })
        })
      } catch (err) {
        console.error(err)
        reject(err.message);
      }
    });

    toast.promise(promise, {
      loading: tFunc('toast.loading'),
      success: tFunc('toast.success'),
      error: err => err || tFunc('toast.error'),
    });

    return promise;
  }

  return (
    <div className={'w-full max-w-[800px] h-fit p-6'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={'flex flex-col gap-4'}>
            <div className={'flex justify-between'}>
              <div className={'flex gap-2 items-center mr-2'}>
                <UserPlus className={'h-6 w-6 text-muted-foreground'} />
                <h1 className={'text-2xl font-semibold'}>{t('title')}</h1>
              </div>

              <Button
                className={'ml-auto flex gap-2 pl-3 bg-blue-600 hover:bg-blue-600/80'}
                disabled={isPending}
                type={'submit'}
              >
                <Plus />
                {t('submitBtn')}
              </Button>
            </div>

            <Card className={'shadow-sm'}>
              <CardHeader className={'bg-muted py-4 border-b'}>
                <CardTitle className={'text-2xl font-medium text-black/70'}>
                  {tForm('general.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className={'pt-4 grid gap-4'}>
                <div className={'flex flex-col sm:flex-row gap-4 w-full'}>
                  <FormField
                    control={form.control}
                    name={'name'}
                    render={({ field }) => (
                      <FormItem className={'w-full space-y-1'}>
                        <FormLabel>{tForm('general.name.label')}</FormLabel>
                        <FormControl>
                          <Input placeholder={tForm('general.name.placeholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={'surname'}
                    render={({ field }) => (
                      <FormItem className={'w-full space-y-1'}>
                        <FormLabel>{tForm('general.surname.label')}</FormLabel>
                        <FormControl>
                          <Input placeholder={tForm('general.surname.placeholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={'idnp'}
                    render={({ field }) => (
                      <FormItem className={'w-full space-y-1'}>
                        <FormLabel>{tForm('general.idnp.label')}</FormLabel>
                        <FormControl>
                          <Input placeholder={tForm('general.idnp.placeholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className={'flex flex-col sm:flex-row gap-4 w-full'}>
                  <div className={'space-y-1 w-full'}>
                    <FormLabel>{tForm('general.birthdate.label')}</FormLabel>
                    <div className={'flex gap-2'}>
                      <FormField
                        control={form.control}
                        name={'birthdate.day'}
                        render={({ field }) => (
                          <FormItem className={'w-full space-y-1'}>
                            <FormControl>
                              <Input placeholder={tForm('general.birthdate.dayPlaceholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={'birthdate.month'}
                        render={({ field }) => (
                          <FormItem className={'w-full space-y-1'}>
                            <FormControl>
                              <Input placeholder={tForm('general.birthdate.monthPlaceholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={'birthdate.year'}
                        render={({ field }) => (
                          <FormItem className={'w-full space-y-1'}>
                            <FormControl>
                              <Input placeholder={tForm('general.birthdate.yearPlaceholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className={'w-full space-y-1'}>
                        <FormLabel>{tForm('general.gender.label')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={tForm('general.gender.placeholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="M">{tForm('general.gender.male')}</SelectItem>
                            <SelectItem value="F">{tForm('general.gender.female')}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className={'shadow-sm'}>
              <CardHeader className={'bg-muted py-4 border-b'}>
                <CardTitle className={'text-2xl font-medium text-black/70'}>
                  {tForm('parameters.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className={'flex pt-4 gap-4'}>
                <FormField
                  control={form.control}
                  name={'height'}
                  render={({ field }) => (
                    <FormItem className={'w-full space-y-1'}>
                      <FormLabel>{tForm('parameters.height.label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={tForm('parameters.height.placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={'weight'}
                  render={({ field }) => (
                    <FormItem className={'w-full space-y-1'}>
                      <FormLabel>{tForm('parameters.weight.label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={tForm('parameters.weight.placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card className={'shadow-sm'}>
              <CardHeader className={'bg-muted py-4 border-b'}>
                <CardTitle className={'text-2xl font-medium text-black/70'}>
                  {tForm('sports.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className={'flex flex-col pt-4 gap-4'}>
                <FormField
                  control={form.control}
                  name="sport"
                  render={({ field }) => (
                    <FormItem className={'w-full space-y-1'}>
                      <FormLabel>{tForm('sports.label')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={tForm('sports.placeholder')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {isFetching || isLoading ? (
                            <Skeleton className={'w-full h-12'} />
                          ) : (
                            <>
                              {!isError ? (
                                <>
                                  {sports.map(item => (
                                    <SelectItem
                                      key={item.id}
                                      value={item.name}
                                    >
                                      {tForm(`sports.options.${item.name}`)}
                                    </SelectItem>
                                  ))}
                                </>
                              ) : (
                                <div>Error</div>
                              )}
                            </>
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>
  )
}