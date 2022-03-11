import React from 'react';

interface CustomComponentProps {
    name: string;
    image: string;
    link: string;
}

class BrandsItem extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <li>
                <a href={this.props.link}><img src={this.props.image} alt={this.props.name}/></a>
            </li>
        );
    }
}

export default BrandsItem;