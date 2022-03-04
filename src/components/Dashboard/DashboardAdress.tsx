import React from 'react';

class DashboardAdress extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="information-item">
                <span>
                    Address Book
                    <a href="#">Menage Addresses</a>
                </span>
                <div className="item-description">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <span>Default Billing Address</span>
                                        <p>
                                            You have not set a default 
                                            billing address.
                                        </p>
                                        <p>
                                            <a href="#">Edit Address</a>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>Default Shipping Address</span>
                                        <p>
                                            You have not set a default 
                                            shipping address.
                                        </p>
                                        <p>
                                            <a href="#">Edit Address</a>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DashboardAdress;