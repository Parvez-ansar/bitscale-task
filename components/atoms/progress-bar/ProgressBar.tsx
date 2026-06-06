interface ProgressBarProps {
  progress: string | number;
  showNumber?: boolean;
}

const ProgressBar = ({ progress, showNumber }: ProgressBarProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="grow bg-muted rounded-2xl">
        <div
          className="h-1 rounded-2xl bg-success duration-300"
          style={{ width: progress + "%" }}
        />
      </div>
      {showNumber && (
        <span className="text-[10px] font-semibold text-success">
          {progress} %
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
