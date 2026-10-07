/**
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/', '/admin/'],
            },
            {
                // Explicitly allow LLM and AI crawlers for Generative Engine Optimization (GEO)
                userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'cohere-ai'],
                allow: '/',
            }
        ],
        sitemap: 'https://www.insaneduo.in/sitemap.xml',
    };
}
