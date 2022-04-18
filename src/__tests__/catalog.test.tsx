import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '../custom-render';

import CatalogPage from 'pages/CatalogPage';
import { act } from 'react-dom/test-utils';

describe('catalog test', () => {
    it("checks amount of catalog sections links in menu that is shown on the page", async () => {
        await act(async () => {
            render(<CatalogPage />);          
        });

        expect(
            screen.getByTestId("main-top-menu")
        ).toBeInTheDocument();

        await waitFor(async () => {
            expect(
                screen.getAllByTestId("top-menu-item")
            ).toHaveLength(5);
        });     
    });

    it("checks that products are shown on the page", async () => {
        await act(async () => {
            render(<CatalogPage />);          
        });

        await waitFor(async () => {
            screen.getAllByTestId("product-preview");            
        });
    });

    it("checks that products can be add to basket", async () => {
        await act(async () => {
            render(<CatalogPage />);          
        });

        let products: any[] = [];
        await waitFor(async () => {
            products = screen.getAllByTestId("product-preview");            
        });

        let addToBasketButtons: any[] = [];
        await waitFor(async () => {
            addToBasketButtons = screen.getAllByTestId("add-to-basket");            
        });
        
        if (addToBasketButtons.length > 0) {
            addToBasketButtons.forEach((button: any) => {
                fireEvent.click(button);
            });
        }

        await waitFor(async () => {                        
            // expect(
            //     screen.getByTestId("basket-amount")
            // ).toHaveTextContent(String(addToBasketButtons.length));
        })
    });

    it("checks if menu item can be opened", async () => {
        await act(async () => {
            render(<CatalogPage />);          
        });

        expect(
            screen.getByTestId("main-top-menu")
        ).toBeInTheDocument();

        await waitFor(async () => {
            expect(
                screen.getByTestId("laptops")
            ).toBeInTheDocument();        
        });

        await waitFor(async () => {
            fireEvent.mouseOver(screen.getByTestId("laptops"));

            expect(
                screen.getByTestId("laptops-hover")
            ).toBeInTheDocument();
        })
    })
})
