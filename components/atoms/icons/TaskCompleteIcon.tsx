export default function TaskCompleteIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true">
      <g clipPath="url(#task-complete-clip)">
        <path
          d="M15.7143 9.82143V5.34286C15.7143 4.02273 15.7143 3.36267 15.4574 2.85845C15.2314 2.41492 14.8708 2.05433 14.4273 1.82834C13.9231 1.57143 13.263 1.57143 11.9429 1.57143H6.91431C5.59419 1.57143 4.93413 1.57143 4.42991 1.82834C3.98638 2.05433 3.62578 2.41492 3.3998 2.85845C3.14288 3.36267 3.14288 4.02273 3.14288 5.34286V13.5143C3.14288 14.8344 3.14288 15.4945 3.3998 15.9987C3.62578 16.4422 3.98638 16.8028 4.42991 17.0288C4.93413 17.2857 5.59419 17.2857 6.91431 17.2857H9.4286M11 8.64285H6.28574M7.85717 11.7857H6.28574M12.5715 5.5H6.28574M11.3929 14.9286L12.9643 16.5L16.5 12.9643"
          stroke="currentColor"
          strokeWidth="1.88571"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="task-complete-clip">
          <rect width="18.8571" height="18.8571" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
