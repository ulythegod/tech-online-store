import React from 'react';

const parse = require('html-react-parser');

interface ComponentProps {
    name: string;
    id: string;
    description: string;
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
                    {parse(this.props.description)}
                </p>
            </div>
        );
    }
}

export default FAQItem;