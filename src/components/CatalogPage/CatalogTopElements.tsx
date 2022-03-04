import React from 'react';
import { ReactComponent as TableView } from '../../images/table-view.svg';
import { ReactComponent as LinesView } from '../../images/lines-view.svg';

class CatalogTopElements extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <div className="catalog-top-elements">
                <span>Items 1-35 of 61</span>
                <select name="sort-by" id="sort-by">
                    <option selected value="position">Position</option>
                </select>
                <select name="show" id="show">
                    <option selected value="35">35 per page</option>
                </select>
                <button>
                    <TableView />
                </button>
                <button>
                    <LinesView />
                </button>
            </div>
        );
    }
}

export default CatalogTopElements;
