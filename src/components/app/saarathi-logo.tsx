import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
        fill="hsl(var(--primary))"
    >
        {/* Pillar and Base */}
        <path d="M48 10 H52 V85 A2 2 0 0 1 50 87 A2 2 0 0 1 48 85 V10z" />
        <path d="M40 87 H60 V91 H40z" />
        
        {/* Crossbeam */}
        <path d="M10 10 H90 V14 H10z" />
        
        {/* Central Triangle */}
        <path d="M50 14 L55 24 H45z" />

        {/* Left Bowl and Hanger */}
        <path d="M22 14 V25 H18 V14z" />
        <path d="M20 25 L15 35 L25 35z" />
        <path d="M20 35 L5 50 A20 20 0 0 0 35 50z" />
        
        {/* Right Bowl and Hanger */}
        <path d="M78 14 V25 H82 V14z" />
        <path d="M80 25 L75 35 L85 35z" />
        <path d="M80 35 L65 50 A20 20 0 0 1 95 50z" />
    </svg>
);

export default SaarathiLogo;