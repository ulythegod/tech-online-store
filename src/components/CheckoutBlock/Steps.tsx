import React from 'react';
import styles from './steps.module.scss';
import classNames from 'classnames';
import { ReactComponent as ActiveStep } from '../../images/active-step.svg';

function Steps() {
    return (
        <div className={styles["steps"]}>
            <div className={styles["step-item"]}>
                <div className={styles["indicator-block"]}>
                    <span className={classNames(styles["indicator-left-border"], styles["active-border"])}></span>
                    <div className={classNames(styles["step-indicator"], styles["active"])}>
                        <ActiveStep />
                    </div>
                    <span className={classNames(styles["indicator-right-border"], styles["active-border"])}></span>
                </div>
                <span>Shipping</span>
            </div>
            <div className={styles["step-item"]}>
                <div className={styles["indicator-block"]}>
                    <span className={styles["indicator-left-border"]}></span>
                    <div className={styles["step-indicator"]}>
                        <span>2</span>
                    </div>
                    <span className={styles["indicator-right-border"]}></span>
                </div>
                <span>Review & Payments</span>
            </div>
        </div>
    );
}

export default Steps;