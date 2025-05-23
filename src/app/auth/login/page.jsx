"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

import { LanguageSelector } from "@/components/ui/language-dropdown"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const t = useTranslations('LoginPage')
  const tLang = useTranslations('LanguageSelect')

  const router = useRouter();
  const [ activeTab, setActiveTab ] = useState("login");

  function handleLogin(e) {
    e.preventDefault();
  }

  const handleSignup = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <LanguageSelector className='absolute top-4 right-4' />
      
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <Link href="/" className="text-2xl font-bold">
              <Image src='/logo.png' width={300} height={0} alt={'Logo Minister'} />
            </Link>
          </div>
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">{t("tabs.login")}</TabsTrigger>
              <TabsTrigger value="signup">{t("tabs.signup")}</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="mt-4">
              <CardTitle className="text-2xl">{t("title.login")}</CardTitle>
              <CardDescription>{t("description.login")}</CardDescription>
            </TabsContent>
            <TabsContent value="signup" className="mt-4">
              <CardTitle className="text-2xl">{t("title.signup")}</CardTitle>
              <CardDescription>{t("description.signup")}</CardDescription>
            </TabsContent>
          </Tabs>
        </CardHeader>
        <CardContent className="p-6">
          {activeTab === "login" ? (
            <form onSubmit={handleLogin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}