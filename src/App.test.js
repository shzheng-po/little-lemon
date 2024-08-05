import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./components/BookingForm"
import '@testing-library/jest-dom'
import {initializeTimes, updateTimes} from "./components/BookingPage"


describe("Booking Forms", () => {
  test("Booking form is generated", () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const handleChange = jest.fn();

    render(<BookingForm availableTimes={availableTimes} handleSelectedTime={handleChange}/>)
    const headingElement = screen.getByText("Booking");
    expect(headingElement).toBeInTheDocument();
  });

  test("Testing InitializeTime return the expected value", () => {
    const availableTimes = {availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
    const result = initializeTimes(availableTimes);
    expect(result).toEqual(availableTimes);
  });

  test("updateTimes return the expected value", () => {
    const availableTimes = {availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
    const result = updateTimes(availableTimes);
    expect(result).toEqual(availableTimes);
  });
});