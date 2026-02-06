import { useState } from 'react';
import { companyInfo } from '../data/siteData';
import FloatingInput from '../components/ui/FloatingInput';
import FadeIn from '../components/ui/FadeIn';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // ... (Keep existing submission logic)
        const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Company: ${formData.company || 'Not provided'}\n\n` +
            `Message:\n${formData.message}`
        );
        window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div>
            {/* Minimal Hero */}
            <section className="pt-40 pb-20 bg-gray-50 container text-center">
                <FadeIn>
                    <span className="text-[#e62e2e] font-bold uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
                    <h1 className="text-6xl md:text-7xl font-heading font-bold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        We'd love to hear from you. Let's start a conversation.
                    </p>
                </FadeIn>
            </section>

            <section className="section-lg bg-white">
                <div className="container px-6 md:px-12">
                    <div className="grid lg:grid-cols-3 gap-16">

                        {/* Interactive Info Cards */}
                        <div className="space-y-8">
                            {[
                                { icon: '📍', title: 'Visit Us', content: companyInfo.address },
                                { icon: '📞', title: 'Call Us', content: companyInfo.phone, link: `tel:${companyInfo.phone}` },
                                { icon: '✉️', title: 'Email Us', content: companyInfo.email, link: `mailto:${companyInfo.email}` },
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1} className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all duration-300">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    {item.link ? (
                                        <a href={item.link} className="text-gray-500 hover:text-[#e62e2e] transition-colors">{item.content}</a>
                                    ) : (
                                        <p className="text-gray-500 leading-relaxed">{item.content}</p>
                                    )}
                                </FadeIn>
                            ))}
                        </div>

                        {/* Premium Form */}
                        <div className="lg:col-span-2">
                            <FadeIn delay={0.2} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                                {/* Decorative gradient blob */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e62e2e]/5 rounded-full blur-3xl -z-10" />

                                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Send a Message</h2>

                                {submitted ? (
                                    <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center">
                                        <div className="text-4xl mb-4">🎉</div>
                                        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                        <p className="text-green-600">We will get back to you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FloatingInput
                                                id="name"
                                                label="Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                            <FloatingInput
                                                id="email"
                                                label="Email Address"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FloatingInput
                                                id="phone"
                                                label="Phone Number"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                            <FloatingInput
                                                id="company"
                                                label="Company Name"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            />
                                        </div>

                                        <div className="mb-6 relative">
                                            <select
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="block px-4 pb-2.5 pt-5 w-full text-gray-900 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-[#e62e2e] transition-colors"
                                                required
                                            >
                                                <option value="" disabled>Select a Subject</option>
                                                <option value="bulk">Bulk Order</option>
                                                <option value="partner">Partnership</option>
                                                <option value="support">Support</option>
                                            </select>
                                            <div className="absolute top-4 right-4 pointer-events-none text-gray-400">▼</div>
                                        </div>

                                        <div className="mb-8">
                                            <textarea
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="How can we help you?"
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e62e2e] transition-colors resize-none"
                                                required
                                            />
                                        </div>

                                        <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[#e62e2e] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
