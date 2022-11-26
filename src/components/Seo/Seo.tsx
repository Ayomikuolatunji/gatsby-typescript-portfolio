import React from "react";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import {siteMetadataProps} from "../../models";

const SEO = ({title, description, pathname, children}: siteMetadataProps) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}/>
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
            />
            {children}
        </>
    );
};

export default SEO;
