import React from 'react';

interface CustomInputProps {
    image: any;
    name: string;
    description: string;
}


class AdvantageItem extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="advantages-item">
                <img src={this.props.image} alt={this.props.name}/>
                <span>{this.props.name}</span>
                <p>
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default AdvantageItem;
