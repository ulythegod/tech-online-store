import React from 'react';
import styles from './pageTitle.module.scss';

interface CustomComponentProps {
    title: string;
    isProductPage?: boolean;
}

class PageTitle extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        let className = "";

        if (this.props.isProductPage) {
            className = "page-title-product";
        } else {
            className = "page-title";
        }

        return (
            <h1 className={`${styles[className]}`}>{this.props.title}</h1>
        );
    }
}

export default PageTitle
