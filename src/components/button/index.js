import React from 'react';
import styles from './index.module.css';

const Button = ({ onClick, children, ...props }) => {
    return (
        <button className={styles.btn} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
