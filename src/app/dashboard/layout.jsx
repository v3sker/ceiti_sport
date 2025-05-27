"use client"

import Sidebar from "@/components/sidebar"
import TopNav from "@/components/top-nav"

export default function Layout({ children }) {
  return (
    <div className={`flex h-screen`}>
      <Sidebar />
      <div className="w-full flex flex-1 flex-col">
        <header className="h-16">
          <TopNav />
        </header>
        <main className="flex-1 overflow-auto p-6 bg-muted/80 flex justify-center">{children}</main>
      </div>
    </div>
  )
}
