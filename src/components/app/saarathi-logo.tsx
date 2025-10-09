import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
        stroke="hsl(var(--primary))"
        fill="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Pillar */}
        <path d="M 50 20 V 85" fill="none" />
        {/* Base */}
        <path d="M 35 85 H 65" fill="none" />
        {/* Top circle */}
        <path d="M 50 15 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0" fill="none"/>
        
        {/* Crossbeam */}
        <path d="M 20 35 H 80" fill="none" />
        
        {/* Left Bowl & Strings */}
        <path d="M 10 60 A 15 15 0 0 0 40 60 Z" stroke="none" />
        <path d="M 25 35 L 10 60" fill="none"/>
        <path d="M 25 35 L 40 60" fill="none"/>

        {/* Right Bowl & Strings */}
        <path d="M 60 60 A 15 15 0 0 0 90 60 Z" stroke="none"/>
        <path d="M 75 35 L 60 60" fill="none"/>
        <path d="M 75 35 L 90 60" fill="none"/>
    </svg>
);

export default SaarathiLogo;
