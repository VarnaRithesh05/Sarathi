import React from 'react';

const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "h-12 w-auto"}
    >
        <path
            d="
                M50 10 v 20
                M5 30 h 90
                M5 30 l 15 15
                M95 30 l -15 15
                M20 45 v 25
                M80 45 v 25
                M15 70 a 5 5 0 0 0 10 0 Z
                M75 70 a 5 5 0 0 0 10 0 Z
            "
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SaarathiLogo;
