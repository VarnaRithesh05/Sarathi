import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
    >
        {/* Shield/Arch background */}
        <path 
            d="M50 10 C 20 10, 10 25, 10 50 C 10 80, 25 90, 50 90 C 75 90, 90 80, 90 50 C 90 25, 80 10, 50 10 Z"
            fill="hsl(var(--muted))"
        />

        {/* Left Shape (Blue) */}
        <path 
            d="M50 20 C 40 30, 30 45, 30 60 C 30 75, 40 80, 50 80 L 50 20 Z"
            fill="#2A7CB5"
        />

        {/* Right Shape (Orange) */}
        <path 
            d="M50 20 C 60 30, 70 45, 70 60 C 70 75, 60 80, 50 80 L 50 20 Z"
            fill="#F39432"
        />
    </svg>
);

export default SaarathiLogo;
