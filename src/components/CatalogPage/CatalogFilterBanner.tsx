import React from 'react';

interface CustomComponentProps {
    image: string;
    link: string;
}

class CatalogFilterBanner extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <a className="banner" href={this.props.link}>
                <img src={this.props.image} alt="the icon series"/>
            </a>
        );
    }
}

export default CatalogFilterBanner;