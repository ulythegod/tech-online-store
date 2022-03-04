import React from 'react';

class DashboardAccountInfo extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="information-item">
                <span>Account Information</span>
                <div className="item-description">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <span>Contact Information</span>
                                        <p>
                                            Alex Driver
                                            ExampeAdress@gmail.com
                                        </p>
                                        <p>
                                            <a href="#">Edit</a>
                                            <a href="#">Change Password</a>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>Newsletters</span>
                                        <p>
                                            You don't subscribe 
                                            to our newsletter.
                                        </p>
                                        <p>
                                            <a href="#">Edit</a>
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

export default DashboardAccountInfo;