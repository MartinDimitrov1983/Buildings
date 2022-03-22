import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import {
    HOME_PAAGE_TEXT,
    DETAILS_TEXT,
    BUILDING_APP_TEXT
} from '../../utils/constants';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <Link className={styles.link} to="/">
                        {HOME_PAAGE_TEXT}
                    </Link>
                    <Link className={styles.link} to="/details">
                        {DETAILS_TEXT}
                    </Link>
                </div>
                <p className={styles.text}>{BUILDING_APP_TEXT}</p>
            </div>
        </footer>
    );
};

export default Footer;
