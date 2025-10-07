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

      {/* Bottom Hands - Orange/Yellow Gradient */}
      <path d="M20 75 C 30 60, 40 55, 50 55 C 60 55, 70 60, 80 75 L 70 85 C 65 75, 55 70, 50 70 C 45 70, 35 75, 30 85 Z" fill="url(#saarathi-orange-gradient)" />
      
      {/* Top Hands - Blue Gradient */}
      <path d="M20 25 C 30 40, 40 45, 50 45 C 60 45, 70 40, 80 25 L 70 15 C 65 25, 55 30, 50 30 C 45 30, 35 25, 30 15 Z" fill="url(#saarathi-blue-gradient)" />

      {/* Central Orb */}
      <circle cx="50" cy="50" r="7" fill="url(#saarathi-orb-gradient)" />
    </svg> 
);

export default SaarathiLogo;
