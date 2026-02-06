import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import CategoryCard from '../components/CategoryCard';
import { categories as staticCategories } from '../data/siteData';
import { fetchAPI, getStrapiMedia } from '../lib/api';

const Products = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchAPI('/categories?populate=*&pagination[limit]=100');
            if (data && data.data) {
                setCategories(data.data.map(cat => {
                    const staticMatch = staticCategories.find(sc => sc.slug === cat.slug);
                    return {
                        id: cat.id,
                        name: cat.name,
                        slug: cat.slug,
                        description: cat.description,
                        image: getStrapiMedia(cat.image?.url || cat.attributes?.image?.data?.attributes?.url) || staticMatch?.image,
                        ...cat
                    };
                }));
            } else {
                setCategories(staticCategories);
            }
        };
        loadCategories();
    }, []);

    return (
        <div className="bg-white">
            {/* Minimal High-End Hero */}
            <section className="pt-40 pb-20 bg-gray-50 container text-center">
                <FadeIn>
                    <span className="text-[#e62e2e] font-bold uppercase tracking-[0.3em] mb-4 block">Our Collection</span>
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-gray-900 mb-6">Products</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Precision-engineered hygiene solutions crafted for comfort, safety, and everyday wellness.
                    </p>
                </FadeIn>
            </section>

            {/* Categories Grid */}
            <section className="py-24">
                <div className="container px-6 md:px-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                        {categories.map((category, index) => (
                            <FadeIn key={category.id} delay={index * 0.1}>
                                <CategoryCard category={category} index={index} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA Strip */}
            <section className="py-32 bg-[#e62e2e] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container relative z-10 text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Custom Manufacturing?</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                            We specialize in Private Label services. Create your own line of premium hygiene products with our end-to-end support.
                        </p>
                        <Link to="/contact" className="inline-block px-10 py-4 bg-white text-[#e62e2e] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-xl">
                            Get a Quote
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Products;
