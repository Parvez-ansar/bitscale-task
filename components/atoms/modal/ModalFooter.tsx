interface ModalFooterProps {
  children: React.ReactNode;
}

export function ModalFooter({ children }: ModalFooterProps) {
  return (
    <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-border">
      {children}
    </div>
  );
}
