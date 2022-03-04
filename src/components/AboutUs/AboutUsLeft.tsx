import React from 'react';
import parse from 'html-react-parser';

interface ComponentProps {
    image: string;
    icon?: string;
    title: string;
    description: string;
}

class AboutUsLeft extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="about-us-left">
                <div className="image">
                    <img src={this.props.image} alt={this.props.title}/>
                </div>
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
            </section>
        );
    }
}

export default AboutUsLeft;