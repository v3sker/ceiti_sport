"use client"

import { useForm} from "react-hook-form";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { getLoginSchema } from "@/lib/schema/auth";

import { Eye, EyeOff } from "lucide-react";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-dropdown";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { login } from "@/lib/auth/login";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [ showPass, setShowPass ] = useState(false);
  const t = useTranslations('login.page');
  const tFunc = useTranslations('login.function');

  const [ isPending, startTransition ] = useTransition();

  const LoginSchema = getLoginSchema(tFunc);

  const form = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  function handleLogin(values) {
    const promise = new Promise((resolve, reject) => {
      startTransition(async () => {
        try {
          await login(values).then(res => {
            if (res.error) {
              let errorMsg;
              switch (res.error) {
                case 1:
                  errorMsg = tFunc('errors.1_incorrectData');
                  break;
                case 2:
                  errorMsg = tFunc('errors.2_emailNotVerified');
                  break;
                case 3:
                  errorMsg = tFunc('errors.3_emailNotVerified_Sent');
                  break;
                case 4:
                  errorMsg = tFunc('errors.4_accessDenied');
                  break;
                case 6:
                  if (res.errType) {
                    errorMsg = tFunc('errors.6_unknownWithDetails', { error: res.errType });
                  } else {
                    errorMsg = tFunc('errors.5_unknown');
                  }
                  break;
                case 7:
                  errorMsg = tFunc('errors.7_validation');
                  break;
                case 8:
                  if (res.errDetails) {
                    errorMsg = tFunc('errors.8_validationWithDetails', { details: res.errDetails });
                  } else {
                    errorMsg = tFunc('errors.7_validation');
                  }
                  break;
                default:
                  errorMsg = tFunc('errors.5_unknown');
              }

              reject(errorMsg);
            }

            if (res.success) {
              resolve();
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            } else {
              reject(tFunc('errors.5_unknown'))
            }

          })
        } catch (err) {
          reject(err.message);
        }
      })
    })

    toast.promise(promise, {
      "loading": t('promise.loading'),
      "success": t('promise.success'),
      "error": (err) => err || t('promise.error')
    }).then();

    return promise;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className={'absolute top-4 right-4 flex gap-2'}>
        <LanguageSelector />
      </div>

      <div className={'w-full flex flex-col gap-2 items-center mb-32'}>
        <div className="flex items-center justify-center mb-2">
          <Image src='/logo.png' width={300} height={0} alt={'Logo Minister'} />
        </div>

        <Card className="w-full max-w-md border shadow-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">{t("title")}</CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleLogin)}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      disabled={isPending}
                      name="email"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>{t('form.email.label')}</FormLabel>

                          <FormControl>
                            <Input
                              type="text"
                              placeholder={t('form.email.placeholder')}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    disabled={isPending}
                    name="password"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel htmlFor={'password'}>{t('form.password.label')}</FormLabel>

                        <FormControl>
                          <div className={'relative'}>
                            <Input
                              type={showPass ? 'text' : 'password'}
                              id='password'
                              placeholder="••••••••"
                              {...field}
                            />
                            <Button
                              variant={'icon'}
                              className={'absolute right-0 bottom-0 py-2 px-2.5 text-muted-foreground hover:text-black transition'}
                              type={'button'}
                              onClick={() => setShowPass(!showPass)}
                            >
                              {showPass ? <EyeOff className={'h-5 w-5'}/> : <Eye className={'h-5 w-5'}/>}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending}
                  >
                    {t('form.button')}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}