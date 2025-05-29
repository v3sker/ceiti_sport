"use client"
import { queryClient } from "@/lib/query-client";

import TopNav from "@/components/top-nav";
import Sidebar from "@/components/sidebar";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function Layout({ children }) {
  return (
    <div className={`flex h-screen`}>
      <Sidebar />
      <div className="w-full flex flex-1 flex-col">
        <header className="h-16">
          <TopNav />
        </header>
        <QueryClientProvider client={queryClient}>
          <main className="flex-1 overflow-auto bg-muted/80 flex justify-center">
            {children}
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </div>
  )
}
