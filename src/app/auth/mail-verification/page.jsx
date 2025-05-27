'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { newVerification } from "@/lib/auth/mail-verification";

import { ErrorMessage, PendingMessage, SuccessMessage } from "@/components/messages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {useTranslations} from "next-intl";
import {LanguageSelector} from "@/components/ui/language-dropdown";

export default function Page() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isPending, startTransition] = useTransition();

  const t = useTranslations('mailVerification.page');
  const tFunc = useTranslations('mailVerification.function');

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  function translateError(code) {
    switch (code) {
      case 1:
        return tFunc('errors.1_incorrectToken')
      case 2:
        return tFunc('errors.2_expiredToken')
      case 3:
        return tFunc('errors.3_noUserByEmail')
      default:
        return tFunc('errors.0_unknown')
    }
  }

  function onSubmit() {
    startTransition(async () => {
      setError(null);
      setSuccess(null);

      if (!token) {
        setError(t('errors.noToken'));
        return;
      }

      await newVerification(token).then((res) => {
        if(res.error){
          setError(translateError(res.error));
          return;
        }

        setSuccess(res.success);
      }).catch((res) => {
        console.error('NewVerification error: ', res);
        setError(res.error);
      })
    })
  }

  useEffect(() => {
    if (!token) {
      setError(t('errors.noToken'));
    } else {
      onSubmit();
    }
    // adding onSubmit to dependencies will cause infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  return (
    <div className={'w-full h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900'}>
      <div className={'absolute top-4 right-4 flex gap-2'}>
        <LanguageSelector />
      </div>

      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle  className="text-xl">{t('title')}</CardTitle>
        </CardHeader>
        <CardContent className={'flex justify-center'}>
          {isPending && (
            <PendingMessage className={'w-full'}>
              {t('pending')}
            </PendingMessage>
          )}

          {success && (
            <SuccessMessage className={'w-full'}>
              {t('success')}
            </SuccessMessage>
          )}

          {error && (
            <ErrorMessage className={'w-full'}>
              {error}
            </ErrorMessage>
          )}
        </CardContent>
      </Card>
    </div>
  )
}