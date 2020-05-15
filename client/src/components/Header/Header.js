import React from 'react';

import styles from './Header.module.scss';
import logoImage from '../../assests/images/logo.png';
import headImage from '../../assests/images/head.png';

const Header = ({ firstPage }) => {
    
    const headerClass = firstPage ? styles.firstPage : null;
    const mainImg = firstPage ? null : <img src={headImage} alt="" />;

    return (
        <div className={[styles.header, headerClass].join(' ')}>
            <div className={styles.logo}>
                <img src={logoImage} alt="Royal Canin" />
            </div>
            <div className={[styles.cat, headerClass].join(' ')}>
                {mainImg}
            </div>
        </div>
    );
};

export default Header;