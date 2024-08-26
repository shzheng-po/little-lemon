import BookingForm from "./BookingForm";
import React, { useReducer } from "react";
/* global fetchAPI */


const reducer = (state, action) => {
  if (action.type === 'SET_BOOKING_TIME') {
    console.log(action.bookingTime);
    return {...state,
      availableTimes: updateTimes(state.availableTimes, action.bookingTime),
    };
  };
  throw Error('Unknown Action.')
};


const initializeTimes = () => {
  const date = new Date();
  const availableTimes = fetchAPI(date);
  return {availableTimes: availableTimes};
}

const updateTimes = (availableTimes, selectedTime) => {
  const newAvailableTimes = availableTimes.filter(time => time !== selectedTime);
  return newAvailableTimes;
}

function BookingPage() {

  const initialState = initializeTimes();

  const [bookingState, dispatch] = useReducer(reducer, initialState);

  function handleSelectedTime(e){
    dispatch({
      type: 'SET_BOOKING_TIME',
      bookingTime: e.target.value,
    });
  }

  return (
      <div className="booking-page">
          <BookingForm
            availableTimes={bookingState.availableTimes}
            handleSelectedTime={handleSelectedTime}
            />
      </div>
  )
}

export default BookingPage;

export {initializeTimes, updateTimes };