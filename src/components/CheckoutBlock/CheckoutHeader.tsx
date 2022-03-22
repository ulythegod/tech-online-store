import React from "react";
import styles from './checkoutHeader.module.scss';
import PageTitle from "components/CommonComponents/PageTitle";
import StoreButton from "components/CommonComponents/StoreButton";
import Steps from "./Steps";

function CheckoutHeader(props: any): any {
    return (
        <div className={`${styles["section-header"]}`}>
            <div className={`${styles["title-part"]}`}>
                <PageTitle
                    title='Shopping Cart'
                />
                <StoreButton 
                    style="light-button-narrow"
                    content={"Sign In"}
                />
            </div>
            <Steps />
        </div>
    )
}

export default CheckoutHeader;