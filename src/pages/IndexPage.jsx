import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/styles.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Links from '../components/Links';
import Header from '../views/header'; 
import { INDEX_TITLE, INDEX_DESCRIPTION, INDEX_META, Lang } from '../utils/utils';
// -----------------------------------------------------------------
const IndexPage = () => {
    return (
        <>
            <Helmet>
                <title>{INDEX_TITLE}</title>
                {INDEX_META.map((metaProps, index) => {
                    if (metaProps.rel === "icon") {
                        return <link key={index} {...metaProps} />;
                    }
                    return <meta key={index} {...metaProps} />;
                })}
            </Helmet>
            <div className="index-page-container">
                <Navbar />
                <div className="main-content-center">
                    <div className="main-content-vstack">
                        <Header />
                        <Links />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default IndexPage;