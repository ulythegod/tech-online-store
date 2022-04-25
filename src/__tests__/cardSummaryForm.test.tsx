import React from "react";
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import CardSummaryForm from '../components/ShoppingCard/CardSummaryForm';

let constainer: any = null;

beforeEach(() => {
    constainer = document.createElement('div');
    document.body.appendChild(constainer);
});

afterEach(() => {
    document.body.removeChild(constainer);
    constainer = null;
});

it('checks inputs open', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        ReactDOM.render(<CardSummaryForm subtotal={123} />, constainer);
    });

    const openLink: HTMLAnchorElement = constainer.querySelector('[role="open-link"]');
    const countryInput: HTMLLabelElement = constainer.querySelector('[aria-label="Country input"]');
    const stateInput: HTMLLabelElement = constainer.querySelector('[aria-label="State/Province input"]');
    const codeInput: HTMLLabelElement = constainer.querySelector('[aria-label="Zip/Postal Code input"]');
    const rateInput: HTMLLabelElement = constainer.querySelector('[aria-label="Standard Rate input"]');
    const pickupInput: HTMLLabelElement = constainer.querySelector('[aria-label="Pickup from store input"]');
    
    expect(countryInput.className).toBe("hidden");
    expect(stateInput.className).toBe("hidden");
    expect(codeInput.className).toBe("hidden");
    expect(rateInput.className).toBe("hidden");
    expect(pickupInput.className).toBe("hidden");

    act(() => {
        openLink.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(countryInput.className).toBe("form-block-inner-input");
    expect(stateInput.className).toBe("form-block-inner-input");
    expect(codeInput.className).toBe("form-block-inner-input");
    expect(rateInput.className).toBe("form-block-inner-input");
    expect(pickupInput.className).toBe("form-block-inner-input");
});