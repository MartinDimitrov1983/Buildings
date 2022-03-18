import React from 'react';
import Footer from '../components/footer';

const PageLayout = (props) => {
    return (
        <React.Fragment>
            {props.children}
            <Footer />
        </React.Fragment>
    );
};

export default PageLayout;
