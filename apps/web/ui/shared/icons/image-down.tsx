export default function ImageDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="9" r="2" />
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8" />
      <path d="m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
      <path d="m14 19.5 3 3v-6" />
      <path d="m17 22.5 3-3" />
    </svg>
  );
}
