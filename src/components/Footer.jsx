import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const setNavBorderToWhite = (e) => {
        const navButtons = Object.values(navBar.current.children);
        navButtons.forEach(e => e.style.border = "none");
        document.documentElement.scrollTop = "0";
    };

    const navigateToRoute = (route) => {
        navigate(route);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer>
            <div className="back-to">
                <h4>Back to:</h4>
                {/* <Link onClick={setNavBorderToWhite} to="/">Home</Link>
                <Link onClick={setNavBorderToWhite} to="/projects">Projects</Link>
                <Link onClick={setNavBorderToWhite} to="/info">Info</Link>
                <Link onClick={setNavBorderToWhite} to="/contact">Contact</Link> */}
                <a onClick={() => navigateToRoute('/')}>Home</a>
                <a onClick={() => navigateToRoute('/projects')}>Projects</a>
                <a onClick={() => navigateToRoute('/info')}>Info</a>
                <a onClick={() => navigateToRoute('/contact')}>Contact</a>
            </div>
            <div className="footer-contact">
                <h4>Contact:</h4>
                <a>Number: 0176 1234 5678</a>
                <a>E-Mail: lampekevin@outlook.com (real)</a>
                <a>Street: Developerstr. 100</a>
                <a>Postal Code: 54321 Munich</a>
                <a>Germany</a>
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
