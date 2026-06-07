import { Button } from "@/components/atoms/button/Button";

interface ModalHeaderProps {
  title: string;
  description?: string;
  onClose: () => void;
}

export function ModalHeader({ title, description, onClose }: ModalHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 mb-4">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {description && <p className="text-xs text-helper">{description}</p>}
      </div>
    </div>
  );
}
