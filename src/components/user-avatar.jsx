import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export const UserAvatar = ({ src, height = 6, width = 6, className = "shadow-sm border" }) => {
  return (
    <>
      <Avatar className={`h-${height} w-${width} ${className}`}>
        <AvatarImage
          src={src === '' || !src ? '/images/user-placeholder.webp' : src}
        />
        <AvatarFallback><Skeleton className={'rounded-full'} /></AvatarFallback>
      </Avatar>
    </>
  )
};