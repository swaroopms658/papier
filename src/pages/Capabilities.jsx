import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import GraphicImage from '../components/ui/GraphicImage';

const Capabilities = () => {
    const capabilities = [
        {
            id: 'innovation',
            title: 'R&D Innovation',
            desc: 'Our labs are constantly pushing boundaries. From biodegradable substrates to skin-friendly formulations, we pioneer new-age hygiene solutions.',
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
            features: ['Custom Formulations', 'Sustainable Materials', 'Dermatological Testing'],
            color: 'bg-red-50'
        },
        {
            id: 'manufacturing',
            title: 'Advanced Manufacturing',
            desc: 'ISO 9001:2015 & GMP certified facility. We handle massive scale production with rigorous quality checks at every stage.',
            image: "/assets/images/manu.png",
            features: ['High-Speed Lines', 'Clean Room Environment', 'Automated Packaging'],
            color: 'bg-white'
        },
        {
            id: 'private-label',
            title: 'Private Label',
            desc: 'Your Brand, Our Expertise. We provide end-to-end white labeling services, helping you launch market-ready products in weeks.',
            image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80",
            features: ['Brand Design', 'Packaging Solutions', 'Low MOQs'],
            color: 'bg-red-50'
        }
    ];

    return (
        <div className="bg-white">
            {/* Simple Premium Header */}
            <section className="pt-40 pb-20 bg-white container text-center">
                <FadeIn>
                    <span className="text-[#e62e2e] font-bold uppercase tracking-[0.3em] mb-4 block">What We Do</span>
                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-gray-900 mb-6">Capabilities</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        End-to-end manufacturing excellence powered by technology and expertise.
                    </p>
                </FadeIn>
            </section>

            {/* Zig Zag Content */}
            <div className="pb-32">
                {capabilities.map((cap, index) => (
                    <section key={cap.id} className={`py-24 ${cap.color}`}>
                        <div className="container">
                            <div className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                                    <FadeIn>
                                        <div className="text-9xl font-bold text-gray-100 absolute -translate-y-16 -z-10 select-none">
                                            0{index + 1}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 relative">
                                            {cap.title}
                                        </h2>
                                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                            {cap.desc}
                                        </p>
                                        <ul className="space-y-4 mb-10">
                                            {cap.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-3 font-semibold text-gray-800">
                                                    <span className="w-2 h-2 rounded-full bg-[#e62e2e]" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/contact" className="inline-block px-8 py-3 bg-[#e62e2e] text-white font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-lg">
                                            Learn More
                                        </Link>
                                    </FadeIn>
                                </div>
                                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                                    <FadeIn delay={0.2} className="relative group">
                                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                            <GraphicImage src={cap.image} alt={cap.title} className="w-full h-full" />
                                        </div>
                                        {/* Decorative Border Offset */}
                                        <div className="absolute -inset-4 border-2 border-[#e62e2e]/20 rounded-[2rem] -z-10 group-hover:border-[#e62e2e] transition-colors duration-500" />
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA */}
            <section className="py-32 bg-gray-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e62e2e] rounded-full blur-[100px] opacity-20 animate-pulse" />
                </div>
                <div className="container relative z-10">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Ready to Scale?</h2>
                        <Link to="/contact" className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 transition-transform inline-block">
                            Partner With Us
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Capabilities;
