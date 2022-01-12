import React from "react";
import { render, screen } from '@testing-library/react';
import Courses from "./Courses";
import userEvent from '@testing-library/user-event';

describe('Courses tests', () => {
    beforeEach(() => {
        render(<Courses />);
    });
    it('Courses renders', () => {
        expect(screen.getByTitle('Courses')).toBeInTheDocument();
    });
    it('Selector presents', () => {
        expect(screen.getByTitle('selector')).toBeInTheDocument();
    });
    it('Button presents', () => {
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });
    it('Handler is called when button is clicked', () => {
        const onClickHandler = jest.fn();
        userEvent.click(screen.getByRole('button'));
        expect(onClickHandler).toBeCalledTimes(1);
    });
    it('Courses Table renders only after Submit button is clicked', async () => {
        expect(screen.queryByRole('table')).toBeNull();
        userEvent.click(screen.getByRole('button'));
        expect(await screen.findByRole('table')).toBeInTheDocument();
    });
    it('Hint presents', () => {
        expect(screen.getByTitle('hint')).toBeInTheDocument();
    });
    it('Hint roll appears only after Hint button is clicked', () => {
        expect(screen.queryByTitle('hint-roll')).toBeNull();
        userEvent.click(screen.getByTitle('hint'));
        expect(screen.getByTitle('hint-roll')).toBeInTheDocument();
    });
});
