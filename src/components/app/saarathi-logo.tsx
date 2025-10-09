import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 140 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Central Pillar */}
        <path d="M 70 10 V 90" />
        {/* Base of the Pillar */}
        <path d="M 55 90 H 85" />
        {/* Crossbeam */}
        <path d="M 20 25 H 120" />
        
        {/* Left Hanger */}
        <path d="M 40 25 V 45" />
        {/* Right Hanger */}
        <path d="M 100 25 V 45" />

        {/* Left Bowl */}
        <path d="M 25 60 A 15 15 0 0 0 55 60" fill="hsl(var(--primary))" />
        {/* Right Bowl */}
        <path d="M 85 60 A 15 15 0 0 0 115 60" fill="hsl(var(--primary))" />

        {/* Connectors from beam to bowl */}
        <path d="M 40 45 L 25 60" />
        <path d="M 40 45 L 55 60" />
        <path d="M 100 45 L 85 60" />
        <path d="M 100 45 L 115 60" />
    </svg>
);

export default SaarathiLogo;
