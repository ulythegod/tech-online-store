import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import CatalogPagination from '../components/Catalog/CatalogPagination';

test("checks new page number after jump on the next page", () => {
    const onClick = jest.fn();
    const startIndex: number = 0;
    const endIndex: number = 5;
    const perPageAmount: number = 5;
    const overallAmount: number = 28;
    let currentPage: number = 1;

    const view = render(<CatalogPagination
            startIndex={startIndex}
            endIndex={endIndex}
            perPageAmount={perPageAmount}
            overallAmount={overallAmount}
            currentPage={currentPage}
            handlePagination={onClick}
    />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(view.getByRole("next-page"));
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(view.getByRole("current-page").innerHTML).toBe("1");
    expect(onClick).toHaveBeenCalled();
});

test("checks last page number", () => {
    const onClick = jest.fn();
    const startIndex: number = 0;
    const endIndex: number = 10;
    const perPageAmount: number = 10;
    const overallAmount: number = 28;
    let currentPage: number = 1;

    const view = render(<CatalogPagination
            startIndex={startIndex}
            endIndex={endIndex}
            perPageAmount={perPageAmount}
            overallAmount={overallAmount}
            currentPage={currentPage}
            handlePagination={onClick}
    />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(view.getByRole("last-page-num").innerHTML).toBe("3");
});