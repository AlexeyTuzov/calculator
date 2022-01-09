import React from "react";
import {render, screen} from '@testing-library/react';
import Converter from "./Converter";

describe('Converter tests', () => {
   beforeEach(() => {
      render(<Converter />);
   });
   it( 'Converter renders', () => {
      expect(screen.getByTitle('Converter')).toBeInTheDocument();
   });
});
