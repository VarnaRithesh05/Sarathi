import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
    >
        {/* Central Pillar and Base */}
        <path d="M48 10 H52 V85 H48 z" />
        <path d="M35 85 H65 V90 H35 z" />

        {/* Crossbeam */}
        <path d="M10 10 H90 V15 H10 z" />
        
        {/* Left Bowl and Strings */}
        <g stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none">
            {/* Hanger */}
            <path d="M25 15 V 25" />
            {/* Bowl Connector */}
            <path d="M10 40 H40" />
            {/* Strings */}
            <path d="M25 25 L 10 40" />
            <path d="M25 25 L 40 40" />
        </g>
        {/* Left Bowl */}
        <path d="M5 40 A 20 15 0 0 0 45 40 Z" fill="hsl(var(--primary))" />


        {/* Right Bowl and Strings */}
        <g stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none">
            {/* Hanger */}
            <path d="M75 15 V 25" />
            {/* Bowl Connector */}
            <path d="M60 40 H90" />
            {/* Strings */}
            <path d="M75 25 L 60 40" />
            <path d="M75 25 L 90 40" />
        </g>
        {/* Right Bowl */}
        <path d="M55 40 A 20 15 0 0 1 95 40 Z" fill="hsl(var(--primary))" />

    </svg>
);

export default SaarathiLogo;