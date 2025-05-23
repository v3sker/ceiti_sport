import { useTranslations } from "next-intl"

import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSelector({ className }) {
  const t = useTranslations('LanguageSelect');
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" aria-label="Select theme" className={className}>
          <Globe size={16} strokeWidth={2} aria-hidden="true" /> 
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-32 mr-4">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <span>🇷🇴 {t('ro')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <span>🇺🇸 {t('en')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) 
}