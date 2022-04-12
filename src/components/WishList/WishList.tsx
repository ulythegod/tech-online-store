import React from "react";
import styles from './wishList.module.scss';

function WishList() {
    return (
        <div className={`${styles["wish-list"]}`}>
            <span>My Wish List</span>
            <p>You have no items in your wish list.</p>
        </div>
    )
}

export default WishList;