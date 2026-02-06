import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FadeIn from '../components/ui/FadeIn';
import GraphicImage from '../components/ui/GraphicImage';
import SectionSeparator from '../components/ui/SectionSeparator';
import { LightBulbIcon, CheckBadgeIcon, GlobeAltIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';
import { categories as staticCategories, companyInfo } from '../data/siteData';

const Home = () => {
    // We'll use static categories for now to ensure the layout works perfectly with the new images
    // In a real app, you'd fetch this or merge it
    const categories = staticCategories;


    const features = [
        { title: 'Innovation First', description: 'Cutting-edge R&D and modern manufacturing.', icon: <LightBulbIcon className="w-8 h-8" /> },
        { title: 'Quality Assured', description: 'ISO 9001:2015 and GMP certified.', icon: <CheckBadgeIcon className="w-8 h-8" /> },
        { title: 'Eco-Conscious', description: 'Sustainable materials for a greener planet.', icon: <GlobeAltIcon className="w-8 h-8" /> },
        { title: 'Custom Solutions', description: 'Flexible private labeling & low MOQs.', icon: <PuzzlePieceIcon className="w-8 h-8" /> }
    ];

    return (
        <div className="overflow-hidden bg-white">
            {/* Hero Section */}
            <Hero />
            <SectionSeparator className="-mt-24 z-20 relative text-white" />

            {/* Introduction / About Snippet */}
            <section className="py-32 bg-white relative">
                <div className="container px-6 md:px-12">
                    <FadeIn delay={0.2} className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-[#e62e2e] text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
                            We Are Papier Creations
                        </span>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-8">
                            Crafting hygiene solutions that <span className="text-[#e62e2e]">care</span> for you and the planet.
                        </h2>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                            With over 16+ years of expertise, we aren't just manufacturers; we are innovators in comfortable, safe, and effective hygiene products.
                        </p>
                    </FadeIn>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <FadeIn key={i} delay={0.4 + (i * 0.1)} className="group p-8 rounded-3xl bg-gray-50 hover:bg-[#e62e2e] transition-colors duration-500">
                                <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">{feature.title}</h3>
                                <p className="text-gray-500 group-hover:text-white/90 transition-colors">{feature.description}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento Grid Categories Section */}
            <section className="py-32 bg-gray-50">
                <div className="container px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <FadeIn>
                            <h2 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 mb-6">
                                Explore <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e62e2e] to-red-400">Collections</span>
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <Link to="/products" className="group flex items-center gap-2 text-lg font-bold uppercase tracking-widest text-[#e62e2e] hover:text-gray-900 transition-colors">
                                View All Products
                                <span className="w-12 h-[2px] bg-[#e62e2e] group-hover:w-20 transition-all duration-300" />
                            </Link>
                        </FadeIn>
                    </div>

                    {/* The Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-6">
                        {categories.slice(0, 6).map((category, index) => {
                            // Determine span for visual interest (Bento style)
                            const isLarge = index === 0 || index === 3;

                            return (
                                <FadeIn
                                    key={category.id}
                                    className={`relative group rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500 ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
                                    delay={index * 0.1}
                                >
                                    <Link to={`/category/${category.slug}`} className="block w-full h-full">
                                        <GraphicImage
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full"
                                        />

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                            <span className="text-[#e62e2e] font-bold tracking-wider text-sm mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                                {category.icon} Collection
                                            </span>
                                            <h3 className={`font-heading font-bold text-white mb-2 leading-tight group-hover:text-[#e62e2e] transition-colors ${isLarge ? 'text-4xl' : 'text-2xl'}`}>
                                                {category.name}
                                            </h3>
                                            {isLarge && (
                                                <p className="text-white/80 line-clamp-2 max-w-md transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                                    {category.description}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                </FadeIn>
                            );
                        })}

                        {/* "See More" Card */}
                        <FadeIn delay={0.6} className="md:col-span-1 md:row-span-1 bg-[#e62e2e] rounded-3xl p-8 flex flex-col justify-center items-center text-center group cursor-pointer">
                            <Link to="/products" className="w-full h-full flex flex-col justify-center items-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-[#e62e2e]">→</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">View All</h3>
                                <p className="text-white/80">4+ more categories</p>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Private Label Section - Graphic Style */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn>
                            <span className="badge bg-red-50 text-[#e62e2e] px-4 py-2 rounded-full font-bold uppercase tracking-wider text-xs mb-8 inline-block">
                                Private Label Services
                            </span>
                            <h2 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 mb-8 leading-none">
                                Build Your<br />Own <span className="text-[#e62e2e]">Brand</span>
                            </h2>
                            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                                From concept to shelf, we provide end-to-end manufacturing solutions.
                                Custom formulations, premium packaging, and scalable production to meet your market needs.
                            </p>

                            <ul className="grid grid-cols-2 gap-6 mb-12">
                                {['Custom Formulations', 'Premium Packaging', 'Low MOQs', 'Fast Turnaround'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-gray-800">
                                        <span className="w-2 h-2 bg-[#e62e2e] rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className="inline-block bg-[#e62e2e] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Start Manufacturing
                            </Link>
                        </FadeIn>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
                                <GraphicImage
                                    src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80"
                                    alt="Private Label"
                                    className="w-full h-full"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#e62e2e]/10 to-transparent rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Infinite Brands Scroll */}
            <section className="py-24 bg-[#e62e2e] overflow-hidden">
                <div className="container text-center mb-12">
                    <p className="text-white/60 font-bold uppercase tracking-[0.3em] mb-4">Trusted By Leaders</p>
                </div>
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-scroll">
                        {[1, 2, 3, 4, 1, 2, 3, 4].map((setIndex) => (
                            <div key={setIndex} className="flex gap-24 mx-12 items-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
                                <img src="/assets/images/client1.png" alt="Brand" className="h-16 w-auto object-contain brightness-0 invert" />
                                <img src="/assets/images/client2.png" alt="Brand" className="h-16 w-auto object-contain brightness-0 invert" />
                                <img src="/assets/images/client3.png" alt="Brand" className="h-16 w-auto object-contain brightness-0 invert" />
                                <img src="/assets/images/client4.webp" alt="Brand" className="h-16 w-auto object-contain brightness-0 invert" />
                                <img src="/assets/images/client5.webp" alt="Brand" className="h-16 w-auto object-contain brightness-0 invert" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
