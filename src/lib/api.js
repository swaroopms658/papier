export const STRAPI_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

export async function fetchAPI(path) {
    const requestUrl = `${STRAPI_URL}/api${path}`;
    try {
        const response = await fetch(requestUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching API: ${requestUrl}`, error);
        return null;
    }
}

export function getStrapiMedia(url) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the Strapi URL
    return `${STRAPI_URL}${url}`;
}
