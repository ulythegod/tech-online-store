import React, { ReactElement } from 'react';
import styles from './leftPictureBanner.module.scss';

type Props = {
    image: string,
    title: string,
    icon: string,
    description: ReactElement<any, any>
}

function AboutUsLeft(props: Props) {
    return (
        <section className={`${styles["about-us-left"]}`}>
            <div className={`${styles["image"]}`}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={`${styles["description"]}`}>
                {
                    props.icon && 
                    <div className={`${styles["description-sign"]}`}>
                        <img src={props.icon} alt={props.title}/>
                    </div>
                }
                <span>{props.title}</span>
                <div>
                    {props.description}
                </div>
            </div>
        </section>
    );
}

export default AboutUsLeft;