import { Link } from '@tanstack/react-router';
import logo from '../../assets/logo.png';
import './Navbar.css'


/**
 * NavBar Component
 * 
 * Responsive navigation bar that transforms into a hamburger menu on mobile devices.
 * Features:
 * - Desktop: Horizontal navigation with right-aligned login
 * - Mobile: Hamburger menu with full-screen overlay
 * - Smooth animations for menu transitions
 */
function NavBar() {

    return (
        <header className="navbar-container">
            {/* Brand/Logo Section */}
            <Link to="/" className="navbar-hero">
                <img src={logo} alt="App Logo" className="navbar-logo" />
                SoundWeb
            </Link>

            <nav className="navbar-links">
                <Link to="/" className="navbar-link">
                    Home
                </Link>
                <Link to="/about" className="navbar-link">
                    About
                </Link>
            </nav>
        </header>
    )
}

export default NavBar;