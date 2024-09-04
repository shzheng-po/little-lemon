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