import React from 'react';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { ReactComponent as SearchOpenIcon } from '../../images/search-open.svg';
import { ReactComponent as SearchCloseIcon } from '../../images/search-close.svg';

class TopMenuSearch extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <div className="search-field">
                    <input type="text"/>
                    <button>
                        <SearchOpenIcon />
                    </button>
                    <button>
                        <SearchCloseIcon />
                    </button>
                </div>
                <button><SearchIcon /></button>
            </div>
        );
    }
}

export default TopMenuSearch;
