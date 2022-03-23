import React from 'react';

function AboutUsLeft(props: any): any {
    return (
        <section className="about-us-left">
            <div className="image">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="description">
                {
                    props.icon && 
                    <div className="description-sign">
                        <img src={props.icon} alt={props.title}/>
                    </div>
                }
                <span>{props.title}</span>
                <p>
                    {props.description}
                </p>
            </div>
        </section>
    );
}

export default AboutUsLeft;