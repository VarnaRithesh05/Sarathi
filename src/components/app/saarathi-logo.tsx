const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        className={className || "h-12 w-auto"}
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#005bea'}} />
                <stop offset="100%" style={{stopColor: '#00c6ff'}} />
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f7971e'}} />
                <stop offset="100%" style={{stopColor: '#ffd200'}} />
            </linearGradient>
            <radialGradient id="orbGradient">
                <stop offset="0%" style={{stopColor: '#ffffff'}} />
                <stop offset="50%" style={{stopColor: '#fff4b3'}} />
                <stop offset="100%" style={{stopColor: '#ffd200', stopOpacity: 0.8}} />
            </radialGradient>
        </defs>

        {/* Bottom Hands - Orange */}
        <path d="M 30,75 C 35,65 45,60 50,60 C 55,60 65,65 70,75 L 70,85 C 60,95 40,95 30,85 Z" fill="url(#orangeGradient)" transform="rotate(10, 50, 75)" />
        <path d="M 70,75 C 65,65 55,60 50,60 C 45,60 35,65 30,75 L 30,85 C 40,95 60,95 70,85 Z" fill="url(#orangeGradient)" transform="rotate(-10, 50, 75)"/>

        {/* Top Hands - Blue */}
        <path d="M 30,25 C 35,35 45,40 50,40 C 55,40 65,35 70,25 L 70,15 C 60,5 40,5 30,15 Z" fill="url(#blueGradient)" transform="rotate(-10, 50, 25)" />
        <path d="M 70,25 C 65,35 55,40 50,40 C 45,40 35,35 30,25 L 30,15 C 40,5 60,5 70,15 Z" fill="url(#blueGradient)" transform="rotate(10, 50, 25)" />

        {/* Central Orb */}
        <circle cx="50" cy="50" r="8" fill="url(#orbGradient)" />
    </svg>
);

export default SaarathiLogo;
