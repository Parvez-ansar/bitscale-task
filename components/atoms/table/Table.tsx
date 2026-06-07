import { cn } from "@/lib/utils";

export function Table({
  className,
  children,
  wrapperClassName,
}: {
  className?: string;
  wrapperClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`w-full overflow-x-auto ${wrapperClassName}`}>
      <table className={cn("w-full border-collapse", className)}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <thead className={cn("border-b border-border", className)}>
      {children}
    </thead>
  );
}

export function TableBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <tbody className={className}>{children}</tbody>;
}

export function TableRow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <tr
      className={cn(
        "group border-b border-border hover:bg-subtle transition-colors duration-100",
        className,
      )}>
      {children}
    </tr>
  );
}

export function TableHead({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <th
      className={cn(
        "py-2.5 px-4 text-left text-xs font-medium text-tab whitespace-nowrap",
        className,
      )}>
      {children}
    </th>
  );
}

export function TableCell({
  className,
  children,
  colSpan,
  rowSpan,
}: {
  className?: string;
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
}) {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={cn("py-0.5 px-4 text-sm text-tab", className)}>
      {children}
    </td>
  );
}
