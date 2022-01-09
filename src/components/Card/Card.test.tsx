import {render, screen} from '@testing-library/react';
import React from "react";
import Card from './Card';

describe('testing the start Card component', () => {
   beforeEach(() => {
      render(<Card />);
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
});
