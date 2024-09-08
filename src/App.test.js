import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./components/BookingForm"
import BookingPage from './components/BookingPage';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import {initializeTimes, updateTimes, handleSelectedTime} from "./components/BookingPage"


describe("Booking Forms", () => {
  test("Booking form is generated", () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const handleChange = jest.fn();

    render(<BookingForm availableTimes={availableTimes} handleSelectedTime={handleChange}/>)
    const headingElement = screen.getByText("Booking");
    expect(headingElement).toBeInTheDocument();
  });

  test("Testing InitializeTime return the expected value", () => {
    const result = initializeTimes();
    expect(result.length).not.toBe(0);
  });

  test("updateTimes return the expected value", () => {
    const availableTimes = initializeTimes().availableTimes;
    const selectedTime = availableTimes[3];
    const result = updateTimes(availableTimes, selectedTime);
    expect(result.length).toBe(availableTimes.length - 1);
  });
});

describe("Booking Form", () => {
  test('form should be submitted after the correct input', () => {
    const mockSubmitForm = jest.fn();

    render(<BookingForm availableTimes={['17:00', '17:30']} handleSelectedTime={jest.fn()} submitForm={mockSubmitForm} />);

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('Today'), { target: { value: '11/10/2023' } });
    fireEvent.change(screen.getByPlaceholderText('1-10'), { target: { value: '2' } });
    fireEvent.change(document.querySelector('#time'), { target: { value: '17:00' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

    // Check if navigate was called with the correct route
    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });

  test('form should be not submitted for incorrect date', () => {
    const mockSubmitForm = jest.fn();

    const incorrectDate = '11.2.3024'
    render(<BookingForm availableTimes={['17:00', '17:30']} handleSelectedTime={jest.fn()} submitForm={mockSubmitForm} />);

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('Today'), { target: { value: incorrectDate } });
    fireEvent.change(screen.getByPlaceholderText('1-10'), { target: { value: '2' } });
    fireEvent.change(document.querySelector('#time'), { target: { value: '17:00' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

    // Check if navigate was called with the correct route
    expect(mockSubmitForm).toHaveBeenCalledTimes(0);
  });

  test('form should be not submitted for more than 10 people', () => {
    const mockSubmitForm = jest.fn();

    const tooManyGuest = '12'
    render(<BookingForm availableTimes={['17:00', '17:30']} handleSelectedTime={jest.fn()} submitForm={mockSubmitForm} />);

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('Today'), { target: { value: '11/23/2024' } });
    fireEvent.change(screen.getByPlaceholderText('1-10'), { target: { value: tooManyGuest } });
    fireEvent.change(document.querySelector('#time'), { target: { value: '17:00' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

    // Check if navigate was called with the correct route
    expect(mockSubmitForm).toHaveBeenCalledTimes(0);
  });
});

