
const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 120 120"
      className={className || "h-8 w-8"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#2c5282', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#4299e1', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="grad-orange" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#dd6b20', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#f6ad55', stopOpacity: 1}} />
        </linearGradient>
        <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>
      {/* <!-- Top sheltering hands --> */}
      <path
        d="M 20 50 C 20 20, 40 10, 60 10 C 80 10, 100 20, 100 50 L 90 50 C 90 30, 75 20, 60 20 C 45 20, 30 30, 30 50 Z"
        fill="url(#grad-blue)"
      />
      {/* <!-- Bottom supportive hands --> */}
      <path
        d="M 20 70 C 20 100, 40 110, 60 110 C 80 110, 100 100, 100 70 L 90 70 C 90 90, 75 100, 60 100 C 45 100, 30 90, 30 70 Z"
        fill="url(#grad-orange)"
      />
      {/* <!-- Center glowing orb --> */}
      <circle cx="60" cy="60" r="8" fill="#FBBF24" filter="url(#glow)" />
    </svg>
);

export default SaarathiLogo;
