import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
    >
        {/* Central Pillar */}
        <path d="M48 10 H52 V80 H48 z" />
        {/* Base */}
        <path d="M35 80 H65 V85 H35 z" />
        {/* Crossbeam */}
        <path d="M5 10 H95 V15 H5 z" />
        {/* Hanger points on crossbeam */}
        <path d="M18 15 V20 H22 V15 z" />
        <path d="M78 15 V20 H82 V15 z" />

        {/* Left Bowl and Strings */}
        <g>
            {/* Strings */}
            <path d="M20 20 L20 70 L15 70 L20 20 Z" />
            <path d="M20 20 L40 70 L35 70 L20 20 Z" />
            {/* Bowl */}
            <path d="M5 75 A 20 20 0 0 0 45 75 H5 Z" />
        </g>

        {/* Right Bowl and Strings */}
        <g>
            {/* Strings */}
            <path d="M80 20 L60 70 L65 70 L80 20 Z" />
            <path d="M80 20 L85 70 L80 70 L80 20 Z" />
            {/* Bowl */}
            <path d="M55 75 A 20 20 0 0 1 95 75 H55 Z" />
        </g>
    </svg>
);

export default SaarathiLogo;