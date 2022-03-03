import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';

class TopMenuNavagation extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <ul className="main-top-menu">
                    <li>
                        <Link to="/"><Logo /></Link>
                    </li>
                    <li>
                        <Link to="/catalog">Desktop PCs</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Laptops</Link>
                    </li>
                    <li><Link to="/catalog">Networking Devices</Link></li>
                    <li><Link to="/catalog">Printers & Scanners</Link></li>
                    <li><Link to="/catalog">PC Parts</Link></li>
                    <li><Link to="/catalog">All Other Product</Link></li>
                    <li><Link to="/catalog">Repairs</Link></li>
                    <li><button className="main-top-menu-btn">Our deals</button></li>
                </ul>
            </>
        );
    }
}

export default TopMenuNavagation;
