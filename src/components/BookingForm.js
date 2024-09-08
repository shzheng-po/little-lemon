import {useState} from "react";
// import { validateEmail } from "./utils";

const GuestErrorMessage = () => {
    return (
      <p className="FieldError">Number of guest should be between 1 to 10 people</p>
    );
}

const DateErrorMessage = () => {
    return (
        <p className="FieldError">Please enter a valid date (MM/DD/YYYY)</p>
    )
}

const TimeErrorMessage = () => {
    return (
        <p className="FieldError">Please select a time</p>
    )
}


function isValidDate(dateString) {
    // Regex to validate any date in DD/MM/YYYY format
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    // Check if the dateString matches the regex
    if (!regex.test(dateString)) {
        return false;
    } else {
        return true;
    }
  }


function BookingForm({availableTimes, handleSelectedTime, submitForm}) {
    const [date, setDate] = useState({
        value: "",
        isTouched: false,
    });
    const [guests, setGuests] = useState({
        value: "",
        isTouched: false,
    });
    const [occassion, setOccasion] = useState("occasion");
    const [bookingTime, setBookingTime] = useState({
        value: "",
        isTouched: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSelectedTime({ target: { value: bookingTime } });
        submitForm(e);
        clearForm();
    };

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        setBookingTime(selectedTime);
    };

    const clearForm = () => {
        setDate({value: "", isTouched: false});
        setGuests({value: "", isTouched: false});
        setOccasion("occasion");
        setBookingTime({value: "", isTouched: false})
    };

    const getIsFormValid = () => {
        if (Number(guests.value) < 1) {
            return false;
        } else if (Number(guests.value) > 10) {
            return false;
        } else if (isNaN(parseInt(guests.value))) {
            return false;
        }
        if (!isValidDate(date.value)) {
            return false;
        }
        if (bookingTime.value === "") {
            return false;
        }
        return true;
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h1>Booking</h1>
                <div className="Field">
                    <label>
                        Date <sup>*</sup>
                    </label>
                    <input
                        placeholder="Today"
                        value={date.value}
                        onChange={e => { setDate({...date, value: e.target.value}) }}
                        onBlur={() => {
                            setDate({...date, isTouched: true});
                        }}
                    />
                    {date.isTouched && !(isValidDate(date.value)) ? <DateErrorMessage /> : null}
                </div>
                <div className="Field">
                    <label>
                        Choose Time <sup>*</sup>
                    </label>
                    <select 
                    id="time"
                    value={bookingTime.value}
                    onChange={handleTimeChange}
                    onBlur={() => {
                        setBookingTime({...bookingTime, isTouched: true})
                    }}>
                        <option value="" disabled>Select time</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    { bookingTime.isTouched && bookingTime.value === "" ? <TimeErrorMessage />: null}
                </div>
                <div className="Field">
                    <label>
                        Number of Guests <sup>*</sup>
                    </label>
                    <input
                        placeholder="1-10"
                        value={guests.value}
                        onChange={e => {
                            setGuests({...guests, value: e.target.value});
                        }}
                        onBlur={() => {
                            setGuests({...guests, isTouched: true});
                        }}
                    />
                    { guests.isTouched && (parseInt(guests.value) < 1 || parseInt(guests.value) > 10 || isNaN(parseInt(guests.value))) ? (<GuestErrorMessage />) : null}
                </div>
                <div className="Field">
                    <label>
                        Occasion
                    </label>
                    <select
                        id="occasion"
                        value={occassion}
                        onChange={e => setOccasion(e.target.value)}>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <button type="submit" disabled={!getIsFormValid()}>
                    Make Your Reservation
                </button>
            </fieldset>
        </form>
    );
}

export default BookingForm;