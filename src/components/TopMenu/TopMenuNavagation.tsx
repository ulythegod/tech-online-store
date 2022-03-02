import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';

class TopMenuNavagation extends React.Component {
    render(): React.ReactNode {
        return (
            <ul className="main-top-menu">
                <li>
                    <a className="main-top-menu-logo" href="index.html"><Logo /></a>
                </li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Desktop PCs</a></li>
                <li><a href="#">Networking Devices</a></li>
                <li><a href="#">Printers & Scanners</a></li>
                <li><a href="#">PC Parts</a></li>
                <li><a href="#">All Other Products</a></li>
                <li><a href="#">Repairs</a></li>
                <li><button className="main-top-menu-btn">Our deals</button></li>
            </ul>
        );
    }
}

export default TopMenuNavagation;
