import React from 'react';
import styles from './dashboardAccountInfo.module.scss';

function DashboardInfo(props: any): any {
    return (
        <div className={`${styles["information-item"]}`}>
            <span className={`${styles["item-title"]}`}>{props.title}</span>
            <div className="item-description">
                <table className={`${styles["description-table"]}`}>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <span className={`${styles["info-title"]}`}>Contact Information</span>
                                    <p className={`${styles["info-block"]}`}>
                                        Alex Driver
                                        ExampeAdress@gmail.com
                                    </p>
                                    <p className={`${styles["info-links"]}`}>
                                        <a href="#">Edit</a>
                                        <a href="#">Change Password</a>
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <span className={`${styles["info-title"]}`}>Newsletters</span>
                                    <p className={`${styles["info-block"]}`}>
                                        You don't subscribe 
                                        to our newsletter.
                                    </p>
                                    <p className={`${styles["info-links"]}`}>
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

export default DashboardInfo;