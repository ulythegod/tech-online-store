import React from 'react';
import styles from './footerMenu.module.scss';
import FooterMenuItem from './FooterMenuItem';

function FooterMenu(props: any): any {
    return (
        <nav className={`${styles["footer-menu"]}`}>
            <ul className={`${styles["menu-outer-part"]}`}>
                <FooterMenuItem 
                    name={"Information"}
                    items={
                        <>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">About Zip</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Orders and Returns</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Advanced Search</a></li>
                            <li><a href="#">Newsletter Subscription</a></li>
                        </>
                    }
                />
                <FooterMenuItem 
                    name={"PC Parts"}
                    items={
                        <>
                            <li><a href="#">CPUS</a></li>
                            <li><a href="#">Add On Cards</a></li>
                            <li><a href="#">Hard Drives (Internal)</a></li>
                            <li><a href="#">Graphic Cards</a></li>
                            <li><a href="#">Keyboards / Mice</a></li>
                            <li><a href="#">Cases / Power Supplies / Cooling</a></li>
                            <li><a href="#">RAM (Memory)</a></li>
                            <li><a href="#">Software</a></li>
                            <li><a href="#">Speakers / Headsets</a></li>
                            <li><a href="#">Motherboards</a></li>
                        </>
                    }
                />
                <FooterMenuItem 
                    name={"Desktop PCs"}
                    items={
                        <>
                            <li><a href="#">Custom PCs</a></li>
                            <li><a href="#">Servers</a></li>
                            <li><a href="#">MSI All-In-One PCs</a></li>
                            <li><a href="#">HP/Compaq PCs</a></li>
                            <li><a href="#">HP/Compaq PCs ASUS PCs</a></li>
                            <li><a href="#">Tecs PCs</a></li>
                        </>
                    }
                />
                <FooterMenuItem 
                    name={"Laptops"}
                    items={
                        <>
                            <li><a href="#">Evryday Use Notebooks</a></li>
                            <li><a href="#">MSI Workstation Series</a></li>
                            <li><a href="#">MSI Prestige Series</a></li>
                            <li><a href="#">Tablets and Pads</a></li>
                            <li><a href="#">Netbooks</a></li>
                            <li><a href="#">Infinity Gaming Notebooks</a></li>
                        </>
                    }
                />
                <FooterMenuItem 
                    name={"Address"}
                    items={
                        <>
                            <li>Address: 1234 Street Adress City Address, 1234</li>
                            <li>Phones: <a className={`${styles["contacts-link"]}`} href="tel:00-1234-5678">(00) 1234 5678</a></li>
                            <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
                            <li>Friday: 9:00 AM - 6:00 PM</li>
                            <li>Saturday: 11:00 AM - 5:00 PM</li>
                            <li>E-mail: <a className={`${styles["contacts-link"]}`} href="mailto:shop@email.com">shop@email.com</a></li>
                        </>
                    }
                    isContacts={true}
                />
            </ul>
        </nav>
    );
}

export default FooterMenu;
