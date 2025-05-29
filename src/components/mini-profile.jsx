import { useTranslations } from "next-intl";

import { LogOut } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import serverSignOut from "@/lib/auth/sign-out";
import { Skeleton } from "@/components/ui/skeleton";
import { LanguageSelector } from "@/components/ui/language-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MiniProfile({ user }) {
  const t = useTranslations('mini_profile');

  const userRoles = {
    "GUEST": t('roles.guest'),
    "USER": t('roles.user'),
    "MODERATOR": t('roles.moderator'),
    "ADMIN": t('roles.admin'),
    "SUPERUSER": t('roles.superuser'),
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full h-8 w-8"
        >
          {user ? (
            <Avatar>
              <AvatarImage src="/avatar.jpg" />
            </Avatar>
          ) : (
            <Skeleton className={'h-8 w-8'} />
          ) }
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mt-3 mr-2 sm:mr-4 bg-background/40 backdrop-blur-md backdrop-saturate-200">
        <DropdownMenuLabel className={'flex flex-col'}>
          { user ? (
            <div className="flex items-center gap-3 my-2">
              <div className="relative shrink-0">
                <Avatar>
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white " />
              </div>

              <div className="flex-1">
                <h2 className="text-lg leading-none text-zinc-900">
                  {user.name} {user.surname}
                </h2>
                <p className="font-normal text-foreground/70">{userRoles[user.role]}</p>
              </div>
            </div>
          ) : (
            <Skeleton className={'h-[20px] w-[130px]'} />
          ) }
        </DropdownMenuLabel>

        <LanguageSelector variant={'dropdown-item'} />

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className={'cursor-pointer text-red-500'}
          onClick={ () => { serverSignOut() }}
        >
          <LogOut className="h-4 w-4" />
          <span>{t('sign_out')}</span>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
