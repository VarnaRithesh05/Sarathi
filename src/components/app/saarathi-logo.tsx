import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
    >
        <defs>
            <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.9}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
            </linearGradient>
        </defs>

        <g fill="url(#blue-gradient)">
            {/* Base */}
            <path d="M 35 90 L 65 90 L 70 85 L 30 85 Z" />
            
            {/* Pillar */}
            <path d="M 47.5 25 L 52.5 25 L 52.5 85 L 47.5 85 Z" />
            
            {/* Beam */}
            <path d="M 10 25 L 90 25 L 90 30 L 10 30 Z" />

            {/* Pivot */}
            <circle cx="50" cy="22" r="5" />
            
            {/* Hanging lines */}
            <path d="M 25 30 L 25 40" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
            <path d="M 75 30 L 75 40" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />

            {/* Scales */}
            <path d="M 10 40 L 40 40 A 15 15 0 0 0 10 40 Z" />
            <path d="M 60 40 L 90 40 A 15 15 0 0 0 60 40 Z" />
        </g>
    </svg>
);

export default SaarathiLogo;
