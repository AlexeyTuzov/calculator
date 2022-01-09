import React from 'react';
import {render, screen} from '@testing-library/react';
import Footer from './Footer';

describe('Footer test', () => {
    beforeEach(() => {
       render(<Footer/>);
    });
   it('Footer renders', () => {
       expect(screen.getByText('Powered by React')).toBeInTheDocument();
   });
   it('React Logo presents', () => {
      expect(screen.getByTitle('Logo')).toBeInTheDocument();
   });
   it('Rendered Logo, not Alt text', () => {
       expect(screen.getByTitle('Logo')).toHaveAttribute('src', '../../logo.svg');
   });
});
