import React from "react";
import styles from './dashboardBlock.module.scss';
import DashboardMenu from "./DashboardMenu";
import DashboardInfo from "./DashboardInfo";
import WishList from "components/WishList/WishList";
import CompareProducts from "components/CompareProducts/CompareProducts";

function DashboardBlock(props: any): any {
    return (
        <div className={`${styles["dashboard-block"]}`}>
            <div className={`${styles["dashboard-sidebar"]}`}>
                <DashboardMenu />
                <CompareProducts />
                <WishList />
            </div>
            <div className={`${styles["dashboard-information"]}`}>
                <DashboardInfo 
                    title={"Account Information"}
                />
                <DashboardInfo 
                    title={
                        <>
                            Address Book
                            <a href="#">Menage Addresses</a>
                        </>
                    }
                />
            </div>
        </div>
    )
}

export default DashboardBlock;