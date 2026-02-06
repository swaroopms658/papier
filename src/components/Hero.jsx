import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './ui/FadeIn';

// Lazy load the 3D component
const Hero3D = lazy(() => import('./Hero3D'));

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-red-50/50 -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl z-0 pointer-events-none" />

            <div className="container relative z-10 px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full">

                    {/* Left: Text Content */}
                    <div className="max-w-2xl py-12 order-2 lg:order-1 relative z-20">
                        <FadeIn>
                            <span className="inline-block py-2 px-4 rounded-full bg-red-100 text-[#e62e2e] font-bold text-xs uppercase tracking-widest mb-6 border border-red-200">
                                Premium Hygiene Solutions
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 leading-[1.1] mb-8">
                                Pure <span className="text-[#e62e2e]">Comfort</span>,<br />
                                Every Day.
                            </h1>
                            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light max-w-lg">
                                Experience the future of hygiene with our scientifically crafted, ultra-soft wet tissues. Designed for sensitivity, durability, and eco-conscious living.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/products" className="px-8 py-4 bg-[#e62e2e] text-white font-bold uppercase tracking-widest rounded-full hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                    Shop Collection
                                </Link>
                                <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 font-bold uppercase tracking-widest rounded-full hover:border-[#e62e2e] hover:text-[#e62e2e] transition-all shadow-sm hover:shadow-md">
                                    Partner With Us
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-12 flex items-center gap-6 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500" /> ISO Certified
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" /> Dermatologically Tested
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: 3D Animation */}
                    <div className="h-[500px] lg:h-[700px] w-full order-1 lg:order-2 relative z-10">
                        <FadeIn delay={0.2} className="w-full h-full">
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-[3rem]">
                                    <div className="animate-pulse flex flex-col items-center opacity-50">
                                        <div className="w-32 h-32 bg-gray-200 rounded-full mb-4" />
                                        <span className="text-gray-400 font-bold tracking-widest text-sm">LOADING 3D SCENE</span>
                                    </div>
                                </div>
                            }>
                                <Hero3D />
                            </Suspense>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
