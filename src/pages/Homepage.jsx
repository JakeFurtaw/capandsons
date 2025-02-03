import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import '../styles/Homepage.css';
import project1 from '../images/IMG_0894.jpeg';
import project2 from '../images/IMG_0910.jpeg';
import project4 from '../images/IMG_1117.jpeg';
import project3 from '../images/IMG_3903.jpeg';
import logo from '../images/Logo.jpg';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <img className="hero-image" src={logo} alt="Logo" />
            {/* <h1 className="hero-title">Cap & Sons Excavation Corp.</h1> */}
            <h3 className="hero-subtitle">Earth Shapers</h3>
            <p className="hero-subtitle">Get us on the phone today and lets talk about how we can transform your backyard into paradise.</p>
            <a href="#contact" className="cta-button">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="section-gray" id="services">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">Swimming Pool Excavation</h3>
              <p className="service-description">Professional excavation services for residential and commercial swimming pools.</p>
            </div>
            {/* <div className="service-card">
              <h3 className="service-title">Site Preparation</h3>
              <p className="service-description">Complete site preparation including grading and soil analysis.</p>
            </div> */}
            <div className="service-card">
              <h3 className="service-title">Snow Removal</h3>
              <p className="service-description">Residential and Commercial snow removal services.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Tennis, Volleyball, and Basketball Court</h3>
              <p className="service-description">Expert residential multi-sport court site excavation and site preparation services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section" id="portfolio">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Recent Projects</h2>
          <div className="portfolio-grid">
            <img src={project1} alt="Project 1" className="portfolio-image" />
            <img src={project2} alt="Project 2" className="portfolio-image" />
            <img src={project3} alt="Project 3" className="portfolio-image" />
            {/* <img src={project4} alt="Project 3" className="portfolio-image" /> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-gray" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <p>info@capandsons.com</p>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <p>123 Main Street, Anytown, USA</p>
                </div>
                <div className="social-icons">
                  <Facebook className="contact-icon cursor-pointer" />
                  <Instagram className="contact-icon cursor-pointer" />
                </div>
              </div>
              
              <form className="form">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="form-input"
                ></textarea>
                <button className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Cap & Sons Excavation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;