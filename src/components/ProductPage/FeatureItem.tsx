import React from 'react';

interface ComponentProps {
    image: string;
    description: string;
}

class FeatureItem extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="feature-item">
                <img src={this.props.image} alt="intel"/>
                <p>
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default FeatureItem;
