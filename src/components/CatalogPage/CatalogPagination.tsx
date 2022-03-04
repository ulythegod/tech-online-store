import React from 'react';

class CatalogPagination extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="catalog-pagination">
                <a href="#">prev</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                ...
                <a href="#">15</a>
                <a href="#">next</a>
            </div>
        );
    }
}

export default CatalogPagination;