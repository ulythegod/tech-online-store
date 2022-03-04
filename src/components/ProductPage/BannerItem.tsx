import React from 'react';

interface ComponentProps {
    name: string;
    description: string;
    image: string;
}

class BannerItem extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="product-advantages-banner">
                <div className="banner-description">
                    <span>{this.props.name}</span>
                    <p>
                        {this.props.description}
                    </p>
                </div>
                <div className="banner-image">
                    <img src={this.props.image} alt="Intel"/>
                </div>
            </div>
        );
    }
}

export default BannerItem;
