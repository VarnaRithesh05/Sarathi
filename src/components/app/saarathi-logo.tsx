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
        <circle cx="50" cy="12" r="6" fill="hsl(var(--primary))" stroke="none" />
        
        {/* Central Pillar - starts below the circle */}
        <path d="M 50 18 V 90" stroke="hsl(var(--primary))" fill="none"/>
        
        {/* Base of the Pillar */}
        <path d="M 35 90 H 65" stroke="hsl(var(--primary))" fill="none"/>
        
        {/* Crossbeam */}
        <path d="M 10 30 H 90" stroke="hsl(var(--primary))" fill="none"/>
        
        {/* Left Hanger */}
        <path d="M 25 30 V 50" stroke="hsl(var(--primary))" fill="none"/>
        {/* Right Hanger */}
        <path d="M 75 30 V 50" stroke="hsl(var(--primary))" fill="none"/>

        {/* Left Bowl */}
        <path d="M 10 65 A 15 15 0 0 0 40 65" fill="none" stroke="hsl(var(--primary))" />
        
        {/* Right Bowl */}
        <path d="M 60 65 A 15 15 0 0 0 90 65" fill="none" stroke="hsl(var(--primary))" />

        {/* Connectors from hanger to bowl */}
        <path d="M 25 50 L 10 65" stroke="hsl(var(--primary))" fill="none"/>
        <path d="M 25 50 L 40 65" stroke="hsl(var(--primary))" fill="none"/>
        <path d="M 75 50 L 60 65" stroke="hsl(var(--primary))" fill="none"/>
        <path d="M 75 50 L 90 65" stroke="hsl(var(--primary))" fill="none"/>
    </svg>
);

export default SaarathiLogo;