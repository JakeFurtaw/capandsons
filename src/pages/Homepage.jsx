import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Shield, Award, WavesLadder, Trash2, Snowflake, Volleyball } from 'lucide-react';
import '../styles/Homepage.css';
import project1 from '../images/IMG_0894.jpeg';
import project2 from '../images/IMG_0910.jpeg';
import project4 from '../images/IMG_1117.jpeg';
import project3 from '../images/IMG_3903.jpeg';
import demoproject1 from '../images/IMG_0104.jpg';
import demoproject2 from '../images/IMG_0205.jpg';
import logo from '../images/logo.webp';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav Section */}
      <nav className="sticky-nav">
        <div className="nav-content">
          <a href="#services">Services</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <img className="hero-image" src={logo} alt="Logo" />
            {/* <h1 className="hero-title">Cap & Sons Excavation Corp.</h1> */}
            {/* <h3 className="hero-subtitle">Earth Shapers</h3> */}
            <p className="hero-subtitle">Get us on the phone today and let's discuss how we can transform your backyard into paradise.</p>
            <a href="#contact" className="cta-button">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="section-gray" id="services">
      <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <WavesLadder className="service-icon" />
            <h3 className="service-title">Swimming Pool Excavation</h3>
            <p className="service-description">Expert excavation for in-ground pools of all sizes. We handle excavation, precise grading, and proper site drainage to ensure your pool's long-term stability.</p>
          </div>
          
          <div className="service-card">
            <Trash2 className="service-icon" />
            <h3 className="service-title">Demolition</h3>
            <p className="service-description">Professional pool removal and site restoration services. We handle complete demolition, proper fill-in, and prepare your yard for its next purpose - whether that's landscaping or new construction.</p>
          </div>
          
          <div className="service-card">
            <Snowflake className="service-icon" />
            <h3 className="service-title">Snow Removal</h3>
            <p className="service-description">24/7 winter weather response for homes and businesses. Our fleet handles everything from light snowfall to major storms, including plowing, salting, and ice management.</p>
          </div>
          
          <div className="service-card">
            <Volleyball className="service-icon" />
            <h3 className="service-title">Tennis, Volleyball, and Basketball Court</h3>
            <p className="service-description">Complete court construction preparation including surveying, precise leveling, and proper grading. We ensure perfect playing surfaces for any sport court installation.</p>
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
            <img src={project4} alt="Project 4" className="portfolio-image" />
            <img src={demoproject1} alt="Rip Out 1" className="portfolio-image" />
            <img src={demoproject2} alt="Rip Out 2" className="portfolio-image" />
        
            {/* <img src={project4} alt="Project 3" className="portfolio-image" /> */}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-gray">
        <div className="container">
          <h2 className="section-title">Why Choose Cap & Sons</h2>
          <div className="features-grid">
            <div className="feature-item">
              <Clock className="feature-icon" />
              <h3>20+ Years Experience</h3>
              <p>Decades of expertise in excavation and site work</p>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" />
              <h3>Licensed & Insured</h3>
              <p>Fully licensed and insured for your peace of mind</p>
            </div>
            <div className="feature-item">
              <Award className="feature-icon" />
              <h3>Quality Guaranteed</h3>
              <p>Commitment to excellence in every project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <p>(443) 878-7464</p>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <p>info@capandsons.com</p>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <p>Eldersburg, MD</p>
                </div>
                {/* <div className="social-icons">
                  <Facebook className="contact-icon cursor-pointer" />
                  <Instagram className="contact-icon cursor-pointer" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Cap & Sons Excavation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;