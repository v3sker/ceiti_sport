'use client';

import { useRouter } from "next/navigation";

import { Calendar, Users, Volleyball } from "lucide-react";
import {useTranslations} from "next-intl";

function DashboardItem({ title, icon, href, children }) {
  const router = useRouter();

  return (
    <div
      className="bg-white  rounded-xl p-6 flex flex-col border border-gray-200 hover:border-gray-400 transition cursor-pointer"
      onClick={() => { router.push(href) }}
    >
      <h2 className="text-lg font-bold text-gray-900 mb-4 text-left flex items-center gap-2 ">
        {icon}
        {title}
      </h2>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const t = useTranslations('dashboard');

  return (
    <div className="space-y-4 w-full max-w-[1200px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardItem
          title={t('athletes.title')}
          icon={<Users className={'w-5 h-5 text-muted-foreground'} />}
          href={'/dashboard/athlete'}
        >

        </DashboardItem>

        <DashboardItem
          title={t('sports.title')}
          icon={<Volleyball className={'w-5 h-5 text-muted-foreground'} />}
          href={'/dashboard/sport'}
        />
      </div>

      <DashboardItem
        title={t('events.title')}
        icon={<Calendar className={'w-5 h-5 text-muted-foreground'} />}
        href={'/dashboard/event'}
      />
    </div>
  )
}