const SectionSeparator = ({ className = "" }) => {
    return (
        <div className={`w-full h-24 overflow-hidden relative -mt-1 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5" />
            <svg
                viewBox="0 0 1440 320"
                className="w-full h-full text-white fill-current transform scale-150 origin-top"
                preserveAspectRatio="none"
            >
                <path fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1440,117.3L1440,320L1344,320C1248,320,1152,320,1056,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,48,320,0,320Z"></path>
            </svg>
        </div>
    );
};

export default SectionSeparator;
