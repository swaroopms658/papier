export const categories = [
    {
        id: 'adult-care',
        name: 'Adult Personal Care',
        slug: 'adult-personal-care-manufacturers-bangalore',
        description: 'Trusted adult hygiene products manufacturers specializing in adult diapers, bed bath wipes, skin care, etc. High-quality, comfortable, and skin-friendly solutions.',
        image: '/assets/images/adult.jpeg',
        color: '#e3f2fd',
        icon: '🧑‍🦳'
    },
    {
        id: 'baby-care',
        name: 'Baby Wipes & Hygiene',
        slug: 'baby-wipes-manufacturers-bangalore',
        description: 'Gentle and effective products for your little one\'s care. From daily cleaning with baby wipes to skin protection with diaper rash creams.',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
        color: '#e8f5e9',
        icon: '👶'
    },
    {
        id: 'feminine-hygiene',
        name: 'Feminine Hygiene',
        slug: 'feminine-hygiene-manufacturers-bangalore',
        description: 'Leading feminine hygiene products manufacturer offering menstrual cups, intimate wipes, intimate wash, and more at affordable prices.',
        image: '/assets/images/fem.jpg',
        color: '#fce4ec',
        icon: '🌸'
    },
    {
        id: 'horeca',
        name: 'HoReCa Wipes',
        slug: 'horeca-wipes-manufacturers-bangalore',
        description: 'Leading manufacturers of HoReCa wipes. Includes Finger Bowl Wipes, Plates Cutlery Wipes, Plantain Leaf Wipes, Washroom Hygiene Wipes, etc.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        color: '#fff3e0',
        icon: '🍽️'
    },
    {
        id: 'clean-room',
        name: 'Clean Room Products',
        slug: 'cleanroom-wet-wipes-manufacturers-bangalore',
        description: 'Best cleanroom wet wipes manufacturer offering high-quality, lint-free, and ISO-certified wipes for contamination control.',
        image: '/assets/images/clean.png',
        color: '#e0f2f1',
        icon: '🧪'
    },
    {
        id: 'auto-care',
        name: 'Auto Care Wipes',
        slug: 'auto-wipes-manufacturers-bangalore',
        description: 'Best auto wipes manufacturing company providing automotive wet wipes for interior and exterior car care, detailing, and polishing.',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80',
        color: '#efebe9',
        icon: '🚗'
    },
    {
        id: 'dental-care',
        name: 'Dental Care',
        slug: 'dental-wipe-manufacturers-bangalore',
        description: 'Top dental wipe wholesale suppliers specializing in antibacterial, disposable wipes for optimal oral hygiene and sanitation.',
        image: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=600&q=80',
        color: '#f1f8e9',
        icon: '🦷'
    },
    {
        id: 'pet-care',
        name: 'Pet Care',
        slug: 'pet-wipes-manufacturers-bangalore',
        description: 'High-quality pet-friendly wet wipes ensuring complete hygiene for your pet\'s eyes, teeth, ears, nose, etc., at affordable prices.',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
        color: '#fff8e1',
        icon: '🐕'
    }
];

export const products = [
    // ===== ADULT PERSONAL CARE =====
    // Bed Bath Wipes
    { id: 101, name: 'Freshpro Green Bed Bath Wipes 10s', category: 'adult-care', subcategory: 'Bed Bath Wipes', price: null, image: '/products/bed-bath-green.jpg', hasImage: false, upcoming: false },
    { id: 102, name: 'Freshpro Blue Bed Bath Wipes 10s', category: 'adult-care', subcategory: 'Bed Bath Wipes', price: null, image: '/products/bed-bath-blue.jpg', hasImage: false, upcoming: false },

    // Adult Diapers
    { id: 103, name: 'Fresh Hope AD M 10s', category: 'adult-care', subcategory: 'Adult Diapers', price: null, image: '/products/adult-diaper-m.jpg', hasImage: false, upcoming: false },
    { id: 104, name: 'Fresh Hope AD L 10s', category: 'adult-care', subcategory: 'Adult Diapers', price: null, image: '/products/adult-diaper-l.jpg', hasImage: false, upcoming: false },
    { id: 105, name: 'Fresh Hope AD XL 10s', category: 'adult-care', subcategory: 'Adult Diapers', price: null, image: '/products/adult-diaper-xl.jpg', hasImage: false, upcoming: false },

    // Adult Pull Ups
    { id: 106, name: 'Fresh pro Adult Pull Ups M 10s', category: 'adult-care', subcategory: 'Adult Pull Ups', price: null, image: '/products/pullups-m.jpg', hasImage: false, upcoming: false },
    { id: 107, name: 'Fresh pro Adult Pull Ups L 10s', category: 'adult-care', subcategory: 'Adult Pull Ups', price: null, image: '/products/pullups-l.jpg', hasImage: false, upcoming: false },
    { id: 108, name: 'Fresh pro Adult Pull Ups XL 10s', category: 'adult-care', subcategory: 'Adult Pull Ups', price: null, image: '/products/pullups-xl.jpg', hasImage: false, upcoming: false },

    // Underpads
    { id: 109, name: 'Fresh pro Underpads 10s', category: 'adult-care', subcategory: 'Underpads', price: null, image: '/products/underpads.jpg', hasImage: false, upcoming: false },

    // Skin Care
    { id: 110, name: 'Ultra Bloom Talcum Powder (Prickly heat) 150 grams', category: 'adult-care', subcategory: 'Skin Care', price: null, image: '/products/talcum-powder.jpg', hasImage: false, upcoming: true },
    { id: 111, name: 'Ultra Derm Relief (Itch relief cream) 12 grams', category: 'adult-care', subcategory: 'Skin Care', price: null, image: '/products/itch-cream.jpg', hasImage: false, upcoming: true },

    // Personal Wipes
    { id: 112, name: 'Midnite Delay Wipes (1s x 25s) Dispenser', category: 'adult-care', subcategory: 'Personal Wipes', price: null, image: '/products/delay-wipes.jpg', hasImage: false, upcoming: false },

    // ===== BABY WIPES & HYGIENE =====
    // Baby Wipes
    { id: 201, name: 'KidO! Gentle Baby Wipes Blue 80s', category: 'baby-care', subcategory: 'Baby Wipes', price: null, image: '/products/baby-wipes-blue.jpg', hasImage: false, upcoming: false },
    { id: 202, name: 'KidO! Gentle Baby Wipes Pink 80s', category: 'baby-care', subcategory: 'Baby Wipes', price: null, image: '/products/baby-wipes-pink.jpg', hasImage: false, upcoming: false },
    { id: 203, name: 'KidO! Canister Wipes 80s with fragrance', category: 'baby-care', subcategory: 'Baby Wipes', price: null, image: '/products/canister-fragrance.jpg', hasImage: false, upcoming: false },
    { id: 204, name: 'KidO! Canister Wipes 80s sensitive - fragrance free', category: 'baby-care', subcategory: 'Baby Wipes', price: null, image: '/products/canister-sensitive.jpg', hasImage: false, upcoming: false },
    { id: 205, name: 'Tiddles Soft Baby Wipes 80s', category: 'baby-care', subcategory: 'Baby Wipes', price: null, image: '/products/tiddles.jpg', hasImage: false, upcoming: false },
    { id: 206, name: 'KidO! Baby Massage Oil Wipes 80s', category: 'baby-care', subcategory: 'Baby Wipes', price: null, image: '/products/massage-oil-wipes.jpg', hasImage: false, upcoming: false },
    { id: 207, name: 'KidO! Sensitive Skin Baby Wipes 80s', category: 'baby-care', subcategory: 'Baby Wipes', price: null, image: '/products/sensitive-wipes.jpg', hasImage: false, upcoming: true },

    // Children's Wipes
    { id: 208, name: 'Tiffin Box Wipes - (1s x 25s Dispenser) Chocolate', category: 'baby-care', subcategory: 'Children\'s Wipes', price: null, image: '/products/tiffin-chocolate.jpg', hasImage: false, upcoming: true },
    { id: 209, name: 'Tiffin Box Wipes - (1s x 25s Dispenser) Mint', category: 'baby-care', subcategory: 'Children\'s Wipes', price: null, image: '/products/tiffin-mint.jpg', hasImage: false, upcoming: true },
    { id: 210, name: 'Tiffin Box Wipes - (1s x 25s Dispenser) Strawberry', category: 'baby-care', subcategory: 'Children\'s Wipes', price: null, image: '/products/tiffin-strawberry.jpg', hasImage: false, upcoming: true },
    { id: 211, name: 'Tiffin Box Wipes - (1s x 25s Dispenser) Vanilla', category: 'baby-care', subcategory: 'Children\'s Wipes', price: null, image: '/products/tiffin-vanilla.jpg', hasImage: false, upcoming: true },
    { id: 212, name: 'Tiffin Box Wipes - (1s x 25s Dispenser) Plain (Sensitive - No Frag)', category: 'baby-care', subcategory: 'Children\'s Wipes', price: null, image: '/products/tiffin-plain.jpg', hasImage: false, upcoming: true },
    { id: 213, name: 'Tiffin Box Wipes - Assorted (Choc / Mint / Strawb / Plain / Vanilla)', category: 'baby-care', subcategory: 'Children\'s Wipes', price: null, image: '/products/tiffin-assorted.jpg', hasImage: false, upcoming: true },

    // Baby Bath Products
    { id: 214, name: 'KidO! Baby Massage Oil', category: 'baby-care', subcategory: 'Baby Bath Products', price: null, image: '/products/massage-oil.jpg', hasImage: false, upcoming: true },
    { id: 215, name: 'KidO! Baby Shower Gel', category: 'baby-care', subcategory: 'Baby Bath Products', price: null, image: '/products/shower-gel.jpg', hasImage: false, upcoming: true },
    { id: 216, name: 'KidO! Baby Bubble Bath', category: 'baby-care', subcategory: 'Baby Bath Products', price: null, image: '/products/bubble-bath.jpg', hasImage: false, upcoming: true },

    // Baby Feeding Range
    { id: 217, name: 'KidO! BPA Free Feeding Bottles 60 ml', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/bottle-60ml.jpg', hasImage: false, upcoming: false },
    { id: 218, name: 'KidO! BPA Free Feeding Bottles 250 ml', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/bottle-250ml.jpg', hasImage: false, upcoming: false },
    { id: 219, name: 'KidO! Glass Bottles 125 ml', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/glass-125ml.jpg', hasImage: false, upcoming: false },
    { id: 220, name: 'KidO! Glass Bottles 250 ml', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/glass-250ml.jpg', hasImage: false, upcoming: false },
    { id: 221, name: 'KidO! Teether Giraffe', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/teether-giraffe.jpg', hasImage: false, upcoming: false },
    { id: 222, name: 'KidO! Teether Ring', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/teether-ring.jpg', hasImage: false, upcoming: false },
    { id: 223, name: 'KidO! 2 in 1 Training Cup (Mini)', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/training-cup-mini.jpg', hasImage: false, upcoming: false },
    { id: 224, name: 'KidO! 2 in 1 Training Cup (Maxi)', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/training-cup-maxi.jpg', hasImage: false, upcoming: false },
    { id: 225, name: 'KidO! 2 in 1 Bottle Cleaning Brush', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/cleaning-brush.jpg', hasImage: false, upcoming: false },
    { id: 226, name: 'KidO! Fruit Feeder', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/fruit-feeder.jpg', hasImage: false, upcoming: false },
    { id: 227, name: 'KidO! Teats Pk of 2 Small', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/teats-small.jpg', hasImage: false, upcoming: false },
    { id: 228, name: 'KidO! Teats Pk of 2 Medium', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/teats-medium.jpg', hasImage: false, upcoming: false },
    { id: 229, name: 'KidO! Teats Pk of 2 Large', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: false, upcoming: false },
    { id: 230, name: 'KidO! Teats Pk of 2 XL', category: 'baby-care', subcategory: 'Baby Feeding Range', price: null, image: '/products/teats-xl.jpg', hasImage: false, upcoming: false },

    // ===== FEMININE HYGIENE =====
    // Menstrual Cups
    { id: 301, name: 'Ultra Femme Menstrual Cups S', category: 'feminine-hygiene', subcategory: 'Menstrual Cups', price: null, image: '/products/menstrual-cup-s.jpg', hasImage: false, upcoming: false },
    { id: 302, name: 'Ultra Femme Menstrual Cups M', category: 'feminine-hygiene', subcategory: 'Menstrual Cups', price: null, image: '/products/menstrual-cup-m.jpg', hasImage: false, upcoming: false },
    { id: 303, name: 'Ultra Femme Menstrual Cups L', category: 'feminine-hygiene', subcategory: 'Menstrual Cups', price: null, image: '/products/menstrual-cup-l.jpg', hasImage: false, upcoming: false },

    // Intimate Wipes
    { id: 304, name: 'Ultra Femme Intimate Wipes (1s x 25s) Dispenser', category: 'feminine-hygiene', subcategory: 'Intimate Wipes', price: null, image: '/products/intimate-wipes.jpg', hasImage: false, upcoming: true },

    // Pre Lactation Wipes
    { id: 305, name: 'Ultra Femme Pre Lactation - Breast Cleaning Wipes (1s x 25s) Dispenser', category: 'feminine-hygiene', subcategory: 'Pre Lactation Wipes', price: null, image: '/products/lactation-wipes.jpg', hasImage: false, upcoming: true },

    // Intimate Wash
    { id: 306, name: 'Ultra Femme Intimate Wash Liquid 100 ml', category: 'feminine-hygiene', subcategory: 'Intimate Wash', price: null, image: '/products/intimate-wash.jpg', hasImage: false, upcoming: true },

    // Maternity Pads
    { id: 307, name: 'Ultra Femme Maternity Pads (Pk of 5)', category: 'feminine-hygiene', subcategory: 'Maternity Pads', price: null, image: '/products/maternity-pads.jpg', hasImage: false, upcoming: true },

    // ===== HORECA WIPES =====
    // Freshening Wipes
    { id: 401, name: '247 Fresh Wipes (1s x 25s) Dispenser - Blue - Cologne', category: 'horeca', subcategory: 'Freshening Wipes', price: null, image: '/products/fresh-blue.jpg', hasImage: false, upcoming: false },
    { id: 402, name: '247 Fresh Wipes (1s x 25s) Dispenser - Orange - Aloe Vera', category: 'horeca', subcategory: 'Freshening Wipes', price: null, image: '/products/fresh-orange.jpg', hasImage: false, upcoming: false },
    { id: 403, name: '247 Fresh Wipes (1s x 25s) Dispenser - Icy Mint', category: 'horeca', subcategory: 'Freshening Wipes', price: null, image: '/products/fresh-mint.jpg', hasImage: false, upcoming: false },

    // Food Surface Wipes
    { id: 404, name: 'Plantain Wipes (1s x 25s) Dispenser', category: 'horeca', subcategory: 'Food Surface Wipes', price: null, image: '/products/plantain-wipes.jpg', hasImage: false, upcoming: false },
    { id: 405, name: 'Plates and Cutlery Wipes (1s x 25s) Dispenser', category: 'horeca', subcategory: 'Food Surface Wipes', price: null, image: '/products/cutlery-wipes.jpg', hasImage: false, upcoming: false },
    { id: 406, name: 'Finger Bowl Wipes (1s x 25s) Dispenser', category: 'horeca', subcategory: 'Food Surface Wipes', price: null, image: '/products/finger-bowl.jpg', hasImage: false, upcoming: false },

    // Washroom Hygiene Wipes
    { id: 407, name: 'Bum Clean Washroom Wipes (1s x 25s) Dispenser (Yellow)', category: 'horeca', subcategory: 'Washroom Hygiene Wipes', price: null, image: '/products/bum-clean-yellow.jpg', hasImage: false, upcoming: false },
    { id: 408, name: 'Bum Clean Washroom Wipes (1s x 25s) Dispenser (Green)', category: 'horeca', subcategory: 'Washroom Hygiene Wipes', price: null, image: '/products/bum-clean-green.jpg', hasImage: false, upcoming: false },

    // ===== CLEAN ROOM PRODUCTS =====
    // Disinfection Wipes
    { id: 501, name: 'Ultra Touch Safe 100s (Surface Disinfection Wipes)', category: 'clean-room', subcategory: 'Disinfection Wipes', price: null, image: '/products/ultra-touch-safe.jpg', hasImage: false, upcoming: false },
    { id: 502, name: 'Ultra Touch Safe Disinfection for Medical Equipments (PHMB)', category: 'clean-room', subcategory: 'Disinfection Wipes', price: null, image: '/products/medical-disinfection.jpg', hasImage: false, upcoming: true },

    // Gel Sanitiser
    { id: 503, name: 'Ultra Safe Shield Gel Sanitiser 100 ml', category: 'clean-room', subcategory: 'Gel Sanitiser', price: null, image: '/products/sanitiser-100ml.jpg', hasImage: false, upcoming: false },
    { id: 504, name: 'Ultra Safe Shield Gel Sanitiser 250 ml', category: 'clean-room', subcategory: 'Gel Sanitiser', price: null, image: '/products/sanitiser-250ml.jpg', hasImage: false, upcoming: false },
    { id: 505, name: 'Ultra Safe Shield Gel Sanitiser 500 ml', category: 'clean-room', subcategory: 'Gel Sanitiser', price: null, image: '/products/sanitiser-500ml.jpg', hasImage: false, upcoming: false },

    // Lint Free Dry Fabric
    { id: 506, name: 'Lint Free Dry Fabric (Thick with embossed dots)', category: 'clean-room', subcategory: 'Lint Free Dry Fabric', price: null, image: '/products/lint-free-thick.jpg', hasImage: false, upcoming: false },
    { id: 507, name: 'Lint Free Dry Fabric (Medium)', category: 'clean-room', subcategory: 'Lint Free Dry Fabric', price: null, image: '/products/lint-free-medium.jpg', hasImage: false, upcoming: false },
    { id: 508, name: 'Lint Free Dry Fabric (Small)', category: 'clean-room', subcategory: 'Lint Free Dry Fabric', price: null, image: '/products/lint-free-small.jpg', hasImage: false, upcoming: false },

    // ===== AUTO CARE WIPES =====
    { id: 601, name: 'Auto Shine Vinyl dashboard cleaning wipes', category: 'auto-care', subcategory: 'Auto Care Products', price: null, image: '/products/vinyl-dashboard.jpg', hasImage: false, upcoming: false },
    { id: 602, name: 'Auto Shine Glass cleaning wipes', category: 'auto-care', subcategory: 'Auto Care Products', price: null, image: '/products/glass-cleaning.jpg', hasImage: false, upcoming: false },
    { id: 603, name: 'Auto Shine Alloy Wheels cleaning wipes', category: 'auto-care', subcategory: 'Auto Care Products', price: null, image: '/products/alloy-wheels.jpg', hasImage: false, upcoming: false },
    { id: 604, name: 'Auto Shine exterior wash wipes', category: 'auto-care', subcategory: 'Auto Care Products', price: null, image: '/products/exterior-wash.jpg', hasImage: false, upcoming: false },
    { id: 605, name: 'Auto Shine Upholstery quick shampoo cleaning wipes', category: 'auto-care', subcategory: 'Auto Care Products', price: null, image: '/products/upholstery-shampoo.jpg', hasImage: false, upcoming: false },

    // ===== DENTAL CARE =====
    { id: 701, name: 'Breathe Eazee Mouth Freshening Wipes (1s x 25s) Dispenser', category: 'dental-care', subcategory: 'DENTAL CARE Products', price: null, image: '/products/mouth-freshening.jpg', hasImage: false, upcoming: false },

    // ===== PET CARE =====
    { id: 801, name: 'Buddy Fresh Full Body Wipes 80s', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/pet-body-wipes.jpg', hasImage: false, upcoming: false },
    { id: 802, name: 'Buddy Fresh Face and Mouth Wipes 80s (sensitive, no fragrance)', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/pet-face-wipes.jpg', hasImage: false, upcoming: true },
    { id: 803, name: 'Buddy Fresh Kennel Wash 500 ml', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/kennel-wash.jpg', hasImage: false, upcoming: true },
    { id: 804, name: 'Buddy Fresh Shampoo with Conditioner 500 ml', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/pet-shampoo.jpg', hasImage: false, upcoming: true },
    { id: 805, name: 'Buddy Fresh Pet Steel Bowl', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/steel-bowl.jpg', hasImage: false, upcoming: true },
    { id: 806, name: 'Buddy Fresh Pet Collars', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/pet-collars.jpg', hasImage: false, upcoming: true },
    { id: 807, name: 'Buddy Fresh Pet Leashes', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/pet-leashes.jpg', hasImage: false, upcoming: true },
    { id: 808, name: 'Buddy Fresh Harness', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/pet-harness.jpg', hasImage: false, upcoming: true },
    { id: 809, name: 'Buddy Fresh Pet Training Pads 10s', category: 'pet-care', subcategory: 'PET CARE Products', price: null, image: '/products/training-pads.jpg', hasImage: false, upcoming: true }
];

export const companyInfo = {
    name: 'Papier Creations',
    tagline: 'Professional, Innovative and Hygienic',
    phone: '+91 9513702702',
    email: 'info@papiercreations.com',
    address: '47, 48, 49, 3rd B Cross, Keonics Layout, Thigalarapalya Main Road, Peenya Stage 2, Bangalore 560058, India',
    experience: '16+',
    certifications: ['ISO 9001:2015', 'GMP Certified'],
    socialLinks: {
        facebook: 'https://facebook.com/papiercreations',
        instagram: 'https://www.instagram.com/papier__creations/',
        linkedin: 'https://linkedin.com/company/papiercreations',
        twitter: 'https://twitter.com/papiercreations',
        pinterest: 'https://pinterest.com/papiercreations'
    }
};
