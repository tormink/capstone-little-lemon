import './footer.css'
import logo from './../assets/Logo .svg'

const Footer = () => (
    <footer>
        <div className="logo-footer">
            <img src={logo} alt="Logo" />
        </div>
        <div>
            <h4>Doormat Navigation</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </div>
        <div>
            <h4>Contact</h4>
            <ul>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </div>
        <div>
            <h4>Social Media Links</h4>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>ETC</li>
            </ul>
        </div>
    </footer>
)

export default Footer;