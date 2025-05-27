"use client"

import { useSession } from "next-auth/react";
import MiniProfile from "@/components/mini-profile";

export default function TopNav() {
  const { data: sessionData } = useSession();
  const user = sessionData?.user;

  return (
    <nav className="px-4 flex items-center justify-between bg-white border-b border-gray-200 h-full">
      <div className="ml-auto h-8">
        <MiniProfile user={user} />
      </div>
    </nav>
  )
}
