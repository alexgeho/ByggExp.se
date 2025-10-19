import React from "react";
import { Row, Col } from "react-bootstrap";
import { TitleBadge } from "../../widgets/TitleBadge/TitleBadge";
import "./About.css";

import heroImg from "../../assets/bg1.jpg";
import valuesImg from "../../assets/values.jpg";

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="container-custom">
            <TitleBadge text={'About us'}/>
            <h1 className="hero-title">About ByggHub</h1>
            <div className="hero-image-wrapper">
              <img src={heroImg} alt="Construction worker on site" />
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container-custom">
          <div className="badge-section small">Our background</div>
          <h2 className="section-title">Over 22 years in construction and project management</h2>
          <p className="section-subtitle">
            We know the industry from the inside. ByggHub is not just another IT product — it’s a working tool built on real-life experience, designed to make everyday life on the construction site easier.
          </p>

          <div className="team-row">
            <div className="team-card">
              <img src={'/image.png'} alt="Alex Gerhard" className="team-photo" />
              <div className="team-info">
                <h5>Alex Gerhard</h5>
                <div className="team-role">Cofounder — 10+ years experience in construction</div>
              </div>
            </div>
            <div className="team-card">
              <img src={'/image.png'} alt="Jurgen Klinçman" className="team-photo" />
              <div className="team-info">
                <h5>Jurgen Klinçman</h5>
                <div className="team-role">Cofounder — 22+ years experience in construction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container-custom">
          <h3 className="section-title-white text-center">What ByggHub Does</h3>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">1</div>
              <h5>Saves time and money</h5>
              <p>on timesheets and paperwork</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">2</div>
              <h5>Simplifies communication</h5>
              <p>between office staff, site managers, and crews</p>
            </div>
            <div className="feature-item feature-item-bottom">
              <div className="feature-number">3</div>
              <h5>Brings clarity and transparency</h5>
              <p>while you juggle WhatsApp, email, and paper</p>
            </div>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="container-custom">
          <div className="badge-section small">Our values</div>
          <h3 className="section-title">The Principles We Build On</h3>

          <Row className="align-items-center g-4 mt-4 principles-box">
            <Col md={6}>
              <div className="principles-image">
                <img src={valuesImg} alt="Team meeting" />
              </div>
            </Col>
            <Col md={6} className="principles-list-shell">
              <ul className="principles-list">
                <li>
                  <h6>Our Approach</h6>
                  <p>
                    We remain active in construction while developing digital solutions that truly matter. Our principles are simplicity, honesty, and focus on real challenges faced by construction companies.
                  </p>
                </li>
                <li>
                  <h6>Collaboration</h6>
                  <p>
                    We are always open to dialogue and new ideas, and ready to adapt ByggHub to the specific needs of your company.
                  </p>
                </li>
                <li>
                  <h6>Our Mission</h6>
                  <p>
                    To ensure that digital technologies genuinely help builders work faster, simpler, and with greater comfort.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container-custom">
          <div className="badge-section small">Our clients</div>
          <h3 className="section-title">We have Large Global Customer Feedback</h3>

          <Row className="g-4 mt-4 testimonial-shell">
            {[1, 2].map((i) => (
              <Col md={6} key={i} className="testimonial-box">
                <div className="testimonial-card">
                  <div className="testimonial-header d-flex align-items-center gap-3 mb-3">
                    <div className="avatar-placeholder">D</div>
                    <div>
                      <div className="fw-semibold">Dennis J. Lester</div>
                      <div className="text-muted small">Agry AB CEO</div>
                    </div>
                  </div>
                  <p className="mb-2">
                    The software has made scheduling and reporting much easier for our team. We save hours each week on paperwork, and communication with site crews is finally smooth and transparent.
                  </p>
                  <div className="text-muted small">4.75★ on Trustp</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}