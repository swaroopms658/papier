import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <>
            {/* Announcement Bar - Animate away on scroll */}
            <motion.div
                initial={{ height: 'auto', opacity: 1 }}
                animate={{ height: scrolled ? 0 : 'auto', opacity: scrolled ? 0 : 1 }}
                className="bg-[#e62e2e] text-white text-center overflow-hidden"
            >
                <div className="container py-2 text-xs md:text-sm font-medium tracking-wide flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span>ISO 9001:2015 & GMP Certified | 16+ Years of Excellence</span>
                    <span className="hidden md:inline opacity-50">|</span>
                    <a href="tel:+919513702702" className="hidden md:inline hover:underline">
                        📞 +91 9513702702
                    </a>
                </div>
            </motion.div>

            {/* Main Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${scrolled
                        ? 'bg-white/80 backdrop-blur-md py-4 border-gray-200 shadow-sm'
                        : 'bg-transparent py-8 border-transparent'
                    }`}
            >
                <div className="container flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="relative z-50 block">
                        <motion.img
                            src="/assets/images/logo.webp"
                            alt="Papier Creations"
                            initial={{ width: '3.5rem' }} // h-14 equivalent ~3.5rem
                            animate={{
                                width: scrolled ? '3rem' : '4rem',
                                filter: scrolled ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
                            }}
                            transition={{ duration: 0.3 }}
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-16 bg-white/50 backdrop-blur-sm px-10 py-3 rounded-full border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
                        {['Home', 'Products', 'Capabilities', 'About', 'Contact'].map((item) => (
                            <NavLink
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={({ isActive }) => `
                                    text-sm font-semibold uppercase tracking-widest relative group transition-colors duration-300
                                    ${isActive ? 'text-[#e62e2e]' : 'text-gray-600 hover:text-[#e62e2e]'}
                                `}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e62e2e] transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 z-50 relative"
                    >
                        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
                        >
                            {['Home', 'Products', 'Capabilities', 'About', 'Contact'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-3xl font-light tracking-widest uppercase text-gray-900 hover:text-[#e62e2e] transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Header;
