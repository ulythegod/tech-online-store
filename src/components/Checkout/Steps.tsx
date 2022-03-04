import React from 'react';

class Steps extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="steps">
                <div className="step-item">
                    <span>1</span>
                    <span>Shipping</span>
                </div>
                <div className="step-item">
                    <span>2</span>
                    <span>Review & Payments</span>
                </div>
            </div>
        );
    }
}

export default Steps;