import { Link } from 'react-router-dom';
import FadeIn from './ui/FadeIn';
import { categories, companyInfo } from '../data/siteData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialIcons = {
        facebook: <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>,
        linkedin: <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>,
        twitter: <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.618-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>,
        instagram: <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
    };

    return (
        <footer className="bg-gray-50 border-t border-gray-100 relative overflow-hidden">
            {/* Decorative Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e62e2e] to-transparent opacity-50" />

            <div className="container px-6 md:px-12 pt-24 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <FadeIn>
                            <Link to="/" className="inline-block">
                                <img
                                    src="/assets/images/logo.webp"
                                    alt="Papier Creations"
                                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </Link>
                            <p className="mt-6 text-gray-500 leading-relaxed text-sm max-w-xs">
                                Pioneering hygiene solutions since 2008.
                                ISO 9001:2015 & GMP Certified manufacturer delivering excellence in every wipe.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-8">
                                {[
                                    { icon: socialIcons.facebook, link: companyInfo.socialLinks.facebook },
                                    { icon: socialIcons.linkedin, link: companyInfo.socialLinks.linkedin },
                                    { icon: socialIcons.twitter, link: companyInfo.socialLinks.twitter },
                                    { icon: socialIcons.instagram, link: companyInfo.socialLinks.instagram }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.link}
                                        className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#e62e2e] hover:border-[#e62e2e] transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                                        aria-label="Social Link"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <FadeIn delay={0.1}>
                            <h4 className="font-heading font-bold text-gray-900 mb-8 text-sm uppercase tracking-widest">Company</h4>
                            <ul className="space-y-4">
                                {['Home', 'About Us', 'Capabilities', 'Our Brands', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-gray-500 hover:text-[#e62e2e] transition-colors text-sm font-medium flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-[1px] bg-[#e62e2e] transition-all duration-300 group-hover:w-4"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Products Links */}
                    <div>
                        <FadeIn delay={0.2}>
                            <h4 className="font-heading font-bold text-gray-900 mb-8 text-sm uppercase tracking-widest">Collections</h4>
                            <ul className="space-y-4">
                                {categories.slice(0, 5).map((cat) => (
                                    <li key={cat.id}>
                                        <Link
                                            to={`/category/${cat.slug}`}
                                            className="text-gray-500 hover:text-[#e62e2e] transition-colors text-sm font-medium block hover:translate-x-1 duration-200"
                                        >
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <FadeIn delay={0.3}>
                            <h4 className="font-heading font-bold text-gray-900 mb-8 text-sm uppercase tracking-widest">Get in Touch</h4>
                            <div className="space-y-6 text-sm text-gray-500">
                                <div className="group flex gap-4">
                                    <div className="w-5 h-5 mt-1 text-gray-300 group-hover:text-[#e62e2e] transition-colors">📍</div>
                                    <p className="leading-relaxed">{companyInfo.address}</p>
                                </div>
                                <div className="group flex gap-4 items-center">
                                    <div className="w-5 h-5 text-gray-300 group-hover:text-[#e62e2e] transition-colors">📞</div>
                                    <a href={`tel:${companyInfo.phone}`} className="hover:text-[#e62e2e] transition-colors">{companyInfo.phone}</a>
                                </div>
                                <div className="group flex gap-4 items-center">
                                    <div className="w-5 h-5 text-gray-300 group-hover:text-[#e62e2e] transition-colors">✉️</div>
                                    <a href={`mailto:${companyInfo.email}`} className="hover:text-[#e62e2e] transition-colors">{companyInfo.email}</a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Sub Footer */}
                <FadeIn delay={0.4}>
                    <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                        <p>&copy; {currentYear} Papier Creations. All rights reserved.</p>
                        <div className="flex items-center gap-1">
                            <span>Made with</span>
                            <span className="text-[#e62e2e]">♥</span>
                            <span>in Bangalore</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;
