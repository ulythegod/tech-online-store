import React from 'react';
import style from './topMenuNavigation.module.scss'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import StoreButton from 'components/CommonComponents/StoreButton';

class TopMenuNavagation extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <ul className={`${style["main-top-menu"]}`}>
                    <li>
                        <Link to="/"><Logo /></Link>
                    </li>
                    <li>
                        <Link to="/catalog">Laptops</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Desktop PCs</Link>
                    </li>
                    <li><Link to="/catalog">Networking Devices</Link></li>
                    <li><Link to="/catalog">Printers & Scanners</Link></li>
                    <li><Link to="/catalog">PC Parts</Link></li>
                    <li><Link to="/catalog">All Other Product</Link></li>
                    <li><Link to="/catalog">Repairs</Link></li>
                    <li>
                        <StoreButton
                            style="light-button"
                            content='Our Deals'
                        />
                    </li>
                </ul>
            </>
        );
    }
}

export default TopMenuNavagation;
