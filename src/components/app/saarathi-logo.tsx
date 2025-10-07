const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 100 100" 
      className={className || "h-8 w-8"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="saarathi-orange-gradient" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#F37021" />
          <stop offset="100%" stopColor="#FDBB30" />
        </linearGradient>

        <linearGradient id="saarathi-blue-gradient" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#00529B" />
          <stop offset="100%" stopColor="#2E8BC0" />
        </linearGradient>

        <radialGradient id="saarathi-orb-gradient">
          <stop offset="10%" stopColor="#FFFFFF" />
          <stop offset="95%" stopColor="#FFD700" />
        </radialGradient>
      </defs>

      <path d="M48 88 C 25 88, 18 70, 38 55 C 42 68, 45 78, 48 88 Z" fill="url(#saarathi-orange-gradient)" />
      <path d="M52 88 C 75 88, 82 70, 62 55 C 58 68, 55 78, 52 88 Z" fill="url(#saarathi-orange-gradient)" />

      <path d="M48 12 C 25 12, 18 30, 38 45 C 42 32, 45 22, 48 12 Z" fill="url(#saarathi-blue-gradient)" />
      <path d="M52 12 C 75 12, 82 30, 62 45 C 58 32, 55 22, 52 12 Z" fill="url(#saarathi-blue-gradient)" />

      <circle cx="50" cy="50" r="6" fill="url(#saarathi-orb-gradient)" />
    </svg>
);

export default SaarathiLogo;
