import React from 'react';

interface ComponentProps {
    name: string;
    id: string;
    description: any;
}

class FAQItem extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div id={this.props.id}>
                <h3>{this.props.name}</h3>
                <p>
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default FAQItem;