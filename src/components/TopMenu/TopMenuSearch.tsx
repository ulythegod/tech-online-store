import React from 'react';
import styles from './topMenuSearch.module.scss'
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { ReactComponent as SearchOpenIcon } from '../../images/search-open.svg';
import { ReactComponent as SearchCloseIcon } from '../../images/search-close.svg';

class TopMenuSearch extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <div className={`${styles["search-field-hidden"]}`}>
                    <input type="text"/>
                    <button>
                        <SearchOpenIcon />
                    </button>
                    <button>
                        <SearchCloseIcon />
                    </button>
                </div>
                <button className={`${styles["search-icon"]}`}><SearchIcon /></button>
            </div>
        );
    }
}

export default TopMenuSearch;
