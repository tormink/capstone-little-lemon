import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './booking.css';

const BookingPage = () =>
(
    <>
        <Header />
        <main className="booking">
            <BookingForm />
        </main>
        <Footer />
    </>

);

export default BookingPage;