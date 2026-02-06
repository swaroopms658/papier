import { Link } from 'react-router-dom';
import GraphicImage from './ui/GraphicImage';

const ProductCard = ({ product }) => {
    return (
        <div className="group cursor-pointer">
            {/* Gallery Image - Pure */}
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#fafafa] mb-6 relative">
                {product.hasImage ? (
                    <GraphicImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gray-50 border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-gray-100" />
                    </div>
                )}
            </div>

            {/* Gallery Caption */}
            <div className="text-center group-hover:-translate-y-1 transition-transform duration-500">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#b91c1c] mb-2">
                    {product.subcategory}
                </span>
                <h3 className="text-lg font-normal text-gray-900 mb-2 font-heading leading-tight group-hover:text-[#b91c1c] transition-colors">
                    {product.name}
                </h3>
                <span className="text-sm text-gray-400 font-light">
                    INR {product.price}
                </span>
            </div>

            <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
        </div>
    );
};

export default ProductCard;
