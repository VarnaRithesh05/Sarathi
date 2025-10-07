const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 200 220" 
      className={className || "h-12 w-auto"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:"#005bea", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#00c6ff", stopOpacity:1}} />
        </linearGradient>

        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:"#f7971e", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#ffd200", stopOpacity:1}} />
        </linearGradient>

        <radialGradient id="orbGradient">
          <stop offset="0%" style={{stopColor:"#ffffff", stopOpacity:1}} />
          <stop offset="50%" style={{stopColor:"#fff4b3", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#ffd200", stopOpacity:0.8}} />
        </radialGradient>
      </defs>

      <g transform="translate(0, -10)">
        <path d="M 105,125 C 120,120 145,110 150,80 C 155,50 130,55 120,65 C 125,90 115,110 105,125 Z" fill="url(#orangeGradient)" />
        <path d="M 95,125 C 80,120 55,110 50,80 C 45,50 70,55 80,65 C 75,90 85,110 95,125 Z" fill="url(#orangeGradient)" />
        <path d="M 105,35 C 120,40 145,50 150,80 C 155,110 130,105 120,95 C 125,70 115,50 105,35 Z" fill="url(#blueGradient)" />
        <path d="M 95,35 C 80,40 55,50 50,80 C 45,110 70,105 80,95 C 75,70 85,50 95,35 Z" fill="url(#blueGradient)" />
        <circle cx="100" cy="80" r="10" fill="url(#orbGradient)" />
      </g>

      <text x="100" y="180" fontSize="28" fontWeight="bold" fill="#0b2b4e" textAnchor="middle" fontFamily="sans-serif">
        Saarathi
      </text>
    </svg> 
);

export default SaarathiLogo;
