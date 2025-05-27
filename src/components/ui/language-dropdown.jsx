import { useTranslations } from "next-intl";
import { setUserLocale } from "@/lib/locale";

import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem, DropdownMenuPortal,
  DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function LanguageSelector({ variant }) {
  const t = useTranslations('languageSelect');

  if (variant === 'dropdown-item' ) return (
    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className={'cursor-pointer gap-2'}>
          <Globe className={'h-4 w-4'} />
          {t('label')}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent className={'bg-background/40 backdrop-blur-md backdrop-saturate-200'}>
            <DropdownMenuItem className={'cursor-pointer'} onClick={() => setUserLocale('ro')}>
              <span>🇷🇴 {t('ro')}</span>
            </DropdownMenuItem>
            <DropdownMenuItem className={'cursor-pointer'} onClick={() => setUserLocale('en')}>
              <span>🇺🇸 {t('en')}</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" aria-label="Select language">
          <Globe size={16} strokeWidth={2} aria-hidden="true" /> 
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-fit mr-4">
        <DropdownMenuItem className={'cursor-pointer'} onClick={() => setUserLocale('ro')}>
          <span>🇷🇴 {t('ro')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={'cursor-pointer'} onClick={() => setUserLocale('en')}>
          <span>🇺🇸 {t('en')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}