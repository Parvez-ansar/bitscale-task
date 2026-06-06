export default function RocketIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true">
      <g clipPath="url(#rocket-clip)">
        <path
          d="M6 7.5L4.5 6M6 7.5C6.69842 7.23437 7.36844 6.89936 8 6.5M6 7.5V10C6 10 7.515 9.725 8 9C8.54 8.19 8 6.5 8 6.5M4.5 6C4.76607 5.30972 5.1011 4.64803 5.5 4.025C6.08259 3.0935 6.89381 2.32653 7.8565 1.79705C8.81919 1.26757 9.90133 0.993187 11 1C11 2.36 10.61 4.75 8 6.5M4.5 6H2C2 6 2.275 4.485 3 4C3.81 3.46 5.5 4 5.5 4M2.25 8.25C1.5 8.88 1.25 10.75 1.25 10.75C1.25 10.75 3.12 10.5 3.75 9.75C4.105 9.33 4.1 8.685 3.705 8.295C3.51065 8.10951 3.25465 8.00232 2.98611 7.99402C2.71758 7.98571 2.45544 8.07687 2.25 8.25Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="rocket-clip">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
