import React from 'react';
import styles from './advantagesSection.module.scss';
import AdvantageItem from './AdvantageItem';
import classNames from 'classnames';
import Support from '../../images/Support.png';
import Account from '../../images/Account.png';
import Saving from '../../images/Saving.png';

function AdvantagesSection(props: any): any {
    let backgroundClass = "";

    if (props.isBackground) {
        backgroundClass = "advantages-background";
    }

    return (
        <section className={`${classNames(styles["advantages-section"], styles[backgroundClass])}`}>
            <div className={`${styles["advantages-list"]}`}>
                <AdvantageItem
                    image={Support}
                    name={"Product Support"}
                    description={"Up to 3 years on-site warranty available for your peace of mind."}
                />
                <AdvantageItem
                    image={Saving}
                    name={"Personal Account"}
                    description={"With big discounts, free delivery and a dedicated support specialist."}
                />
                <AdvantageItem
                    image={Account}
                    name={"Amazing Savings"}
                    description={"Up to 70% off new Products, you can be sure of the best price."}
                />
            </div>
        </section>
    );
}

export default AdvantagesSection;
