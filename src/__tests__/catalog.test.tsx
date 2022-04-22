import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '../custom-render';

import CatalogPage from '../pages/CatalogPage';
import { getByRole } from '@testing-library/react';

describe('catalog test', () => {
    it("checks amount of catalog sections links in menu that is shown on the page", async () => {        
        render(<CatalogPage />);

        expect(
            screen.getByRole('menu', {name: "main-top-menu"})
        ).toBeInTheDocument();
        
        await screen.findAllByRole("menuitem", {}, {timeout: 5000}).then(async (topMenuItems: any[]) => {
            expect(
                (topMenuItems.length === 5)
            ).toBeTruthy();            
        });
    });

    it("checks that products are shown on the page", async () => {
        render(<CatalogPage />);

        await screen.findAllByText("EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On", {}, {timeout: 5000}).then(async (productItems: any[]) => {
            expect(
                productItems.length
            ).toBeGreaterThan(0);        
        });
    });

    it("checks that products can be add to basket", async () => {
        render(<CatalogPage />);

        let products: any[] = [];
        await waitFor(
            async () => {
                products = screen.getAllByRole("product", {name: "product-preview"});
                expect(
                    products.length
                ).toBeGreaterThan(0)          
            },
            {
                timeout: 5000
            }
        );        
        
        products.slice(0, 5).forEach((product: any) => {
           // eslint-disable-next-line testing-library/prefer-screen-queries
           const button = getByRole(product, "button", {name: "Add To Cart"});
           expect(
               button
           ).toBeInTheDocument();
           fireEvent.click(button);
        });

        await waitFor(async () => {
            const baskets: any[] = screen.getAllByRole("basket-amount");
            const basketDesktop = baskets[0];

            expect(
                basketDesktop
            ).toHaveTextContent("5");
        })
    });

    it("checks if menu item can be opened", async () => {        
        render(<CatalogPage />);
        
        expect(
            screen.getByRole('menu', {name: "main-top-menu"})
        ).toBeInTheDocument();

        let laptopsItem: any = {};
        await screen.findByRole("menuitem", {name: "Laptops"}).then(async (item) => {
            laptopsItem = item;           
        })
        
        await waitFor(async () => {
            expect(
                laptopsItem
            ).toBeInTheDocument();        
        });

        fireEvent.mouseOver(laptopsItem);
        
        await waitFor(async () => {
            expect(
                screen.getByRole("hover-menu", {name: "laptops-hover"})
            ).toBeVisible()
        });
    });
})
