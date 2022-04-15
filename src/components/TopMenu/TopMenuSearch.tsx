import React, { MouseEventHandler } from 'react';
import styles from './topMenuSearch.module.scss'
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { ReactComponent as SearchOpenIcon } from '../../images/search-open.svg';
import { ReactComponent as SearchCloseIcon } from '../../images/search-close.svg';
import classNames from 'classnames';

type Props = {
    isOpenSearchPannel: boolean,
    handleOpenSearchPannel: MouseEventHandler<HTMLButtonElement>
}

function TopMenuSearch(props: Props) {
    return (
        <>
            {props.isOpenSearchPannel && 
                <div className={styles["search-field-block"]}>
                    <div className={styles["search-field-with-button"]}>
                        <input className={styles["search-field"]} type="text" placeholder='Search entiere store here...'/>
                        <button className={classNames(styles["search-icon"], styles["icon-in-field"])}>
                            <SearchOpenIcon />
                        </button> 
                    </div>                    
                    <button 
                        className={styles["search-icon"]}
                        onClick={props.handleOpenSearchPannel}
                    >
                        <SearchCloseIcon />
                    </button>
                </div>
            }
            {!props.isOpenSearchPannel && <button onClick={props.handleOpenSearchPannel} className={styles["search-icon"]}><SearchIcon /></button>}
        </>
    );
}

export default TopMenuSearch;
