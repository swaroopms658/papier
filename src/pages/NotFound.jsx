import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-primary-50">
            <div className="text-center px-6">
                <div className="w-32 h-32 mx-auto mb-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🔍</span>
                </div>
                <h1 className="text-6xl font-heading font-bold text-primary-900 mb-4">404</h1>
                <h2 className="text-2xl font-heading font-semibold text-gray-700 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/" className="btn-primary">
                        Go Home
                    </Link>
                    <Link to="/products" className="btn-secondary">
                        View Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
