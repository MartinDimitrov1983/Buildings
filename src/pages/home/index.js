import React from 'react';
import PageLayout from '../../page-layout';
import styles from './index.module.css';

import { TEXT, BUILDING_TEXT } from '../../utils/constants';

const HomePage = () => {
    return (
        <PageLayout>
            <h1 className={styles.title}>{BUILDING_TEXT}</h1>
            <img
                className={styles.homePicture}
                src={`${process.env.PUBLIC_URL}/images/houserevealanimate.webp`}
                alt="no pic"
            />
            <p className={styles.text}>{TEXT}</p>
        </PageLayout>
    );
};

export default HomePage;
