import React, { ReactElement } from 'react';
import styles from './footerMenu.module.scss';
import FooterMenuItem from './FooterMenuItem';
import { Link } from 'react-router-dom';

import { selectParentCategories } from '../../features/categories/categoriesSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Category } from 'CustomTypes';

function FooterMenu() {
    let categories = useSelector((state: RootState) => selectParentCategories(state));
    let categoriesItems: ReactElement<any, any>[] = [];

    if (categories.length > 0) {
        for (let i = 0; i < 3; i++) {
            let links: ReactElement<any, any>[] = [];
            if (categories[i].subCategories) {
                links = categories[i].subCategories.map((category: Category, id: number) => {
                    return (
                        <Link key={category.id} to={`/catalog/${category.id}`}>{category.name}</Link>
                    )
                })
            }
            
            let item: ReactElement<any, any> = (
                <FooterMenuItem 
                    key={categories[i].id}
                    id={categories[i].id}
                    name={categories[i].name}
                    items={
                        <>
                            {links}
                        </>
                    }
                />
            );
                    
            categoriesItems.push(item)
        }
    }
    

    return (
        <nav className={styles["footer-menu"]}>
            <ul className={styles["menu-outer-part"]}>
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
                {categoriesItems}
                <FooterMenuItem 
                    name={"Address"}
                    items={
                        <>
                            <li>Address: 1234 Street Adress City Address, 1234</li>
                            <li>Phones: <a className={styles["contacts-link"]} href="tel:00-1234-5678">(00) 1234 5678</a></li>
                            <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
                            <li>Friday: 9:00 AM - 6:00 PM</li>
                            <li>Saturday: 11:00 AM - 5:00 PM</li>
                            <li>E-mail: <a className={styles["contacts-link"]} href="mailto:shop@email.com">shop@email.com</a></li>
                        </>
                    }
                    isContacts={true}
                />
            </ul>
        </nav>
    );
}

export default FooterMenu;
