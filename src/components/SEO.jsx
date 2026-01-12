import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Shanmukha Vardhan | Creative Developer & Designer",
    description = "Portfolio of Shanmukha Vardhan — a creative developer and designer building thoughtful digital experiences. Currently working on Avolve, a mental health companion.",
    image = "/og-image.png",
    url = "https://shanmukhavardhan.com",
    type = "website"
}) => {
    const siteTitle = "Shanmukha Vardhan";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Shanmukha Vardhan" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
