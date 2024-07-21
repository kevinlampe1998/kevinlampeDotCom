const Footer = () => {
    return (
        <footer>
            <div className="back-to">
                <h4>Back to:</h4>
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Info</a>
                <a href="#">Contact</a>
            </div>
            <div className="footer-contact">
                <h4>Contact:</h4>
                <a href="">Number: 0176 1234 5678</a>
                <a href="">E-Mail: lampekevin@outlook.com</a>
                <a href="">Street: Developerstr. 100</a>
                <a href="">Postal Code: 54321 Munich</a>
                <a href="">Germany</a>
            </div>
            <div className="service-time">
                <h4>Service Time:</h4>
                <p>Mo - Fr</p>
                <p>08:00 AM - 04:00 PM</p>
            </div>
        </footer>
    );
}

export default Footer;
