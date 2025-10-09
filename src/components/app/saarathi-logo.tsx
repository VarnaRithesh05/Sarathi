import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 140 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
    >
        {/* Central Pillar */}
        <path
            d="M 70 10 V 90"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
        />
        {/* Base of the Pillar */}
        <path
            d="M 55 90 H 85"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
        />
        {/* Crossbeam */}
        <path
            d="M 10 25 H 130"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
        />
        
        {/* Left Hanger */}
        <path
            d="M 25 25 V 55"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
        />
        {/* Right Hanger */}
        <path
            d="M 115 25 V 55"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
        />

        {/* Left Bowl */}
        <path
            d="M 10 55 A 15 15 0 0 0 40 55 Z"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            fill="hsl(var(--primary))"
        />
        {/* Right Bowl */}
        <path
            d="M 100 55 A 15 15 0 0 0 130 55 Z"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            fill="hsl(var(--primary))"
        />
    </svg>
);

export default SaarathiLogo;