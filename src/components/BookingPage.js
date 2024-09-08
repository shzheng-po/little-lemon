import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import React, { useReducer } from "react";
/* global fetchAPI, submitAPI */

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

const submitAPI = function(formData) {
  return true;
};

const reducer = (state, action) => {
  if (action.type === 'SET_BOOKING_TIME') {
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
  const navigate = useNavigate();

  const [bookingState, dispatch] = useReducer(reducer, initialState);

  function handleSelectedTime(e){
    dispatch({
      type: 'SET_BOOKING_TIME',
      bookingTime: e.target.value,
    });
  }

  function SubmitForm(formData) {

    if (submitAPI(formData)) {
        navigate("/confirmation");
      };
  }

  return (
      <div className="booking-page">
          <BookingForm
            availableTimes={bookingState.availableTimes}
            handleSelectedTime={handleSelectedTime}
            submitForm={SubmitForm}
            />
      </div>
  )
}

export default BookingPage;

export {initializeTimes, updateTimes };