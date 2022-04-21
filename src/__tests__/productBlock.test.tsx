import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '../custom-render';

import CatalogPage from 'pages/CatalogPage';
import { findByRole, findByText, getByRole, getByTestId, getByText, queryAllByRole } from '@testing-library/react';

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
        
        if (product) {
            let status: any = {};
            
            await findByText(product, 'in-stock', {}, {timeout: 5000}).then(async (statusElem: any) => {
                status = statusElem;     
            });

            if (!status) {
                await findByText(product, 'check-availability', {}, {timeout: 5000}).then(async (statusElem: any) => {
                    status = statusElem;     
                });
            }

            expect(
                status
            ).toBeInTheDocument();
        }

        fireEvent.mouseOver(product);
        let productButtons: any[] = queryAllByRole(product, 'button');
        productButtons.forEach((button: any) => {
            expect(
                button
            ).toBeVisible();
        });
        
        expect(
            getByRole(product, 'img')
        ).toBeInTheDocument();

        let productName = getByText(product, 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On')
        expect(
            productName
        ).toBeInTheDocument();

        let price = getByRole(product, "price");
        let discount = getByRole(product, "discount");

        expect(
            (price >= discount)
        ).toBeTruthy()
        
        //проверяется добавление и удаление одного товара из корзины
        const baskets: any[] = screen.getAllByRole("basket-amount");
        const basketDesktop = baskets[0];

        expect(basketDesktop).toBeInTheDocument();

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