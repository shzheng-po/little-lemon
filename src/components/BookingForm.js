import {useState} from "react";
// import { validateEmail } from "./utils";

function BookingForm({availableTimes, handleSelectedTime}) {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccasion] = useState("occasion");
    const [bookingTime, setBookingTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation is made");
        handleSelectedTime({ target: { value: bookingTime } });
        clearForm();
    };

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        setBookingTime(selectedTime);
    };

    const clearForm = () => {
        setDate("");
        setGuests("");
        setOccasion("occasion");
        setBookingTime("")
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
                        value={date}
                        onChange={e => { setDate(e.target.value) } }
                    />
                </div>
                <div className="Field">
                    <label>
                        Choose Time <sup>*</sup>
                    </label>
                    <select value={bookingTime} onChange={handleTimeChange}>
                        <option value="" disabled>Select time</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="Field">
                    <label>
                        Number of Guests
                    </label>
                    <input
                        placeholder="1-10"
                        value={guests}
                        onChange={e => {
                            const value = parseInt(e.target.value);
                            if (value >= 1 && value <= 10) {
                                setGuests(value);
                            } else {
                                setGuests("")
                            }
                            }}
                        />
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
                <button type="submit">
                    Make Your Reservation
                </button>
            </fieldset>
        </form>
    );
}

export default BookingForm;