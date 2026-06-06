export default function IntegrationsIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true">
      <g clipPath="url(#integrations-clip)">
        <path
          d="M6 10.6667C8.57733 10.6667 10.6667 8.57732 10.6667 6C10.6667 3.42267 8.57733 1.33333 6 1.33333C3.42267 1.33333 1.33333 3.42267 1.33333 6C1.33333 8.57732 3.42267 10.6667 6 10.6667Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14.6667C12.5773 14.6667 14.6667 12.5773 14.6667 10C14.6667 7.42267 12.5773 5.33333 10 5.33333C7.42267 5.33333 5.33333 7.42267 5.33333 10C5.33333 12.5773 7.42267 14.6667 10 14.6667Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="integrations-clip">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
