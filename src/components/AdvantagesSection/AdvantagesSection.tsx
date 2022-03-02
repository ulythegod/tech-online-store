import React from 'react';
import AdvantageItem from './AdvantageItem';
import Support from '../../images/Support.png';
import Account from '../../images/Account.png';
import Saving from '../../images/Saving.png';

class AdvantagesSection extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="advantages-section">
                <div className="advantages-list">
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
