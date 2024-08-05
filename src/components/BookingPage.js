import BookingForm from "./BookingForm";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === 'SET_BOOKING_TIME') {
    return {...state,
      availableTimes: updateTimes(state.availableTimes, action.bookingTime),
      // bookingTime: action.bookingTime
    };
  };
  throw Error('Unknown Action.')
};

const initializeTimes = (initialState) => {
  return initialState;
}

const updateTimes = (availableTimes) => {
  // const newAvailableTimes = availableTimes.filter(time => time !== selectedTime);
  return availableTimes;
}

function BookingPage() {

  const initialState = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    // bookingTime:"",
  };

  const [bookingState, dispatch] = useReducer(reducer, initialState, initializeTimes);

  function handleSelectedTime(e){
    dispatch({
      type: 'SET_BOOKING_TIME',
      // bookingTime: e.target.value,
    });
  }

  return (
      <div className="booking-page">
          <BookingForm
            availableTimes={bookingState.availableTimes}
            // bookingTime={bookingState.bookingTime}
            handleSelectedTime={handleSelectedTime}
            />
      </div>
  )
}

export default BookingPage;

export {initializeTimes, updateTimes };