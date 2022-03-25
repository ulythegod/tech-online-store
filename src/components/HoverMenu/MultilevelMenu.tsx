import React from "react";
import styles from './multilevelMenu.module.scss';
import classNames from "classnames";

function MultilevelMenu(props: any): any {
    return (
        <ul className={`${styles["menu-main-list"]}`}>
            <li className={`${classNames(styles["main-list-item"], styles["item-with-level"])}`}>
                <a className={`${styles["menu-link-inner"]}`} href="#">Everyday Use Notebooks</a>
                <span className={`${styles["arrow-next-level"]}`}></span>
                <ul className={`${styles["second-level-list"]}`}>
                    <li className={`${classNames(styles["main-list-item"], styles["item-with-third-level"])}`}>
                        <a className={`${styles["menu-link-inner"]}`} href="#">MSI Workstation Series</a>
                        <span className={`${styles["arrow-next-level"]}`}></span>
                        <ul className={`${styles["third-level-list"]}`}>
                            <li className={`${styles["main-list-item"]}`}>
                                <a className={`${styles["menu-link-inner"]}`} href="#">MSI WS Series <span className={`${styles["amount"]}`}>(12)</span></a>
                            </li>
                            <li className={`${styles["main-list-item"]}`}>
                                <a className={`${styles["menu-link-inner"]}`} href="#">MSI WT Series <span className={`${styles["amount"]}`}>(31)</span></a>
                            </li>
                            <li className={`${styles["main-list-item"]}`}>
                                <a className={`${styles["menu-link-inner"]}`} href="#">MSI WE Series <span className={`${styles["amount"]}`}>(7)</span></a>
                            </li>
                        </ul>
                    </li>
                    <li className={`${styles["main-list-item"]}`}>
                        <a  className={`${styles["menu-link-inner"]}`}href="#">MSI Prestige Series</a>
                    </li>
                </ul>
            </li>
            <li className={`${classNames(styles["main-list-item"], styles["item-with-level"])}`}>
                <a className={`${styles["menu-link-inner"]}`} href="#">MSI Workstation Series</a>
                <span className={`${styles["arrow-next-level"]}`}></span>
                <ul className={`${classNames(styles["main-list-item"], styles["second-level-list"])}`}>
                    <li className={`${classNames(styles["main-list-item"], styles["item-with-third-level"])}`}>
                        <a className={`${styles["menu-link-inner"]}`} href="#">MSI Workstation Series</a>
                        <span className={`${styles["arrow-next-level"]}`}></span>
                        <ul className={`${classNames(styles["main-list-item"], styles["third-level-list"])}`}>
                            <li className={`${styles["main-list-item"]}`}>
                                <a className={`${styles["menu-link-inner"]}`} href="#">MSI WS Series <span className={`${styles["amount"]}`}>(12)</span></a>
                            </li>
                            <li className={`${styles["main-list-item"]}`}>
                                <a className={`${styles["menu-link-inner"]}`} href="#">MSI WT Series <span className={`${styles["amount"]}`}>(31)</span></a>
                            </li>
                            <li className={`${styles["main-list-item"]}`}>
                                <a className={`${styles["menu-link-inner"]}`} href="#">MSI WE Series <span className={`${styles["amount"]}`}>(7)</span></a>
                            </li>
                        </ul>
                    </li>
                    <li className={`${styles["main-list-item"]}`}>
                        <a className={`${styles["menu-link-inner"]}`} href="#">MSI Prestige Series</a>
                    </li>
                </ul>
            </li>
            <li className={`${styles["main-list-item"]}`}>
                <a className={`${styles["menu-link-inner"]}`} href="#">MSI Prestige Series</a>
            </li>
            <li className={`${styles["main-list-item"]}`}>
                <a className={`${styles["menu-link-inner"]}`} href="#">Gaming Notebooks</a>
            </li>
            <li className={`${styles["main-list-item"]}`}>
                <a className={`${styles["menu-link-inner"]}`} href="#">Tablets And Pads</a>
            </li>
            <li className={`${styles["main-list-item"]}`}>
                <a className={`${styles["menu-link-inner"]}`} href="#">Netbooks</a>
            </li>
            <li className={`${styles["main-list-item"]}`}>
                <a className={`${styles["menu-link-inner"]}`} href="#">Infinity Gaming Notebooks</a>
            </li>
        </ul>
    )
}

export default MultilevelMenu;