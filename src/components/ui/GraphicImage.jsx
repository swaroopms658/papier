import { motion } from 'framer-motion';

const GraphicImage = ({ src, alt, className = "" }) => {
    return (
        <div className={`relative overflow-hidden group ${className}`}>
            {/* The Image Entry Animation */}
            <motion.div
                initial={{ scale: 1.2, filter: "grayscale(100%) contrast(1)" }}
                whileInView={{ scale: 1, filter: "grayscale(100%) contrast(1.1)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full"
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* The Red Overlay (Duotone Effect) */}
            <div className="absolute inset-0 bg-[#e62e2e] mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-700 ease-in-out" />

            {/* The Screen Overlay to boost whites */}
            <div className="absolute inset-0 bg-[#feaaca] mix-blend-screen opacity-20 pointer-events-none" />

            {/* Flash Effect on Load */}
            <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 bg-white/20 skew-x-12 pointer-events-none"
            />
        </div>
    );
};

export default GraphicImage;
