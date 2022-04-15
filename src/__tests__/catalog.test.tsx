import '@testing-library/jest-dom';
import '@testing-library/react';
import React, { ReactElement } from 'react';
import { render, screen, waitFor, fireEvent } from '../custom-render';

import CatalogPage from 'pages/CatalogPage';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('my test', () => {
    it("checks amount of products that is shown on the page", async () => {
        await act(async () => {
            render(<CatalogPage />);          
        });

        expect(
            screen.getByTestId("main-top-menu")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId("top-menu-item")
        ).toBeInTheDocument();

        // expect(
        //     await screen.findByText(/test test test/i)
        // ).toBeInTheDocument();
       
        // let buttons = screen.getByTestId("add-to-basket");
        // console.log(buttons)
        
        // fireEvent.click(await screen.findByText(/test test test/i));
        
        // expect(
        //     node
        // ).toBeInTheDocument();      
    })
})
