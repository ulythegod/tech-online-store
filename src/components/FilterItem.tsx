import React from 'react';

interface CustomComponentProps {
    name: string;
}

class FilterItem extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <li>
                <a href="#">{this.props.name}</a>
                <ul>
                    <li>
                        <a href="#">CUSTOM PCS</a>
                        <span>15</span>
                    </li>
                    <li>
                        <a href="#">MSI ALL-IN-ONE PCS</a>
                        <span>45</span>
                    </li>
                    <li>
                        <a href="#">HP/COMPAQ PCS</a>
                        <span>1</span>
                    </li>
                </ul>
            </li>
        );
    }
}

export default FilterItem;