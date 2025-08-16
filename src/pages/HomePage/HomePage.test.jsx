import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('renders homepage title and description', () => {
    render(<HomePage />);

    // Check if the title is rendered
    expect(screen.getByText('Homepage')).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText('This is the Home page of the BridgeAsia Assessment.')).toBeInTheDocument();
  });

  test('renders a div container', () => {
    const { container } = render(<HomePage />);

    // Check if the div container exists
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});