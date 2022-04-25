import React from "react";
import styles from './checkoutHeader.module.scss';
import PageTitle from "components/PageTitle/PageTitle";
import StoreButton from "components/Buttons/StoreButton";
import Steps from "./Steps";

function CheckoutHeader() {
    return (
        <div className={styles["section-header"]}>
            <div className={styles["title-part"]}>
                <PageTitle
                    title='Shopping Cart'
                />
                <StoreButton 
                    buttonStyle="light-button-narrow"
                    content={"Sign In"}
                />
            </div>
            <Steps />
        </div>
    )
}

export default CheckoutHeader;