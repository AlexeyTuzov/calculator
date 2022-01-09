import React from "react";
import {render, screen} from '@testing-library/react';
import Courses from "./Courses";

describe('Courses tests', () => {
    beforeEach(() => {
        render(<Courses />);
    });
    it( 'Courses renders', () => {
        expect(screen.getByTitle('Courses')).toBeInTheDocument();
    });
});
