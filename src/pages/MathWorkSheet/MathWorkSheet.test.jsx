import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MathWorkSheet from './MathWorkSheet';

describe('MathWorkSheet Component', () => {
  test('renders the component correctly', () => {
    render(<MathWorkSheet />);

    // Check if the title is rendered
    expect(screen.getByText('Rounding Off to Nearest 10')).toBeInTheDocument();

    // Check if the name input is rendered
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();

    // Check if the submit button is rendered
    expect(screen.getByText('Submit')).toBeInTheDocument();

    // Check if the reset button is rendered
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  test('handles form submission and displays the result', () => {
    render(<MathWorkSheet />);

    // Fill in the name input
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    // Select answers for the questions
    const firstQuestionOption = screen.getByLabelText('b. 20');
    fireEvent.click(firstQuestionOption);

    // Submit the form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Check if the result is displayed
    expect(screen.getByText('Thank you, John Doe!')).toBeInTheDocument();
  });

  test('resets the form when reset button is clicked', () => {
    render(<MathWorkSheet />);

    // Fill in the name input
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    // Click the reset button
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);

    // Check if the name input is cleared
    expect(nameInput.value).toBe('');
  });

  test('scrolls to the result section on form submission', () => {
    render(<MathWorkSheet />);

    // Mock scrollIntoView
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    // Fill in the name input
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    // Select answers for the questions
    const firstQuestionOption = screen.getByLabelText('b. 20');
    fireEvent.click(firstQuestionOption);

    // Submit the form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Check if scrollIntoView was called
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});