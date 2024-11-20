import React from 'react';
import './cssfile/Footer.css';
export default function Footer(props) {
  return (
    <footer className={`bg-${props}`}>
        <div className="container">
            <div className="row py-4">
                <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-md-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/" className="nav-link">Home</a></li>
                        <li><a href="/" className="nav-link">About</a></li>
                        <li><a href="/" className="nav-link">Services</a></li>
                        <li><a href="/" className="nav-link">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Follow Us</h5>
                    <a href="/" className="nav-link me-3"><i className="fab fa-facebook-f">Facebook</i></a>
                    <a href="/" className="nav-link me-3"><i className="fab fa-twitter">Twitter</i></a>
                    <a href="/" className="nav-link me-3"><i className="fab fa-instagram">Instagram</i></a>
                    <a href="/" className="nav-link me-3"><i className="fab fa-linkedin-in">Linkedin</i></a>
                </div>
            </div>
            <div className="text-center py-3">
                <small>&copy; 2023 Your Company. All Rights Reserved.</small>
            </div>
        </div>
    </footer>
  )

}
