import React from 'react';

function DashboardMenu(props: any): any {
    return (
        <ul>
            <li>
                <ul>
                    <li>
                        <a href="#">Account Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Account Information</a>
                    </li>
                    <li>
                        <a href="#">Address Book</a>
                    </li>
                    <li>
                        <a href="#">My Orders</a>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>
                        <a href="#">My Downloadable Products</a>
                    </li>
                    <li>
                        <a href="#">Stored Payment Methods</a>
                    </li>
                    <li>
                        <a href="#">Billing Agrements</a>
                    </li>
                    <li>
                        <a href="#">My Wish List</a>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>
                        <a href="#">My Product Reviews</a>
                    </li>
                    <li>
                        <a href="#">Newsletter Subscriptions</a>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default DashboardMenu;