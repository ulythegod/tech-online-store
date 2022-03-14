import React from 'react';
import styles from './pageTitle.module.scss';

interface CustomComponentProps {
    title: string;
}

class PageTitle extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <h1 className={`${styles["page-title"]}`}>{this.props.title}</h1>
        );
    }
}

export default PageTitle
