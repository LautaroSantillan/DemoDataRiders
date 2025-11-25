import React from 'react';
export const INDEX_TITLE = "DEMO | Data Riders";
export const INDEX_DESCRIPTION = "Landing page para mostrar las distintas DEMO publicadas en charlas o reuniones";

export const INDEX_META = [
    { name: "og:type", content: "website" },
    { name: "og:title", content: INDEX_TITLE },
    { name: "og:description", content: INDEX_DESCRIPTION },
    { rel: "icon", href: "../assets/logotipo.png", type: "image/png" }
];

export const Lang = () => {
    React.useEffect(() => {
        document.documentElement.lang = 'es';
    }, []);
    return null;
};

export const setLang = () => {
    document.documentElement.lang = 'es';
};