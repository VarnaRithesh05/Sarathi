const SaarathiLogo = ({ className }: { className?: string }) => (
    <svg 
        className={className || "h-12 w-auto"}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 3L4 6V13.3C4 17.5 7.4 21.2 12 22C16.6 21.2 20 17.5 20 13.3V6L12 3Z" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
        
        {/* Scales of Justice */}
        <path d="M12 6V18" stroke="hsl(var(--primary))" />
        <path d="M8 9H16" stroke="hsl(var(--primary))" />
        <path d="M8 12l-2 2a1.5 1.5 0 0 0 0 2l2 2" stroke="hsl(var(--primary))" />
        <path d="M16 12l2 2a1.5 1.5 0 0 1 0 2l-2 2" stroke="hsl(var(--primary))" />
    </svg>
);

export default SaarathiLogo;