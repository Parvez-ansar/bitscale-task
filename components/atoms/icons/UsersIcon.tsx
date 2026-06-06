export default function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true">
      <g clipPath="url(#users-clip)">
        <path
          d="M7.4375 9.1875V8.3125C7.4375 7.84837 7.25313 7.40325 6.92494 7.07506C6.59675 6.74687 6.15163 6.5625 5.6875 6.5625H2.1875C1.72337 6.5625 1.27825 6.74687 0.950063 7.07506C0.621875 7.40325 0.4375 7.84837 0.4375 8.3125V9.1875M10.0625 9.1875V8.3125C10.0622 7.92476 9.93316 7.54809 9.6956 7.24164C9.45804 6.93519 9.12543 6.71631 8.75 6.61938M7 1.36938C7.37643 1.46576 7.71008 1.68468 7.94834 1.99164C8.18661 2.29859 8.31593 2.67611 8.31593 3.06469C8.31593 3.45326 8.18661 3.83078 7.94834 4.13774C7.71008 4.44469 7.37643 4.66362 7 4.76M5.6875 3.0625C5.6875 4.029 4.904 4.8125 3.9375 4.8125C2.971 4.8125 2.1875 4.029 2.1875 3.0625C2.1875 2.096 2.971 1.3125 3.9375 1.3125C4.904 1.3125 5.6875 2.096 5.6875 3.0625Z"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="users-clip">
          <rect width="10.5" height="10.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
