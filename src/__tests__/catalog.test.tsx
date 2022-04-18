import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '../custom-render';

import CatalogPage from 'pages/CatalogPage';
import { act } from 'react-dom/test-utils';
import { getByRole } from '@testing-library/react';

describe('catalog test', () => {
    it("checks amount of catalog sections links in menu that is shown on the page", async () => {        
        render(<CatalogPage />);

        expect(
            screen.getByTestId("main-top-menu")
        ).toBeInTheDocument();

        await waitFor(
            async () => {
                expect(
                    screen.getAllByTestId("top-menu-item")
                ).toHaveLength(5);
            },
            {
                timeout: 5000
            }
        );     
    });

    it("checks that products are shown on the page", async () => {
        render(<CatalogPage />);

        await waitFor(async () => {
            screen.getAllByTestId("product-preview");            
        }, {
            timeout: 5000
        });
    });

    it("checks that products can be add to basket", async () => {
        render(<CatalogPage />);

        let products: any[] = [];
        await waitFor(
            async () => {
                products = screen.getAllByTestId("product-preview");
                expect(
                    products.length
                ).toBeGreaterThan(0)          
            },
            {
                timeout: 5000
            }
        );        
        
        products.slice(0, 5).forEach((product: any) => {
           const button = getByRole(product, "button", {name: "Add To Cart"});
           expect(
               button
           ).toBeInTheDocument();
           fireEvent.click(button);
        });

        await waitFor(async () => {                        
            expect(
                screen.getByTestId("basket-amount")
            ).toHaveTextContent("5");
        })
    });

    it("checks if menu item can be opened", async () => {        
        render(<CatalogPage />);
        
        expect(
            screen.getByTestId("main-top-menu")
        ).toBeInTheDocument();

        await waitFor(async () => {
            expect(
                screen.getByTestId("laptops")
            ).toBeInTheDocument();        
        });

        fireEvent.mouseOver(screen.getByTestId("laptops"));
        
        await waitFor(async () => {
            expect(
                screen.getByTestId("laptops-hover")
            ).toBeVisible()
        });
    });

    it("checks elements of product block", async () => {
        render(<CatalogPage />);
    });
})
