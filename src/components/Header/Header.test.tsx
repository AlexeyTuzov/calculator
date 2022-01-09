import React from "react";
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import {BrowserRouter} from "react-router-dom";

describe('Header tests', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        );

    });
    it('Header renders', () => {
        expect(screen.getByTitle('Header')).toBeInTheDocument();
    });
    it('Header has text', () => {
        expect(screen.getByText('Currencies Calculator')).toBeInTheDocument();
    });
    it('Home button exists', () => {
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('Home button changes URL to \'/\'', () => {
        userEvent.click(screen.getByRole('button'));
        expect(window.location.pathname).toBe('/');
    });
});
