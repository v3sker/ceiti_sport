"use client"

import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

import {
  Users,
  UserCog,
  UserPlus,
  Medal,
  Menu,
  Trophy,
  Volleyball,
  Calendar,
} from "lucide-react";
import {useTranslations} from "next-intl";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { data: session } = useSession();
  const user = session?.user;

  const t = useTranslations("sidebar");

  function handleNavigation() {
    setIsMobileMenuOpen(false)
  }

  function NavItem({
    href,
    icon: Icon,
    children,
  }) {
    return (
      <Link
        href={href}
        onClick={handleNavigation}
        className="flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
      >
        <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
        {children}
      </Link>
    )
  }

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-3 left-3 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <nav
        className={`
            fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
            lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col justify-center">
          <Link
            href="/dashboard/athlete"
            className="h-16 px-6 flex items-center border-b border-gray-200"
          >
            <div className="flex items-center gap-1.5">
              <Trophy />

              <span className="mt-1 text-2xl font-semibold hover:cursor-pointer text-gray-900">
                Sport
              </span>
            </div>
          </Link>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-6">
              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 ">
                  {t('team.label')}
                </div>
                <div className="space-y-1">
                  <NavItem href="/dashboard/athlete" icon={Users}>
                    {t('team.athletes')}
                  </NavItem>
                  <NavItem href="/dashboard/sport" icon={Volleyball}>
                    {t('team.sports')}
                  </NavItem>
                  <NavItem href="/dashboard/event" icon={Calendar}>
                    {t('team.events')}
                  </NavItem>
                  <NavItem href="/dashboard/participation" icon={Medal}>
                    {t('team.participation')}
                  </NavItem>
                </div>
              </div>

              {(user && (user.role === "ADMIN" || "SUPERUSER")) && (
                <div>
                  <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {t('admin.label')}
                  </div>
                  <div className="space-y-1">
                    <NavItem href="/dashboard/users" icon={UserCog}>
                      {t('admin.users')}
                    </NavItem>
                    <NavItem href="/dashboard/users/new" icon={UserPlus}>
                      {t('admin.new_user')}
                    </NavItem>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
