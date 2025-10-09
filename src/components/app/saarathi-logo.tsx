import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        fill="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Central Pillar (Pen Shape) */}
        <path d="M 50 28 V 88 L 49 95 L 51 95 L 50 88" strokeWidth="2.5" fill="hsl(var(--primary))" />
        
        {/* Crossbeam */}
        <path d="M 10 30 H 90" stroke="hsl(var(--primary))" fill="none"/>

        {/* Decorative Circle Top */}
        <circle cx="50" cy="28" r="2" fill="hsl(var(--primary))" stroke="none" />
        
        {/* Hangers and Bowls */}
        {/* Left Hanger */}
        <path d="M 25 30 V 50" stroke="hsl(var(--primary))" fill="none"/>
        {/* Right Hanger */}
        <path d="M 75 30 V 50" stroke="hsl(var(--primary))" fill="none"/>

        {/* Bowls with hanging point */}
        {/* Left Bowl */}
        <path d="M 15 55 h 20" stroke="hsl(var(--primary))" fill="none" strokeWidth="2" />
        <path d="M 15 55 A 10 10 0 0 0 35 55 Z" fill="hsl(var(--primary))" stroke="none" />
        <path d="M 25 50 L 15 55" stroke="hsl(var(--primary))" fill="none"/>
        <path d="M 25 50 L 35 55" stroke="hsl(var(--primary))" fill="none"/>

        {/* Right Bowl */}
        <path d="M 65 55 h 20" stroke="hsl(var(--primary))" fill="none" strokeWidth="2" />
        <path d="M 65 55 A 10 10 0 0 0 85 55 Z" fill="hsl(var(--primary))" stroke="none" />
        <path d="M 75 50 L 65 55" stroke="hsl(var(--primary))" fill="none"/>
        <path d="M 75 50 L 85 55" stroke="hsl(var(--primary))" fill="none"/>
    </svg>
);

export default SaarathiLogo;
