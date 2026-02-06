import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories as staticCategories, products as staticProducts } from '../data/siteData';
import { fetchAPI, getStrapiMedia } from '../lib/api';

const Category = () => {
    const { slug } = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [otherCategories, setOtherCategories] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                // Fetch Category by Slug
                const catData = await fetchAPI(`/categories?filters[slug][$eq]=${slug}&populate=*`);

                if (catData && catData.data && catData.data.length > 0) {
                    const c = catData.data[0];
                    const staticCat = staticCategories.find(sc => sc.slug === c.slug);
                    const mappedCategory = {
                        id: c.id,
                        name: c.name,
                        slug: c.slug,
                        description: c.description,
                        icon: c.icon,
                        image: getStrapiMedia(c.image?.url || c.attributes?.image?.data?.attributes?.url) || staticCat?.image,
                    };
                    setCategory(mappedCategory);

                    // Fetch Products for this Category
                    // Note: In a real app we might paginate or filter by relation ID
                    const prodData = await fetchAPI(`/products?filters[category][slug][$eq]=${slug}&populate=*`);
                    if (prodData && prodData.data) {
                        const mappedProducts = prodData.data.map(p => {
                            const staticProd = staticProducts.find(sp => sp.id === p.id); // Assuming IDs preserved or weak match
                            // Or find by name
                            const staticProdByName = staticProducts.find(sp => sp.name === p.name);
                            const fallbackImage = staticProd?.image || staticProdByName?.image;

                            return {
                                id: p.id,
                                name: p.name,
                                price: p.price,
                                subcategory: p.subcategory,
                                hasImage: p.hasImage || !!fallbackImage,
                                image: getStrapiMedia(p.image?.url) || fallbackImage,
                                ...p
                            };
                        });
                        setProducts(mappedProducts);
                    }
                } else {
                    // Fallback to static
                    const staticCat = staticCategories.find(c => c.slug === slug);
                    if (staticCat) {
                        setCategory(staticCat);
                        setProducts(staticProducts.filter(p => p.category === staticCat.id));
                    }
                }

                // Fetch other categories for footer
                const otherData = await fetchAPI('/categories?pagination[limit]=5');
                if (otherData && otherData.data) {
                    setOtherCategories(otherData.data.map(c => ({
                        id: c.id,
                        name: c.name,
                        slug: c.slug,
                        icon: c.icon
                    })).filter(c => c.slug !== slug));
                } else {
                    setOtherCategories(staticCategories.filter(c => c.slug !== slug).slice(0, 5));
                }

            } catch (error) {
                console.error("Failed to load category data", error);
                // Fallback
                const staticCat = staticCategories.find(c => c.slug === slug);
                if (staticCat) {
                    setCategory(staticCat);
                    setProducts(staticProducts.filter(p => p.category === staticCat.id));
                }
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [slug]);

    const sortedProducts = useMemo(() => {
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
    }, [products]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!category) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-semibold text-[#b91c1c] mb-4">Category Not Found</h1>
                    <Link to="/products" className="btn btn-primary">View All Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Hero */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={category.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b91c1c]/95 via-[#b91c1c]/85 to-[#b91c1c]/70" />
                </div>
                <div className="container relative">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/products" className="hover:text-white transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-[#e62e2e]">{category.name}</span>
                    </nav>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white flex items-center justify-center text-3xl">
                            {category.icon}
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-white">
                                {category.name}
                            </h1>
                            <p className="text-white/70 mt-2">{products.length} Products</p>
                        </div>
                    </div>
                    <p className="text-white/80 text-lg max-w-2xl">
                        {category.description}
                    </p>
                </div>
            </section>

            {/* Products */}
            <section className="section-lg bg-gray-50">
                <div className="container max-w-5xl">
                    {/* Products List - Grouped by Subcategory */}
                    {sortedProducts.length > 0 ? (
                        <div className="space-y-12">
                            {/* Group products by subcategory */}
                            {Object.entries(
                                sortedProducts.reduce((acc, product) => {
                                    const subcat = product.subcategory || 'Other Products';
                                    if (!acc[subcat]) acc[subcat] = [];
                                    acc[subcat].push(product);
                                    return acc;
                                }, {})
                            ).map(([subcategory, subcatProducts]) => (
                                <div key={subcategory} className="bg-white p-8 rounded-sm border border-gray-200">
                                    <h2 className="text-2xl font-semibold text-[#b91c1c] mb-6 pb-3 border-b border-gray-200">
                                        {subcategory}
                                    </h2>
                                    <ul className="space-y-3">
                                        {subcatProducts.map(product => (
                                            <li key={product.id} className="flex items-start gap-3 text-gray-700">
                                                <span className="text-[#e62e2e] mt-1.5">•</span>
                                                <span className="flex-1">
                                                    {product.name}
                                                    {product.upcoming && (
                                                        <span className="ml-2 text-xs text-gray-500 italic">(upcoming)</span>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📦</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h3>
                            <p className="text-gray-500 mb-6">Check back soon for new additions</p>
                            <Link to="/products" className="btn btn-primary">Browse Categories</Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Related Categories */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="text-2xl font-heading font-semibold text-[#b91c1c] mb-8">
                        Other Categories
                    </h2>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                        {otherCategories.map(cat => (
                            <Link
                                key={cat.id}
                                to={`/category/${cat.slug}`}
                                className="flex items-center gap-3 px-6 py-4 bg-gray-50 hover:bg-red-50 transition-colors flex-shrink-0"
                            >
                                <span className="text-2xl">{cat.icon}</span>
                                <span className="font-medium text-gray-800">{cat.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Category;
