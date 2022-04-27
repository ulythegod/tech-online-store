import React from 'react';
import styles from './breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
import { BreadcrumbsProps } from 'CustomTypes';

function Breadcrumbs(props: BreadcrumbsProps) {    
    return (
        <nav className={styles["breadcrumbs-navigation"]}>
            <ul className={styles["breadcrumbs"]}>
                <li><a href="/">Home</a></li>
                {
                    (props.category) ?
                        (props.category.parent) ? 
                        <>
                            <li><Link to={`/catalog/${props.category.parent.id}`}>{props.category.parent.name}</Link></li>
                        </> : ""
                    : ""
                }
                {
                    (props.category) ? 
                    <>
                        <li><Link to={`/catalog/${props.category.id}`}>{props.category.name}</Link></li>
                    </> : ""
                }
            </ul>
        </nav>
    );
}

export default Breadcrumbs;
