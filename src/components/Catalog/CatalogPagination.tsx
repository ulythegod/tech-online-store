import React, { ReactElement } from 'react';
import styles from './catalogPagination.module.scss';
import classNames from 'classnames';

type Props = {
    startIndex: number,
    endIndex: number,
    perPageAmount: number,
    overallAmount: number,
    currentPage: number,
    handlePagination: Function
}

function CatalogPagination(props: Props) {
    let pagesAmount = Math.ceil(props.overallAmount/props.perPageAmount);
    
    let paginationItems: ReactElement<any, any>[] = [];
    if (pagesAmount > 1) {
        if (pagesAmount <= 5) {
            for (let i = 1; i <= pagesAmount; i++) {
                let item: ReactElement<any, any> = (
                    <a 
                        className={
                            (i === props.currentPage) ?
                            `${classNames(styles["active"], styles["pagination-element"])}` :
                            `${styles["pagination-element"]}`
                        } 
                        href="#"
                        key={i}
                        onClick={(event: any) => props.handlePagination(event, i)}
                    >
                        {i}
                    </a>
                );

                paginationItems.push(item);
            }
        } else {
            if (props.currentPage < 3) {
                for (let i = 1; i <= 3; i++) {
                    let item: ReactElement<any, any> = (
                        <a 
                            className={
                                (i === props.currentPage) ?
                                `${classNames(styles["active"], styles["pagination-element"])}` :
                                `${styles["pagination-element"]}`
                            } 
                            href="#"
                            key={i}
                            onClick={(event: any) => props.handlePagination(event, i)}
                        >
                            {i}
                        </a>
                    );

                    paginationItems.push(item);
                }

                let restItem: ReactElement<any, any> = <span className={`${styles["pagination-element"]}`}>...</span>;
                let lastItem: ReactElement<any, any> = (
                    <a 
                        className={`${styles["pagination-element"]}`} 
                        href="#"
                        key={pagesAmount}
                        onClick={(event: any) => props.handlePagination(event, pagesAmount)}
                    >
                        {pagesAmount}
                    </a>
                );
                let nextLinkItem: ReactElement<any, any> = (
                    <a 
                        className={`${styles["pagination-element"]}`} 
                        href="#"
                        key={"next-" + (props.currentPage + 1)}
                        onClick={(event: any) => props.handlePagination(event, (props.currentPage + 1))}
                    >
                        <div className={`${styles["next"]}`}>
                    </div>    
                    </a>
                );

                paginationItems.push(restItem);
                paginationItems.push(lastItem);
                paginationItems.push(nextLinkItem);
            } else if (props.currentPage > (pagesAmount - 2)) {
                let lastLinkItem: ReactElement<any, any> = (
                    <a 
                        className={`${styles["pagination-element"]}`} 
                        href="#"
                        key={"last-" + (props.currentPage - 1)}
                        onClick={(event: any) => props.handlePagination(event, (props.currentPage - 1))}
                    >
                        <div className={`${styles["prev"]}`}>
                    </div>    
                    </a>
                );
                let firstItem: ReactElement<any, any> = (
                    <a 
                        className={`${styles["pagination-element"]}`} 
                        href="#"
                        key={1}
                        onClick={(event: any) => props.handlePagination(event, 1)}
                    >
                        {1}
                    </a>
                );
                let restItem: ReactElement<any, any> = <span className={`${styles["pagination-element"]}`}>...</span>;

                paginationItems.push(lastLinkItem);
                paginationItems.push(firstItem);
                paginationItems.push(restItem);

                for(let i = (pagesAmount - 2); i <= pagesAmount; i++) {
                    let item: ReactElement<any, any> = (
                        <a 
                            className={
                                (i === props.currentPage) ?
                                `${classNames(styles["active"], styles["pagination-element"])}` :
                                `${styles["pagination-element"]}`
                            } 
                            href="#"
                            key={i}
                            onClick={(event: any) => props.handlePagination(event, i)}
                        >
                            {i}
                        </a>
                    );

                    paginationItems.push(item);
                }
            } else {
                let lastLinkItem: ReactElement<any, any> = (
                    <a 
                        className={`${styles["pagination-element"]}`} 
                        href="#"
                        key={"last-" + (props.currentPage - 1)}
                        onClick={(event: any) => props.handlePagination(event, (props.currentPage - 1))}
                    >
                        <div className={`${styles["prev"]}`}>
                    </div>    
                    </a>
                );
                let firstItem: ReactElement<any, any> = (
                    <a 
                        className={`${styles["pagination-element"]}`} 
                        href="#"
                        key={1}
                        onClick={(event: any) => props.handlePagination(event, 1)}
                    >
                        {1}
                    </a>
                );
                let firstRestItem: ReactElement<any, any> = <span className={`${styles["pagination-element"]}`} key={"first-rest"}>...</span>;
                
                paginationItems.push(lastLinkItem);
                paginationItems.push(firstItem);
                paginationItems.push(firstRestItem);
                
                let currentItem: ReactElement<any, any> = (
                    <a 
                        className={`${classNames(styles["active"], styles["pagination-element"])}`} 
                        href="#"
                        key={props.currentPage}
                        onClick={(event: any) => props.handlePagination(event, props.currentPage)}
                    >
                        {props.currentPage}
                    </a>
                );
                paginationItems.push(currentItem);
                
                let secondRestItem: ReactElement<any, any> = <span className={`${styles["pagination-element"]}`} key={"second-rest"}>...</span>;
                let lastItem: ReactElement<any, any> = (
                    <a 
                        className={`${styles["pagination-element"]}`} 
                        href="#"
                        key={pagesAmount}
                        onClick={(event: any) => props.handlePagination(event, pagesAmount)}
                    >
                        {pagesAmount}
                    </a>
                );
                let nextLinkItem: ReactElement<any, any> = (
                    <a 
                        className={`${styles["pagination-element"]}`} 
                        href="#"
                        key={"next-" + (props.currentPage + 1)}
                        onClick={(event: any) => props.handlePagination(event, (props.currentPage + 1))}
                    >
                        <div className={`${styles["next"]}`}>
                    </div>    
                    </a>
                );
                
                paginationItems.push(secondRestItem);
                paginationItems.push(lastItem);
                paginationItems.push(nextLinkItem);
            }
        }
    }
    

    return (
        <div className={`${styles["catalog-pagination"]}`}>
            {paginationItems}
        </div>
    );
}

export default CatalogPagination;