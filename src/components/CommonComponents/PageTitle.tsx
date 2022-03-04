import React from 'react';

interface CustomComponentProps {
    title: string;
}

class PageTitle extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

export default PageTitle
