import React from 'react';
import styles from './companiesSection.module.scss';
import classNames from 'classnames';
import { CompaniesSectionProps } from 'CustomTypes';
import CompanyLogo1 from '../../images/companies1.png';
import CompanyLogo2 from '../../images/companies2.png';
import CompanyLogo3 from '../../images/companies3.png';
import CompanyLogo4 from '../../images/companies4.png';
import CompanyLogo5 from '../../images/companies5.png';
import CompanyLogo6 from '../../images/companies6.png';
import CompanyLogo7 from '../../images/companies7.png';

function CompaniesSection(props: CompaniesSectionProps) {
    let sectionClass = ""; 

    if (props.isInMenu) {
        sectionClass = "section-in-menu";
    }

    return (
        <section className={classNames(styles["main-companies-section"], styles[sectionClass])}>
            <ul className={styles["companies-list"]}>
                <li className={styles["companies-item"]}>
                    <a href="#"><img src={CompanyLogo1} alt="roccat" /></a>
                </li>
                <li className={styles["companies-item"]}>
                    <a href="#"><img src={CompanyLogo2} alt="msi" /></a>
                </li>
                <li className={styles["companies-item"]}>
                    <a href="#"><img src={CompanyLogo3} alt="razer"/></a>
                </li>
                <li className={styles["companies-item"]}>
                    <a href="#"><img src={CompanyLogo4} alt="thermaltake"/></a>
                </li>
                <li className={styles["companies-item"]}>
                    <a href="#"><img src={CompanyLogo5} alt="adata"/></a>
                </li>
                <li className={styles["companies-item"]}>
                    <a href="#"><img src={CompanyLogo6} alt="hewlett packard"/></a>
                </li>
                <li className={styles["companies-item"]}>
                    <a href="#"><img src={CompanyLogo7} alt="gigabyte"/></a>
                </li>
            </ul>
        </section>
    );
}

export default CompaniesSection;
