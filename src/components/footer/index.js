import React from 'react';
import styles from './index.module.css';
import { DeleteIcon } from '../icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
               <div>
               <Link className={styles.link} to="/">
                    HomePage
                </Link>
                <Link className={styles.link} to="/details">Details</Link>
               </div>
                <p className={styles.text}>The Building App</p>
            </div>
        </footer>
    );
};

export default Footer;
