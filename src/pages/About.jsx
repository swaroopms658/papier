import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/ui/FadeIn';
import GraphicImage from '../components/ui/GraphicImage';
import { LightBulbIcon, CheckBadgeIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const About = () => {
    // Horizontal Scroll Setup for Timeline
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    const milestones = [
        { year: '2008', event: 'Company Founded', desc: 'Started operations in Bangalore with a vision for hygiene.' },
        { year: '2012', event: 'ISO 9001:2015', desc: 'Achieved international quality management validation.' },
        { year: '2015', event: 'GMP Certified', desc: 'Validated for Good Manufacturing Practices prowess.' },
        { year: '2018', event: 'KidO! Launch', desc: 'Introduced our proprietary baby care brand.' },
        { year: '2020', event: '500+ Partners', desc: 'Expanded distribution network across India.' },
        { year: '2024', event: 'New Facility', desc: 'Inaugurated state-of-the-art manufacturing plant.' },
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* Premium Hero */}
            <section className="relative h-[70vh] flex items-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#b91c1c] mix-blend-multiply opacity-80" />
                    <img
                        src="/assets/images/manu.png"
                        alt="Background"
                        className="w-full h-full object-cover grayscale opacity-40"
                    />
                </div>
                <div className="container relative z-10">
                    <FadeIn>
                        <span className="text-white/60 font-bold uppercase tracking-[0.3em] mb-4 block">16+ Years of Excellence</span>
                        <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">Our Story</h1>
                        <p className="text-2xl text-white/80 max-w-2xl font-light">
                            From a small facility in Bangalore to a leading manufacturer touching millions of lives daily.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-32">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <FadeIn>
                                <h2 className="text-4xl font-heading font-bold text-gray-900">
                                    Professional, Innovative <br /><span className="text-[#e62e2e]">Hygienic</span>
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    Papier Creations represents the gold standard in wet wipe manufacturing.
                                    With over two decades of combined expertise, we don't just make products; we engineer hygiene solutions.
                                </p>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    Certified ISO 9001:2015 and GMP, our facility balances rigorous quality control with
                                    rapid innovation to meet global demands.
                                </p>
                            </FadeIn>
                        </div>
                        <FadeIn delay={0.2} className="relative">
                            <div className="aspect-square rounded-[2rem] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-700">
                                <GraphicImage src="/assets/images/manu.png" alt="Facility" className="w-full h-full" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Animated Stats Bar */}
            <section className="py-24 bg-[#e62e2e] text-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/20">
                        {[
                            { num: '25+', label: 'Years Expertise' },
                            { num: '100+', label: 'Products' },
                            { num: 'ISO', label: 'Certified' },
                            { num: '10M+', label: 'Happy Users' }
                        ].map((stat, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.num}</div>
                                <div className="text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Horizontal Timeline */}
            <section ref={targetRef} className="py-32 bg-gray-50 overflow-hidden relative h-[300vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <div className="container absolute top-24 left-1/2 -translate-x-1/2 text-center z-10">
                        <span className="text-[#e62e2e] font-bold uppercase tracking-[0.2em] mb-2 block">The Journey</span>
                        <h2 className="text-4xl font-heading font-bold">Milestones</h2>
                    </div>
                    <motion.div style={{ x }} className="flex gap-20 px-20">
                        {milestones.map((m, i) => (
                            <div key={i} className="min-w-[400px] group relative">
                                <div className="text-[120px] font-bold text-gray-200 leading-none absolute -top-16 -left-8 -z-10 group-hover:text-[#e62e2e]/10 transition-colors">
                                    {m.year}
                                </div>
                                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mt-12 hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-4 h-4 rounded-full bg-[#e62e2e] mb-6 animate-pulse" />
                                    <h3 className="text-2xl font-bold mb-2">{m.event}</h3>
                                    <p className="text-gray-500">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32">
                <div className="container text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-heading font-bold mb-16">Core Values</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Innovation', icon: <LightBulbIcon className="w-12 h-12" /> },
                            { title: 'Quality', icon: <CheckBadgeIcon className="w-12 h-12" /> },
                            { title: 'Sustainability', icon: <GlobeAltIcon className="w-12 h-12" /> },
                            { title: 'Partnership', icon: <UserGroupIcon className="w-12 h-12" /> }
                        ].map((val, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="p-8 border border-gray-100 rounded-3xl hover:border-[#e62e2e] hover:shadow-xl transition-all duration-300 group">
                                <div className="text-gray-400 mb-6 group-hover:text-[#e62e2e] transition-colors">{val.icon}</div>
                                <h3 className="text-xl font-bold">{val.title}</h3>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
