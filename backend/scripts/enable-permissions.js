const { Strapi } = require('@strapi/strapi');

async function enablePublicAccess() {
    // 1. Initialize Strapi
    const strapi = require('@strapi/strapi');
    const app = await strapi.createStrapi({ distDir: './dist' }).load();

    try {
        console.log('🔍 Finding Public Role...');
        // Find the ID of the Public role
        const publicRole = await app.db.query('plugin::users-permissions.role').findOne({
            where: { type: 'public' },
        });

        if (!publicRole) {
            throw new Error('Public role not found');
        }

        console.log(`✅ Public Role ID: ${publicRole.id}`);

        // 2. Define permissions to enable
        const permissionsToEnable = [
            'api::category.category.find',
            'api::category.category.findOne',
            'api::product.product.find',
            'api::product.product.findOne',
            // Add other content types if needed
        ];

        // 3. Enable permissions
        console.log('🔓 Enabling Permissions...');

        for (const action of permissionsToEnable) {
            // Check if permission exists
            const existing = await app.db.query('plugin::users-permissions.permission').findOne({
                where: {
                    role: publicRole.id,
                    action: action,
                }
            });

            if (!existing) {
                await app.db.query('plugin::users-permissions.permission').create({
                    data: {
                        role: publicRole.id,
                        action: action,
                        enabled: true,
                    }
                });
                console.log(`   - Enabled: ${action}`);
            } else {
                await app.db.query('plugin::users-permissions.permission').update({
                    where: { id: existing.id },
                    data: { enabled: true }
                });
                console.log(`   - Updated: ${action}`);
            }
        }

        console.log('✨ Public API Access Enabled successfully!');

    } catch (error) {
        console.error('❌ Failed to enable permissions:', error);
    } finally {
        app.destroy();
    }
}

enablePublicAccess();
