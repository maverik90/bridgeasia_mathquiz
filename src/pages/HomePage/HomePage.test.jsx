import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('renders homepage title and description', () => {
    render(<HomePage />);
    expect(screen.getByText('Homepage')).toBeInTheDocument();
    expect(screen.getByText('This is the Home page of the BridgeAsia Assessment.')).toBeInTheDocument();
  });
});