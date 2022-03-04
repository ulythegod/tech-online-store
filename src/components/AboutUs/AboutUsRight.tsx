import React from 'react';
import parse from 'html-react-parser';

interface ComponentProps {
    image: string;
    icon?: string;
    title: string;
    description: string;
}

class AboutUsRight extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="about-us-right">
                <div className="description">
                    {
                        this.props.icon && 
                        <div className="description-sign">
                            <img src={this.props.icon} alt={this.props.title}/>
                        </div>
                    }
                    <span>{this.props.title}</span>
                    <p>
                        {parse(this.props.description)}
                    </p>
                </div>
                <div className="image">
                    <img src={this.props.image} alt={this.props.title}/>
                </div>
            </section>
        );
    }
}

export default AboutUsRight;