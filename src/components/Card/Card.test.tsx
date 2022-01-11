import {render, screen} from '@testing-library/react';
import React from "react";
import Card from './Card';
import {BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('testing the start Card component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Card/>
            </BrowserRouter>
        );
    });
    it('the Card renders', () => {
        expect(screen.getByText('Welcome to currencies calculator!')).toBeInTheDocument();
    });
    it('the converter link exists', () => {
        expect(screen.getByTitle('converter')).toBeInTheDocument();
    });
    it('the courses link exists', () => {
        expect(screen.getByTitle('courses')).toBeInTheDocument();
    });
    it('the converter link changes URL to \'/converter\'', () => {
        userEvent.click(screen.getByTitle('converter'));
        expect(window.location.pathname).toBe('/converter');
    });
    it('the courses link changes URL to \'/courses\'', () => {
        userEvent.click(screen.getByTitle('courses'));
        expect(window.location.pathname).toBe('/courses');
    })
});
