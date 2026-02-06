import { Link } from 'react-router-dom';

const Brands = () => {
    const brands = [
        {
            id: 'kido',
            name: 'KidO!',
            tagline: 'Gentle Care for Little Ones',
            description: 'Our flagship baby care brand featuring gentle, safe products designed specifically for delicate baby skin. From wipes to feeding essentials, KidO! is trusted by parents across India.',
            color: '#4ade80',
            image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
            products: ['Baby Wipes', 'Canister Wipes', 'Feeding Bottles', 'Massage Oil Wipes']
        },
        {
            id: 'tiddles',
            name: 'Tiddles',
            tagline: 'Premium Baby Essentials',
            description: 'Affordable premium baby care products that don\'t compromise on quality. Tiddles offers essential hygiene products for everyday baby care needs.',
            color: '#f472b6',
            image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80',
            products: ['Soft Baby Wipes', 'Diaper Rash Cream', 'Baby Lotion']
        },
        {
            id: 'papier-pro',
            name: 'Papier Pro',
            tagline: 'Professional Hygiene Solutions',
            description: 'Commercial-grade hygiene products for businesses, hospitals, and hospitality. Papier Pro delivers industrial strength with consumer-friendly quality.',
            color: '#3b82f6',
            image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80',
            products: ['HoReCa Wipes', 'Clean Room Wipes', 'Industrial Wipes']
        }
    ];

    return (
        <div>
            {/* Hero */}
            <section className="relative py-32 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white rounded-full" />
                </div>
                <div className="container relative text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-[2px] bg-[#e62e2e]" />
                        <span className="text-[#e62e2e] text-sm font-semibold uppercase tracking-[0.2em]">
                            Our Portfolio
                        </span>
                        <div className="w-12 h-[2px] bg-[#e62e2e]" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-heading font-semibold text-white mb-6">
                        Our Brands
                    </h1>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto">
                        Trusted brands that deliver quality and innovation across all segments
                    </p>
                </div>
            </section>

            {/* Brands */}
            {brands.map((brand, index) => (
                <section
                    key={brand.id}
                    className={`section-lg ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                    <div className="container">
                        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                            <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                                <div
                                    className="inline-block px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6"
                                    style={{ backgroundColor: brand.color + '20', color: brand.color }}
                                >
                                    Brand
                                </div>
                                <h2 className="text-5xl font-heading font-bold mb-2" style={{ color: brand.color }}>
                                    {brand.name}
                                </h2>
                                <p className="text-xl text-gray-600 mb-6">{brand.tagline}</p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {brand.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                                        Key Products
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {brand.products.map((product, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium"
                                            >
                                                {product}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link to="/products" className="btn btn-primary">
                                    View Products
                                </Link>
                            </div>

                            <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 -z-10`}
                                    style={{ backgroundColor: brand.color }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Private Label CTA */}
            <section className="section-lg bg-[#b91c1c] text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="badge badge-primary mb-6">Partner With Us</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
                            Launch Your Own Brand
                        </h2>
                        <p className="text-white/80 text-lg mb-10">
                            Leverage our expertise and manufacturing capabilities to create your own
                            successful hygiene brand. From concept to shelf - we've got you covered.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/capabilities" className="btn btn-gold">
                                Our Capabilities
                            </Link>
                            <Link to="/contact" className="btn border-white/30 text-white hover:bg-white hover:text-[#b91c1c]">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brands;
