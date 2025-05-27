'use client';

import { useSession } from "next-auth/react";
import { Oval } from "react-loader-spinner";

export default function NewAthletePage() {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) return (
    <div className={'h-full w-full flex justify-center items-center pb-24'}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#007AFF"
        secondaryColor={'#007AFF'}
        ariaLabel="oval-loading"
      />
    </div>
  )

  if (user?.role !== "MODERATOR" || user?.role !== "ADMIN") return (
    <div className={'h-full w-full flex justify-center items-center pb-24'}>
      Access Denied!
    </div>
  )
}