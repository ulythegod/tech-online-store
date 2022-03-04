import React from 'react';
import FeatureItem from './FeatureItem';
import IntelLogo from '../../images/intel-logo.png';
import RTXLogo from '../../images/rtx-logo.png';
import SSDLogo from '../../images/ssd-logo.png';
import DDRLogo from '../../images/ddr-logo4.png';

interface ComponentProps {
    sectionName: string;
    sectionDescription: string;
}

class ProductFeatures extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return(
            <section className="Features">
                <span>{this.props.sectionName}</span>
                <p>
                    {this.props.sectionDescription}
                </p>
                <div className="features-block">
                    <FeatureItem 
                        image={IntelLogo}
                        description={
                            `<span>Intel® Core™ i7</span> processor with the upmost 
                            computing power to bring you an unparalleled gaming 
                            experience.`
                        }
                    />
                    <FeatureItem 
                        image={RTXLogo}
                        description={
                            `The new  <span>GeForce® RTX SUPER™</span> 
                            Series has more cores and higher clocks for superfast 
                            performance compared to previous-gen GPUs.`
                        }
                    />
                    <FeatureItem 
                        image={SSDLogo}
                        description={
                            `Unleash the full potential with the latest <span>SSD technology</span>, 
                            the NVM Express. 6 times faster than traditional SATA SSD.`
                        }
                    />
                    <FeatureItem 
                        image={DDRLogo}
                        description={
                            `Featuring the latest <span>10th Gen Intel® Core™</span> processors, 
                            memory can support up to DDR4 2933MHz to delivers an 
                            unprecedented gaming experience.`
                        }
                    />
                </div>
            </section>
        );
    }
}

export default ProductFeatures;
