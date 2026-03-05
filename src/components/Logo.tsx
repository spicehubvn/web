export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims = { sm: 32, md: 40, lg: 56 }[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={dims}
      height={dims}
      fill="none"
      aria-hidden="true"
    >
      {/* Chili body — ripe red */}
      <path
        d="M29,16 C22,25 15,38 17,48 C19,56 24,60 30,59 C36,58 41,49 44,39 C47,29 44,19 38,15 C35,13 30,13 29,16Z"
        fill="url(#ic-chili)"
      />
      {/* Shine highlight */}
      <path
        d="M26,22 C22,30 18,40 19,48 C19,51 21,55 23,57"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.25"
        strokeLinecap="round"
      />
      {/* Green calyx (đài ớt) */}
      <path
        d="M28,17 C29,12 33,10 35.5,13 C37,15 34,17 32,16.5 C30,16 28,17 28,17Z"
        fill="#16a34a"
      />
      {/* Stem with curl */}
      <path
        d="M34,11 C37,5 43,2 46,5 C49,8 45,12 42,9"
        stroke="#15803d"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Small leaf */}
      <path
        d="M41,5 C45,1 51,3 49,8 C47,12 42,9 41,5Z"
        fill="#22c55e"
        opacity="0.9"
      />

      <defs>
        <linearGradient id="ic-chili" x1="15" y1="16" x2="47" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="60%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
