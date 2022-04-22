import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '../custom-render';

import CatalogPage from '../pages/CatalogPage';
import { findByText, getByRole, getByText, queryAllByRole } from '@testing-library/react';

describe('product block', () => {
    it("checks elements of product block", async () => {
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

        const product: any = products[0];
        let status: any = {};

        if (product) {          
            // eslint-disable-next-line testing-library/prefer-screen-queries
            await findByText(product, 'in-stock', {}, {timeout: 5000}).then(async (statusElem: any) => {
                status = statusElem;     
            });

            if (!status) {
                // eslint-disable-next-line testing-library/prefer-screen-queries
                await findByText(product, 'check-availability', {}, {timeout: 5000}).then(async (statusElem: any) => {
                    status = statusElem;     
                });
            }
        }

        expect(
            status
        ).toBeInTheDocument();

        fireEvent.mouseOver(product);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        let productButtons: any[] = queryAllByRole(product, 'button');
        productButtons.forEach((button: any) => {
            expect(
                button
            ).toBeVisible();
        });
        
        expect(
            // eslint-disable-next-line testing-library/prefer-screen-queries
            getByRole(product, 'img')
        ).toBeInTheDocument();

        // eslint-disable-next-line testing-library/prefer-screen-queries
        let productName = getByText(product, 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On')
        expect(
            productName
        ).toBeInTheDocument();

        // eslint-disable-next-line testing-library/prefer-screen-queries
        let price = getByRole(product, "price");
        // eslint-disable-next-line testing-library/prefer-screen-queries
        let discount = getByRole(product, "discount");

        expect(
            (price >= discount)
        ).toBeTruthy()
        
        //проверяется добавление и удаление одного товара из корзины
        const baskets: any[] = screen.getAllByRole("basket-amount");
        const basketDesktop = baskets[0];

        expect(basketDesktop).toBeInTheDocument();

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const buttonAddToCart = getByRole(product, "button", {name: "Add To Cart"});
        fireEvent.click(buttonAddToCart);
        fireEvent.click(buttonAddToCart);
        fireEvent.click(buttonAddToCart);

        await waitFor(async () => {
            expect(
                basketDesktop
            ).toHaveTextContent("1");            
        });

        await waitFor(async () => {
            const amountItems: any[] = screen.queryAllByRole("amount-of-item");

            amountItems.forEach((item: any, id: number) => {
                expect(
                    item
                ).toHaveTextContent("3");
            });           
        });

        let desktopItem: any = {};
        await screen.findAllByRole("small-basket-item", {}, { timeout: 5000 }).then((basketItems: any[]) => {
            expect(
                basketItems.length
            ).toBe(2);
            
            desktopItem = basketItems[0];            
        });

        expect(desktopItem).toBeInTheDocument();            
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const deleteItemButton = getByRole(desktopItem, 'button', {name: 'remove-product'});
        expect(deleteItemButton).toBeInTheDocument();

        fireEvent.click(deleteItemButton);

        await waitFor(async () => {
            expect(
                basketDesktop
            ).toHaveTextContent("0");            
        });
    });
});