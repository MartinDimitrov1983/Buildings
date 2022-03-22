import React from 'react';
import AccountIcon from '../icons/account';
import { WELCOME_TEXT } from '../../utils/constants';
import styles from './index.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <p className={styles.welcome}>{WELCOME_TEXT}</p>
            <AccountIcon />
        </div>
    );
};

export default Header;
