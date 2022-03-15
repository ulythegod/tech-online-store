import React from 'react';
import styles from './advantagesSection.module.scss';
import AdvantageItem from './AdvantageItem';
import Support from '../../images/Support.png';
import Account from '../../images/Account.png';
import Saving from '../../images/Saving.png';

interface ComponentProps {
    isBackground: boolean;
}

class AdvantagesSection extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        let backgroundClass = "";

        if (this.props.isBackground) {
            backgroundClass = "advantages-background";
        }

        return (
            <section className={`${styles["advantages-section"]}` + " " + `${styles[backgroundClass]}`}>
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
}

export default AdvantagesSection;
