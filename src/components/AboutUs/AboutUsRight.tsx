import React from 'react';

function AboutUsRight(props: any): any {
    return (
        <section className="about-us-right">
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
            <div className="image">
                <img src={props.image} alt={props.title}/>
            </div>
        </section>
    );
}

export default AboutUsRight;