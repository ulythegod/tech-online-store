import React from 'react';
import styles from './rightPictureBanner.module.scss';

function AboutUsRight(props: any): any {
    return (
        <section className={`${styles["about-us-right"]}`}>
            <div className={`${styles["description"]}`}>
                {
                    props.icon && 
                    <div className="description-sign">
                        <img src={props.icon} alt={props.title}/>
                    </div>
                }
                <span>{props.title}</span>
                <div className={`${styles["description-text"]}`}>
                    {props.description}
                </div>
            </div>
            <div className={`${styles["image"]}`}>
                <img src={props.image} alt={props.title}/>
            </div>
        </section>
    );
}

export default AboutUsRight;