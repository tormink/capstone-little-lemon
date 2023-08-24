import { useState } from "react";
import FormField from "./FormField";
import { redirect } from "react-router-dom";

const BookingForm = () => {
    const timeOptions = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const occasionOptions = ['Birthday', 'Anniversary'];

    const [formData, setFormData] = useState({
        date: new Date().toDateString(),
        time: '17:00',
        guests: 1,
        occasion: 'Birthday',
    });

    const onChange = (name) => {
        return (e) => setFormData({
            [name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        redirect('/bookingsuccess');
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormField type="date" labelId="res-date" labelText="Choose date" value={formData.date} onChange={onChange('date')} />
            <FormField type='select' options={timeOptions} labelId="res-time" labelText="Choose time" value={formData.time} onChange={onChange('time')} />
            <FormField type="number" placeholder="1" min="1" max="10" labelId="guests" labelText="Number of guests" value={formData.guests} onChange={onChange('guests')} />
            <FormField type="select" labelId="occasion" labelText="Occasion" options={occasionOptions} value={formData.occasion} onChange={onChange('occasion')} />
            <input type="submit" value="Make your reservation" />
        </form>
    );
}

export default BookingForm;