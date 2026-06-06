export default function FileDownloadIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true">
      <g clipPath="url(#file-download-clip)">
        <path
          d="M6.125 0.99292V2.80003C6.125 3.04505 6.125 3.16757 6.17268 3.26115C6.21463 3.34347 6.28156 3.4104 6.36388 3.45235C6.45747 3.50003 6.57998 3.50003 6.825 3.50003H8.63211M6.5625 6.5625L5.25 7.875L3.9375 6.5625M5.25 7.875L5.25 5.25M6.125 0.875H3.85C3.11493 0.875 2.7474 0.875 2.46664 1.01805C2.21967 1.14389 2.01889 1.34467 1.89305 1.59164C1.75 1.8724 1.75 2.23993 1.75 2.975V7.525C1.75 8.26007 1.75 8.6276 1.89305 8.90836C2.01889 9.15532 2.21967 9.35611 2.46664 9.48195C2.7474 9.625 3.11493 9.625 3.85 9.625H6.65C7.38507 9.625 7.7526 9.625 8.03336 9.48195C8.28033 9.35611 8.48111 9.15532 8.60695 8.90836C8.75 8.6276 8.75 8.26007 8.75 7.525V3.5L6.125 0.875Z"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="file-download-clip">
          <rect width="10.5" height="10.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
