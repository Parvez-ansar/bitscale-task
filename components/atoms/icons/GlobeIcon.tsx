export default function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true">
      <g clipPath="url(#globe-clip)">
        <path
          d="M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8 14.6667M14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8 1.33337M14.6667 8.00004H1.33333M8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8.00004M8 14.6667C9.66752 12.8411 10.6152 10.472 10.6667 8.00004C10.6152 5.52806 9.66752 3.15894 8 1.33337M8 14.6667C6.33247 12.8411 5.38483 10.472 5.33333 8.00004C5.38483 5.52806 6.33247 3.15894 8 1.33337M1.33333 8.00004C1.33333 4.31814 4.3181 1.33337 8 1.33337"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="globe-clip">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
