import { cn } from "@/lib/utils";

interface IconBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function IconBadge({ children, className }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "icon-badge flex items-center justify-center rounded-lg bg-white shrink-0",
        className,
      )}>
      {children}
    </div>
  );
}
