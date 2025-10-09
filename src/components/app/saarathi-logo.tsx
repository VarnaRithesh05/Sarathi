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
        {/* Decorative Circle Top */}
        <circle cx="50" cy="30" r="2" fill="hsl(var(--primary))" stroke="none" />
        
        {/* Central Pillar (Pen Shape) */}
        <path d="M 49 30 V 85 L 50 95 L 51 85 V 30 Z" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" strokeWidth="0"/>
        
        {/* Crossbeam */}
        <path d="M 10 30 H 90" stroke="hsl(var(--primary))" fill="none"/>
        
        {/* Hangers and Bowls */}
        {/* Left Hanger */}
        <path d="M 25 30 V 50" stroke="hsl(var(--primary))" fill="none"/>
        {/* Right Hanger */}
        <path d="M 75 30 V 50" stroke="hsl(var(--primary))" fill="none"/>

        {/* Bowls with hanging point */}
        {/* Left Bowl */}
        <path d="M 15 65 H 35" stroke="hsl(var(--primary))" fill="none" />
        <path d="M 15 65 A 10 10 0 0 0 35 65" fill="hsl(var(--primary))" stroke="none" />
        <path d="M 25 50 L 15 65" stroke="hsl(var(--primary))" fill="none"/>
        <path d="M 25 50 L 35 65" stroke="hsl(var(--primary))" fill="none"/>

        {/* Right Bowl */}
        <path d="M 65 65 H 85" stroke="hsl(var(--primary))" fill="none" />
        <path d="M 65 65 A 10 10 0 0 0 85 65" fill="hsl(var(--primary))" stroke="none" />
        <path d="M 75 50 L 65 65" stroke="hsl(var(--primary))" fill="none"/>
        <path d="M 75 50 L 85 65" stroke="hsl(var(--primary))" fill="none"/>
    </svg>
);

export default SaarathiLogo;
