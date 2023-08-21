import FormField from "./FormField";

const BookingForm = () => {
    const timeOptions = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const occasionOptions = ['Birthday', 'Anniversary'];
    return (
        <form>
            <FormField type="date" labelId="res-date" labelText="Choose date"/>
            <FormField type='select' options={timeOptions} labelId="res-time" labelText="Choose time"/>
            <FormField type="number" placeholder="1" min="1" max="10" labelId="guests" labelText="Number of guests"/>
            <FormField type="select" labelId="occasion" labelText="Occasion" options={occasionOptions}/>
            <input type="submit" value="Make your reservation" />
        </form>
    );
}

export default BookingForm;