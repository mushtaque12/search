import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'styled-components';

describe('Button', () => {
  describe('with primary', () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={defaultTheme}>
          <Button primary buttonText='some text' />
        </ThemeProvider>,
      );
    });

    test('Renders a button with styles', () => {
      expect(screen.getByRole('button', { name: 'some text' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'some text' })).toHaveStyle({ background: defaultTheme.colors.gold });
    });
  });

  describe('with non primary', () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={defaultTheme}>
          <Button buttonText='some text' />
        </ThemeProvider>,
      );
    });

    test('Renders a button with styles', () => {
      expect(screen.getByRole('button', { name: 'some text' })).toHaveStyle({ background: defaultTheme.colors.blue });
    });
  });

  describe('with href', () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={defaultTheme}>
          <Button buttonText='some text' href='some-href' />
        </ThemeProvider>,
      );
    });

    test('Renders a button with styles', () => {
      expect(screen.getByRole('link', { name: 'some text' })).toBeInTheDocument();
    });
  });
});
