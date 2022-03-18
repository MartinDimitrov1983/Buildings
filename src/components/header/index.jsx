import React from 'react';
import AccountIcon from '../icons/account';
import styles from './index.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <p className={styles.welcome}>Welcome</p> 
           
                <AccountIcon />
           
        </div>
    );
};

export default Header;
