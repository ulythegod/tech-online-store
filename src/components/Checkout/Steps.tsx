import React from 'react';

function Steps(props: any): any {
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

export default Steps;