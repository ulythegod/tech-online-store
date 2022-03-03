import React from 'react';

interface CustomComponentProps {
    image: string;
}

class CatalogBanner extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="catalog-banner">
                <a href="/catalog"><img src={this.props.image} alt="Catalog" /></a>
            </section>
        );
    }
}

export default CatalogBanner;
