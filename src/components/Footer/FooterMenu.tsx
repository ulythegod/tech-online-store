import React from 'react';
import styles from './footerMenu.module.scss';

class FooterMenu extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className={`${styles["footer-menu"]}`}>
                <ul>
                    <li>
                        <span className={`${styles["menu-title"]}`}>Information</span>
                        <ul className={`${styles["inner-items"]}`}>
                            <li>About Us</li>
                            <li>About Zip</li>
                            <li>Privacy Policy</li>
                            <li>Search</li>
                            <li>Terms</li>
                            <li>Orders and Returns</li>
                            <li>Contact Us</li>
                            <li>Advanced Search</li>
                            <li>Newsletter Subscription</li>
                        </ul>
                    </li>
                    <li>
                        <span className={`${styles["menu-title"]}`}>PC Parts</span>
                        <ul className={`${styles["inner-items"]}`}>
                            <li>CPUS</li>
                            <li>Add On Cards</li>
                            <li>Hard Drives (Internal)</li>
                            <li>Graphic Cards</li>
                            <li>Keyboards / Mice</li>
                            <li>Cases / Power Supplies / Cooling</li>
                            <li>RAM (Memory)</li>
                            <li>Software</li>
                            <li>Speakers / Headsets</li>
                        </ul>
                    </li>
                    <li>
                        <span className={`${styles["menu-title"]}`}>Desktop PCs</span>
                        <ul className={`${styles["inner-items"]}`}>
                            <li>Custom PCs</li>
                            <li>Servers</li>
                            <li>MSI All-In-One PCs</li>
                            <li>HP/Compaq PCs</li>
                            <li>HP/Compaq PCs ASUS PCs</li>
                            <li>Tecs PCs</li>
                        </ul>
                    </li>
                    <li>
                        <span className={`${styles["menu-title"]}`}>Laptops</span>
                        <ul className={`${styles["inner-items"]}`}>
                            <li>Evryday Use Notebooks</li>
                            <li>MSI Workstation Series</li>
                            <li>MSI Prestige Series</li>
                            <li>Tablets and Pads</li>
                            <li>Netbooks</li>
                            <li>Infinity Gaming Notebooks</li>
                        </ul>
                    </li>
                    <li>
                        <span className={`${styles["menu-title"]}`}>Laptops</span>
                        <ul className={`${styles["inner-items"]}`}>
                            <li>Address: 1234 Street Adress City Address, 1234</li>
                            <li>Phones <a href="tel:00-1234-5678">(00) 1234 5678</a></li>
                            <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
                            <li>Friday: 9:00 AM - 6:00 PM</li>
                            <li>Saturday: 11:00 AM - 5:00 PM</li>
                            <li>E-mail: <a href="mailto:shop@email.com">shop@email.com</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default FooterMenu;
