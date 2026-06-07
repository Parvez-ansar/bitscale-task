export default function MarkerPinIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true">
      <g clipPath="url(#marker-pin-clip)">
        <path
          d="M3.33333 9.52428C2.09909 10.0688 1.33333 10.8275 1.33333 11.6667C1.33333 13.3236 4.3181 14.6667 7.99999 14.6667C11.6819 14.6667 14.6667 13.3236 14.6667 11.6667C14.6667 10.8275 13.9009 10.0688 12.6667 9.52428M12 5.33337C12 8.04251 8.99999 9.33337 7.99999 11.3334C6.99999 9.33337 3.99999 8.04251 3.99999 5.33337C3.99999 3.12423 5.79086 1.33337 7.99999 1.33337C10.2091 1.33337 12 3.12423 12 5.33337ZM8.66666 5.33337C8.66666 5.70156 8.36818 6.00004 7.99999 6.00004C7.6318 6.00004 7.33333 5.70156 7.33333 5.33337C7.33333 4.96518 7.6318 4.66671 7.99999 4.66671C8.36818 4.66671 8.66666 4.96518 8.66666 5.33337Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="marker-pin-clip">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
