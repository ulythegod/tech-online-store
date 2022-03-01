import React from 'react';
import styles from './index.module.scss';
import { ReactComponent as ArrowDown } from '../images/arrow-down.svg';

class HeaderTime extends React.Component {
    render(): React.ReactNode {
        return (
            <p className={`${styles["header-time"]}`}>
                Mon-Thu:
                <a href="#">
                    <span>9:00 AM - 5:30 PM</span>
                    <ArrowDown />
                </a>
            </p>
        );
    }
}

export default HeaderTime;
