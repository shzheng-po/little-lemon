import {useState} from "react";
// import { validateEmail } from "./utils";



const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation is made");
    // clearForm();
};

// const clearForm = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword({ value: "", isTouched: "False" });
//     setRole("role");
// };

function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("occasion");

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
                        Choose Date <sup>*</sup>
                    </label>
                    <select value={time} onChange={e => setTime(e.target.value)}>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
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
                            if (value >= 0 && value <= 10) {
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
                        onChange={e => setOccassion(e.target.value)}>
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