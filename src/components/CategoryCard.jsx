import { Link } from 'react-router-dom';
import GraphicImage from './ui/GraphicImage';

const CategoryCard = ({ category, index }) => {
    return (
        <Link
            to={`/category/${category.slug}`}
            className="group block"
        >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 mb-6 relative">
                <GraphicImage
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full"
                />
            </div>

            {/* Text Container - Moved Below */}
            <div className="text-center">
                <h3 className="text-2xl font-normal text-gray-900 mb-2 font-heading tracking-tight group-hover:text-[#e62e2e] transition-colors">
                    {category.name}
                </h3>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors">
                    View Collection
                </span>
            </div>
        </Link>
    );
};

export default CategoryCard;
