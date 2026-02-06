import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import GraphicImage from '../components/ui/GraphicImage';
import ProductCard from '../components/ProductCard';
import { products as staticProducts, categories as staticCategories } from '../data/siteData';
import { fetchAPI, getStrapiMedia } from '../lib/api';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        // ... (Keep existing fetch logic active, just UI update)
        const loadProduct = async () => {
            setLoading(true);
            try {
                // Fetch Product by ID (Strapi API standard)
                const data = await fetchAPI(`/products/${id}?populate=*`);

                if (data && data.data) {
                    const p = data.data;
                    // Fallback Logic
                    const staticProd = staticProducts.find(sp => sp.id === p.id) || staticProducts.find(sp => sp.name === p.name);
                    const fallbackImage = staticProd?.image;

                    const mappedProduct = {
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        subcategory: p.subcategory,
                        hasImage: p.hasImage || !!fallbackImage,
                        image: getStrapiMedia(p.image?.url || p.attributes?.image?.data?.attributes?.url) || fallbackImage,
                        description: p.description, // Rich text or string
                        category: p.category, // Relation might differ in structure
                        ...p
                    };
                    setProduct(mappedProduct);

                    // Handle Category Relation
                    const catData = p.category;
                    if (catData) {
                        setCategory({
                            name: catData.name,
                            slug: catData.slug
                        });
                    }
                    // Related logic...
                    if (catData && catData.slug) {
                        const relatedData = await fetchAPI(`/products?filters[category][slug][$eq]=${catData.slug}&filters[id][$ne]=${id}&pagination[limit]=4&populate=*`);
                        if (relatedData && relatedData.data) {
                            setRelatedProducts(relatedData.data.map(rp => {
                                const sProd = staticProducts.find(sp => sp.id === rp.id) || staticProducts.find(sp => sp.name === rp.name);
                                const fImage = sProd?.image;
                                return {
                                    id: rp.id,
                                    name: rp.name,
                                    price: rp.price,
                                    subcategory: rp.subcategory,
                                    hasImage: rp.hasImage || !!fImage,
                                    image: getStrapiMedia(rp.image?.url) || fImage,
                                    ...rp
                                };
                            }));
                        }
                    }

                } else {
                    // Fallback
                    const staticProduct = staticProducts.find(p => p.id === parseInt(id));
                    if (staticProduct) {
                        setProduct(staticProduct);
                        setCategory(staticCategories.find(c => c.id === staticProduct.category));
                        setRelatedProducts(staticProducts.filter(p => p.category === staticProduct.category && p.id !== staticProduct.id).slice(0, 4));
                    }
                }
            } catch (error) {
                console.error("Failed to fetch product", error);
                // Fallback
                const staticProduct = staticProducts.find(p => p.id === parseInt(id));
                if (staticProduct) {
                    setProduct(staticProduct);
                    setCategory(staticCategories.find(c => c.id === staticProduct.category));
                    setRelatedProducts(staticProducts.filter(p => p.category === staticProduct.category && p.id !== staticProduct.id).slice(0, 4));
                }
            } finally {
                setLoading(false);
            }
        };

        if (id) loadProduct();
    }, [id]);

    if (loading) return <div className="h-screen flex items-center justify-center text-[#e62e2e] animate-pulse">Loading...</div>;
    if (!product) return <div className="h-screen flex items-center justify-center">Product Not Found</div>;

    return (
        <div className="bg-white">
            {/* Breadcrumb - Minimal */}
            <div className="pt-28 pb-6 bg-white container px-6 md:px-12">
                <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-bold">
                    <Link to="/" className="hover:text-[#e62e2e]">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-[#e62e2e]">Products</Link>
                    <span>/</span>
                    <span className="text-gray-900">{product.name}</span>
                </nav>
            </div>

            <section className="pb-32 px-6 md:px-12 container">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 relative">

                    {/* Sticky Image Section */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <FadeIn className="aspect-square bg-gray-50 rounded-[2rem] overflow-hidden shadow-sm relative group">
                            {product.hasImage ? (
                                <GraphicImage src={product.image} alt={product.name} className="w-full h-full" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300 text-6xl">🧴</div>
                            )}
                            {/* Floating Price Tag */}
                            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl">
                                <span className="text-2xl font-bold text-[#e62e2e]">₹{product.price}</span>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Scrollable Details Section */}
                    <div className="pt-8">
                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="bg-red-50 text-[#e62e2e] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{product.subcategory}</span>
                                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">● In Stock</span>
                            </div>

                            <div className="prose prose-lg text-gray-500 mb-12 leading-relaxed">
                                <p>{product.name} is a premium hygiene product manufactured with the highest quality standards. Designed for effective cleaning while being gentle on your skin.</p>
                            </div>

                            {/* Cart / Action Area */}
                            <div className="p-8 bg-gray-50 rounded-3xl mb-12 border border-gray-100">
                                <div className="flex flex-wrap items-center gap-6">
                                    {/* Custom Counter */}
                                    <div className="flex items-center bg-white rounded-full border border-gray-200 shadow-sm h-14">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-full hover:bg-gray-50 rounded-l-full text-xl text-gray-500">-</button>
                                        <input type="text" value={quantity} readOnly className="w-12 text-center font-bold text-gray-900 outline-none" />
                                        <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-full hover:bg-gray-50 rounded-r-full text-xl text-gray-500">+</button>
                                    </div>
                                    <Link to="/contact" className="flex-1 bg-[#e62e2e] text-white h-14 rounded-full flex items-center justify-center font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg hover:shadow-xl">
                                        Request Quote
                                    </Link>
                                </div>
                                <p className="text-center text-xs text-gray-400 mt-4 uppercase tracking-wider">Bulk pricing available for 100+ units</p>
                            </div>

                            {/* Features List */}
                            <div className="mb-12">
                                <h3 className="font-heading font-bold text-gray-900 mb-6 text-sm uppercase tracking-widest">Key Features</h3>
                                <ul className="space-y-4">
                                    {['Premium Soft Texture', 'Dermatologically Tested', 'Eco-Friendly Substrate', 'Extended Shelf Life'].map((f, i) => (
                                        <li key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-red-200 transition-colors">
                                            <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#e62e2e] text-sm">✓</span>
                                            <span className="font-medium text-gray-700">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tabs */}
                            <div className="border-t border-gray-200 pt-10">
                                <div className="flex gap-8 mb-8 border-b border-gray-100">
                                    {['specifications', 'shipping'].map(tab => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'text-[#e62e2e] border-b-2 border-[#e62e2e]' : 'text-gray-400 hover:text-gray-900'}`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <div className="text-gray-500 leading-relaxed min-h-[150px]">
                                    {activeTab === 'specifications' ? (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="py-2 border-b border-gray-50">Material <span className="float-right text-gray-900 font-medium">Non-Woven</span></div>
                                            <div className="py-2 border-b border-gray-50">SKU <span className="float-right text-gray-900 font-medium">PC-{product.id}00X</span></div>
                                            <div className="py-2 border-b border-gray-50">Origin <span className="float-right text-gray-900 font-medium">India</span></div>
                                            <div className="py-2 border-b border-gray-50">Certification <span className="float-right text-gray-900 font-medium">ISO 9001</span></div>
                                        </div>
                                    ) : (
                                        <p>Standard delivery within 5-7 business days. Express shipping options available at checkout for urgent orders.</p>
                                    )}
                                </div>
                            </div>

                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Related */}
            {relatedProducts.length > 0 && (
                <section className="py-24 bg-gray-50">
                    <div className="container px-6 md:px-12">
                        <FadeIn>
                            <h2 className="text-3xl font-heading font-bold mb-12 text-gray-900">You May Also Like</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {relatedProducts.map(p => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductDetail;
