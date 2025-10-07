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
        <radialGradient id="saarathi-orb-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1"/>
          <stop offset="60%" stopColor="#FFD700" stopOpacity="1"/>
          <stop offset="100%" stopColor="#FDBB30" stopOpacity="0.8"/>
        </radialGradient>
      </defs>

      <path d="M30 90 C 35 75, 42 65, 46 60 C 40 58, 36 53, 35 47 C 38 52, 42 55, 47 57 C 45 70, 40 80, 30 90 Z" fill="url(#saarathi-orange-gradient)" />
      <path d="M70 90 C 65 75, 58 65, 54 60 C 60 58, 64 53, 65 47 C 62 52, 58 55, 53 57 C 55 70, 60 80, 70 90 Z" fill="url(#saarathi-orange-gradient)" />

      <path d="M30 10 C 35 25, 42 35, 46 40 C 40 42, 36 47, 35 53 C 38 48, 42 45, 47 43 C 45 30, 40 20, 30 10 Z" fill="url(#saarathi-blue-gradient)" />
      <path d="M70 10 C 65 25, 58 35, 54 40 C 60 42, 64 47, 65 53 C 62 48, 58 45, 53 43 C 55 30, 60 20, 70 10 Z" fill="url(#saarathi-blue-gradient)" />

      <circle cx="50" cy="50" r="7" fill="url(#saarathi-orb-gradient)" />
    </svg> 
);

export default SaarathiLogo;
