import React from 'react';
import { ReactComponent as DeleteFilter } from '../images/delete-filter.svg';

interface CustomInputProps {
    name: string;
    amount: number;
    link: string;
}

class SelectedFilter extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <button>
                <span>{this.props.name} <span>({this.props.amount})</span></span>
                <a href={this.props.link}><DeleteFilter /></a>
            </button>
        );
    }
}

export default SelectedFilter;
