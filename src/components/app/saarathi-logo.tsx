import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className || "h-12 w-auto"}
    >
        <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
            </linearGradient>
            <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <g fill="hsl(var(--primary))">
            {/* Base */}
            <path d="M 30 90 L 70 90 L 75 85 L 25 85 Z" />
            
            {/* Pillar */}
            <path d="M 47 30 L 53 30 L 53 85 L 47 85 Z" />
            
            {/* Beam */}
            <path d="M 10 30 L 90 30 L 90 35 L 10 35 Z" />

            {/* Pivot */}
            <circle cx="50" cy="28" r="5" />
        </g>
        
        {/* Scales with AI pattern */}
        <g>
            {/* Left Scale */}
            <path d="M 15 40 L 45 40 A 15 15 0 0 0 15 40 Z" fill="hsl(var(--primary))" />
            {/* Right Scale */}
            <path d="M 55 40 L 85 40 A 15 15 0 0 0 55 40 Z" fill="hsl(var(--primary))" />

            {/* AI Pattern */}
            <g stroke="url(#glow)" strokeWidth="1.2" fill="none" filter="url(#glow-filter)">
                {/* Left Pattern */}
                <path d="M 22 55 L 28 48 L 38 52" />
                <circle cx="22" cy="55" r="1.5" fill="url(#glow)" />
                <circle cx="28" cy="48" r="1.5" fill="url(#glow)" />
                <circle cx="38" cy="52" r="1.5" fill="url(#glow)" />
                
                {/* Right Pattern */}
                <path d="M 78 55 L 72 48 L 62 52" />
                <circle cx="78" cy="55" r="1.5" fill="url(#glow)" />
                <circle cx="72" cy="48" r="1.5" fill="url(#glow)" />
                <circle cx="62" cy="52" r="1.5" fill="url(#glow)" />
            </g>
        </g>
    </svg>
);

export default SaarathiLogo;
