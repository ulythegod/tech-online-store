import React from 'react';
import color1 from '../../../images/prod-color1.png';
import color2 from '../../../images/prod-color2.png';
import color3 from '../../../images/prod-color3.png';

interface ComponentProps {
    name: string;
    description: string;
    model: string;
}

class ProductInfoBlock extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <p>
                    {this.props.description}
                </p>
                <div className="product-options">
                    <button><img src={color1} alt="black"/></button>
                    <button><img src={color2} alt="yellow"/></button>
                    <button><img src={color3} alt="grey"/></button>
                </div>
            </>
        );
    }
}

export default ProductInfoBlock;