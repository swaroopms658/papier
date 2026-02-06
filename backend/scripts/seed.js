const { Strapi } = require('@strapi/strapi');
const fs = require('fs');
const path = require('path');

// Hardcoded data from siteData.js to ensure easy migration without module conflicts
const categories = [
    {
        id: 'baby-hygiene',
        name: 'Baby Hygiene',
        slug: 'baby-hygiene-manufacturers-bangalore',
        description: 'Gentle and effective products for your little one\'s care. From baby wipes to skin protection.',
        image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
        color: '#e8f5e9',
        icon: '👶'
    },
    {
        id: 'adult-hygiene',
        name: 'Adult Hygiene',
        slug: 'adult-hygiene-manufacturers-bangalore',
        description: 'Quality adult hygiene solutions including diapers, pull-ups, and underpads.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
        color: '#e3f2fd',
        icon: '🧑‍🦳'
    },
    {
        id: 'adult-personal-care',
        name: 'Adult Personal Care',
        slug: 'adult-personal-care-manufacturers-bangalore',
        description: 'A select range designed to enhance hygiene and comfort. Includes Delay Wipes, Adult Intimate Wipes.',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
        color: '#ede7f6',
        icon: '💆'
    },
    {
        id: 'feminine-hygiene',
        name: 'Feminine Hygiene',
        slug: 'feminine-hygiene-manufacturers-bangalore',
        description: 'Safe and gentle feminine care products including maternity pads and intimate wash.',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
        color: '#fce4ec',
        icon: '🌸'
    },
    {
        id: 'home-care',
        name: 'Home Care',
        slug: 'home-care-wipes-manufacturers-bangalore',
        description: 'Complete home cleaning solutions for surfaces, floors, and everyday hygiene needs.',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
        color: '#e1f5fe',
        icon: '🏠'
    },
    {
        id: 'horeca',
        name: 'HoReCa',
        slug: 'horeca-wipes-manufacturers-bangalore',
        description: 'Professional hospitality products - Finger Bowl Wipes, Cutlery Wipes, Welcome Wipes.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        color: '#fff3e0',
        icon: '🍽️'
    },
    {
        id: 'auto-care',
        name: 'Auto Care',
        slug: 'auto-wipes-manufacturers-bangalore',
        description: 'Comprehensive range for external body, alloy wheels, glass panels, and interiors.',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80',
        color: '#efebe9',
        icon: '🚗'
    },
    {
        id: 'fabric-care',
        name: 'Fabric Care',
        slug: 'fabric-care-wipes-manufacturers-bangalore',
        description: 'Fabric freshening and care wipes for clothing, upholstery, and textiles.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        color: '#f3e5f5',
        icon: '👔'
    },
    {
        id: 'eye-hygiene',
        name: 'Eye Hygiene',
        slug: 'eye-hygiene-wipes-manufacturers-bangalore',
        description: 'Gentle eye care wipes for daily cleansing and makeup removal.',
        image: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?w=600&q=80',
        color: '#e0f2f1',
        icon: '👁️'
    },
    {
        id: 'pet-care',
        name: 'Pet Care',
        slug: 'pet-wipes-manufacturers-bangalore',
        description: 'Pet wipes, dental wipes, shampoo, conditioner, and grooming gloves for furry friends.',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
        color: '#fff8e1',
        icon: '🐕'
    }
];

const products = [
    // Baby Hygiene
    { id: 1, name: 'KidO! Gentle Baby Wipes Blue 80s', category: 'baby-hygiene', subcategory: 'Baby Wipes', price: 199, image: '/products/baby-wipes-blue.jpg', hasImage: false },
    { id: 2, name: 'KidO! Gentle Baby Wipes Pink 80s', category: 'baby-hygiene', subcategory: 'Baby Wipes', price: 199, image: '/products/baby-wipes-pink.jpg', hasImage: false },
    { id: 3, name: 'KidO! Canister Wipes 80s Fragrance', category: 'baby-hygiene', subcategory: 'Baby Wipes', price: 249, image: '/products/canister-fragrance.jpg', hasImage: false },
    { id: 4, name: 'KidO! Canister Wipes 80s Sensitive', category: 'baby-hygiene', subcategory: 'Baby Wipes', price: 249, image: '/products/canister-sensitive.jpg', hasImage: false },
    { id: 5, name: 'Tiddles Soft Baby Wipes 80s', category: 'baby-hygiene', subcategory: 'Baby Wipes', price: 179, image: '/products/tiddles-baby.jpg', hasImage: false },
    { id: 6, name: 'KidO! Baby Massage Oil Wipes 80s', category: 'baby-hygiene', subcategory: 'Baby Wipes', price: 229, image: '/products/massage-oil-wipes.jpg', hasImage: false },
    { id: 7, name: 'KidO! BPA Free Feeding Bottles 60ml', category: 'baby-hygiene', subcategory: 'Baby Feeding', price: 149, image: '/products/bottle-60ml.jpg', hasImage: false },
    { id: 8, name: 'KidO! BPA Free Feeding Bottles 250ml', category: 'baby-hygiene', subcategory: 'Baby Feeding', price: 199, image: '/products/bottle-250ml.jpg', hasImage: false },

    // Adult Hygiene
    { id: 11, name: 'Adult Hygiene Wipes 40s', category: 'adult-hygiene', subcategory: 'Adult Wipes', price: 299, image: '/products/adult-wipes.jpg', hasImage: false },
    { id: 12, name: 'Adult Diapers M Size', category: 'adult-hygiene', subcategory: 'Adult Diapers', price: 599, image: '/products/adult-diapers-m.jpg', hasImage: false },
    { id: 13, name: 'Adult Diapers L Size', category: 'adult-hygiene', subcategory: 'Adult Diapers', price: 649, image: '/products/adult-diapers-l.jpg', hasImage: false },
    { id: 14, name: 'Adult Pull-ups M Size', category: 'adult-hygiene', subcategory: 'Adult Diapers', price: 699, image: '/products/adult-pullups-m.jpg', hasImage: false },
    { id: 15, name: 'Underpads 60x90cm 10s', category: 'adult-hygiene', subcategory: 'Underpads', price: 399, image: '/products/underpads.jpg', hasImage: false },

    // Adult Personal Care
    { id: 21, name: 'Delay Wipes 10s', category: 'adult-personal-care', subcategory: 'Personal Care', price: 349, image: '/products/delay-wipes.jpg', hasImage: false },
    { id: 22, name: 'Adult Intimate Wipes 20s', category: 'adult-personal-care', subcategory: 'Personal Care', price: 279, image: '/products/intimate-wipes.jpg', hasImage: false },

    // Feminine Hygiene
    { id: 31, name: 'Feminine Intimate Wipes 20s', category: 'feminine-hygiene', subcategory: 'Feminine Wipes', price: 149, image: '/products/feminine-wipes.jpg', hasImage: false },
    { id: 32, name: 'Maternity Pads 8s', category: 'feminine-hygiene', subcategory: 'Maternity', price: 299, image: '/products/maternity-pads.jpg', hasImage: false },
    { id: 33, name: 'Intimate Wash 100ml', category: 'feminine-hygiene', subcategory: 'Intimate Care', price: 249, image: '/products/intimate-wash.jpg', hasImage: false },
    { id: 34, name: 'Menstrual Cup', category: 'feminine-hygiene', subcategory: 'Menstrual', price: 399, image: '/products/menstrual-cup.jpg', hasImage: false },

    // Home Care
    { id: 41, name: 'Multi-Surface Wipes 40s', category: 'home-care', subcategory: 'Surface Wipes', price: 199, image: '/products/surface-wipes.jpg', hasImage: false },
    { id: 42, name: 'Floor Cleaning Wipes 20s', category: 'home-care', subcategory: 'Floor Wipes', price: 249, image: '/products/floor-wipes.jpg', hasImage: false },
    { id: 43, name: 'Kitchen Cleaning Wipes 30s', category: 'home-care', subcategory: 'Kitchen', price: 179, image: '/products/kitchen-wipes.jpg', hasImage: false },

    // HoReCa
    { id: 51, name: 'Finger Bowl Wipes 100s', category: 'horeca', subcategory: 'Restaurant', price: 349, image: '/products/finger-bowl.jpg', hasImage: false },
    { id: 52, name: 'Plates Cutlery Wipes 50s', category: 'horeca', subcategory: 'Restaurant', price: 249, image: '/products/cutlery-wipes.jpg', hasImage: false },
    { id: 53, name: 'Welcome Freshening Wipes 100s', category: 'horeca', subcategory: 'Hospitality', price: 399, image: '/products/welcome-wipes.jpg', hasImage: false },
    { id: 54, name: 'Washroom Hygiene Wipes 50s', category: 'horeca', subcategory: 'Hospitality', price: 299, image: '/products/washroom-wipes.jpg', hasImage: false },
    { id: 55, name: 'Plantain Leaf Wipes 50s', category: 'horeca', subcategory: 'Restaurant', price: 279, image: '/products/plantain-wipes.jpg', hasImage: false },

    // Auto Care
    { id: 61, name: 'Car Body Wash Wipes 40s', category: 'auto-care', subcategory: 'Exterior', price: 199, image: '/products/car-body-wipes.jpg', hasImage: false },
    { id: 62, name: 'Alloy Wheel Wipes 30s', category: 'auto-care', subcategory: 'Exterior', price: 179, image: '/products/alloy-wipes.jpg', hasImage: false },
    { id: 63, name: 'Glass Panel Wipes 30s', category: 'auto-care', subcategory: 'Glass', price: 169, image: '/products/glass-wipes.jpg', hasImage: false },
    { id: 64, name: 'Interior Vinyl Wipes 40s', category: 'auto-care', subcategory: 'Interior', price: 189, image: '/products/vinyl-wipes.jpg', hasImage: false },
    { id: 65, name: 'Upholstery Wipes 30s', category: 'auto-care', subcategory: 'Interior', price: 199, image: '/products/upholstery-wipes.jpg', hasImage: false },

    // Fabric Care
    { id: 71, name: 'Fabric Freshening Wipes 20s', category: 'fabric-care', subcategory: 'Fabric', price: 149, image: '/products/fabric-fresh.jpg', hasImage: false },
    { id: 72, name: 'Stain Remover Wipes 15s', category: 'fabric-care', subcategory: 'Fabric', price: 179, image: '/products/stain-remover.jpg', hasImage: false },

    // Eye Hygiene
    { id: 81, name: 'Eye Cleansing Wipes 30s', category: 'eye-hygiene', subcategory: 'Eye Care', price: 199, image: '/products/eye-wipes.jpg', hasImage: false },
    { id: 82, name: 'Makeup Remover Wipes 25s', category: 'eye-hygiene', subcategory: 'Eye Care', price: 179, image: '/products/makeup-remover.jpg', hasImage: false },

    // Pet Care
    { id: 91, name: 'Pet Grooming Wipes Fragrance 50s', category: 'pet-care', subcategory: 'Pet Wipes', price: 249, image: '/products/pet-fragrance.jpg', hasImage: false },
    { id: 92, name: 'Pet Grooming Wipes Sensitive 50s', category: 'pet-care', subcategory: 'Pet Wipes', price: 249, image: '/products/pet-sensitive.jpg', hasImage: false },
    { id: 93, name: 'Pet Dental Wipes 30s', category: 'pet-care', subcategory: 'Pet Dental', price: 199, image: '/products/pet-dental.jpg', hasImage: false },
    { id: 94, name: 'Pet Shampoo 500ml', category: 'pet-care', subcategory: 'Pet Grooming', price: 349, image: '/products/pet-shampoo.jpg', hasImage: false },
    { id: 95, name: 'Pet Conditioner 500ml', category: 'pet-care', subcategory: 'Pet Grooming', price: 349, image: '/products/pet-conditioner.jpg', hasImage: false },
    { id: 96, name: 'Pet Grooming Gloves', category: 'pet-care', subcategory: 'Pet Grooming', price: 399, image: '/products/pet-gloves.jpg', hasImage: false },
    { id: 97, name: 'Kennel Wash 1L', category: 'pet-care', subcategory: 'Pet Grooming', price: 449, image: '/products/kennel-wash.jpg', hasImage: false },
];

async function seed() {
    const strapi = require('@strapi/strapi');
    // We are running from 'backend/' root, so dist is './dist'
    const app = await strapi.createStrapi({ distDir: './dist' }).load();

    try {
        console.log('Clearing existing data...');
        // Clear existing
        await app.db.query('api::category.category').deleteMany({});
        await app.db.query('api::product.product').deleteMany({});

        const categoryMap = {};

        console.log('Seeding Categories...');
        for (const cat of categories) {
            const entry = await app.entityService.create('api::category.category', {
                data: {
                    name: cat.name,
                    slug: cat.slug,
                    description: cat.description,
                    icon: cat.icon,
                    // Note: Skipping Image Upload for now to ensure data structure first
                    publishedAt: new Date(),
                }
            });
            categoryMap[cat.id] = entry.id;
            console.log(`Created Category: ${cat.name}`);
        }

        console.log('Seeding Products...');
        for (const prod of products) {
            if (!categoryMap[prod.category]) {
                console.warn(`Category not found for product: ${prod.name} (${prod.category})`);
                continue;
            }

            await app.entityService.create('api::product.product', {
                data: {
                    name: prod.name,
                    // Auto-slugify
                    slug: prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
                    price: prod.price,
                    subcategory: prod.subcategory,
                    hasImage: prod.hasImage,
                    category: categoryMap[prod.category],
                    publishedAt: new Date(),
                }
            });
            console.log(`Created Product: ${prod.name}`);
        }

        console.log('Seeding Complete!');
    } catch (error) {
        console.error('Seeding failed:', error);
    } finally {
        app.destroy();
    }
}

seed();
