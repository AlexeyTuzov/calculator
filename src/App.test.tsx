import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

describe('App component tests', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

    });
    it('entire App component renders', () => {
        expect(screen.getByTitle('App')).toBeInTheDocument();
    });
});
