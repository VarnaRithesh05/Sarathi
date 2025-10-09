import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
    >
        <g stroke="hsl(var(--primary))" fill="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Central Pillar */}
            <path d="M 50 85 L 50 15" />
            {/* Base */}
            <path d="M 35 85 L 65 85" />
            
            {/* Crossbeam */}
            <path d="M 10 25 L 90 25" />
            
            {/* Center point of crossbeam */}
            <path d="M 50 25 L 50 15" />
            
            {/* Connecting Lines (Strings) */}
            <path d="M 25 25 L 25 50" fill="none" /> 
            <path d="M 75 25 L 75 50" fill="none" />

            {/* Bowls */}
            <path d="M 10 50 A 15 10 0 0 0 40 50" fill="none" />
            <path d="M 60 50 A 15 10 0 0 0 90 50" fill="none" />
        </g>
    </svg>
);

export default SaarathiLogo;
