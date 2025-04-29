"use client";

import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeNav();
    }
  };

  return (
    <div className="main-container">
      {/* Header Section */}
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar">
            <div className="logo">
              <a href="#">
                <Image src="/images/logo.png" alt="Enlightenium Logo" width={140} height={60} />
              </a>
              <button className="toggle" onClick={toggleNav}>☰</button>
            </div>
            <ul className={`nav_links ${isNavOpen ? 'active' : ''}`}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('story'); }}>Our Story</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Team</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Banner Section */}
      <section id="home" className="banner_section">
        <div className="container-fluid">
          <div className="banner_content">
            <div className="row">
              <div className="col-md-6">
                <div className="banner_text">
                  <h1 className="banner_title">AI-Powered Learning with Enlightenium</h1>
                  <p className="banner_description">Transform your learning experience with our intelligent platform that adapts to your needs and helps you master any subject faster.</p>
                  <div className="btn_group">
                    <a href="#" className="primary_btn">Get Started</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner_image">
                  <Image src="/images/img-1.png" alt="Enlightenium Platform" width={600} height={500} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_image">
                <Image src="/images/img-8.png" alt="About Enlightenium" width={550} height={450} />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="section_title">About Enlightenium</h2>
              <p className="about_text">Enlightenium is an innovative AI-powered learning platform designed to help students and lifelong learners master complex topics through personalized, adaptive education. Our mission is to make high-quality education accessible to everyone.</p>
              <div className="btn_group">
                <a href="#" className="primary_btn" onClick={(e) => { e.preventDefault(); scrollToSection('story'); }}>Our Story</a>
                <a href="#" className="secondary_btn">Meet the Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="story_section">
        <div className="container">
          <h2 className="section_title">Our Story</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="story_content">
                <h3>How It All Began</h3>
                <p>Enlightenium was founded in 2025 by a team of students turned AI researchers who saw the potential for technology to transform learning. Frustrated by the one-size-fits-all approach of traditional education, we set out to create a platform that adapts to each learner's unique needs.</p>
                <h3>Our Mission</h3>
                <p>We believe that education should be personalized, engaging, and accessible to everyone, regardless of their background or location. Our AI-powered platform is designed to break down barriers to learning and help people achieve their full potential.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="story_image">
                <Image src="/images/img-story.png" alt="Our Story" width={550} height={450} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features_section">
        <div className="container">
          <h2 className="section_title">Key Features</h2>
          <div className="features_grid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="feature_card">
                  <div className="feature_icon icon_1" />
                  <h3>Personalized Learning</h3>
                  <p>Our AI creates customized learning paths based on your strengths, weaknesses, and preferred learning style.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_card">
                  <div className="feature_icon icon_2" />
                  <h3>Interactive Content</h3>
                  <p>Engage with dynamic lessons, quizzes, and simulations that make learning enjoyable and effective.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_card">
                  <div className="feature_icon icon_3" />
                  <h3>Progress Tracking</h3>
                  <p>Monitor your learning journey with detailed analytics and performance reports.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_card">
                  <div className="feature_icon icon_4" />
                  <h3>24/7 AI Tutor</h3>
                  <p>Get instant answers and explanations from our AI tutor anytime, anywhere.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_card">
                  <div className="feature_icon icon_5" />
                  <h3>Skill Assessment</h3>
                  <p>Comprehensive tests to evaluate your current knowledge and skill levels.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_card">
                  <div className="feature_icon icon_6" />
                  <h3>Collaborative Learning</h3>
                  <p>Connect with peers and experts for group study sessions and discussions.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_card">
                  <div className="feature_icon icon_7" />
                  <h3>Certification</h3>
                  <p>Earn verifiable certificates upon completing courses and mastering subjects.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="feature_card">
                  <div className="feature_icon icon_8" />
                  <h3>Mobile Learning</h3>
                  <p>Access all features on mobile devices for learning on the go.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials_section">
        <div className="container">
          <h2 className="section_title">Meet the team</h2>
          <div className="testimonials_grid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="testimonial_card">
                  <p className="testimonial_text">"Enlightenium helped me master calculus in half the time it would have taken with traditional methods. The personalized approach made all the difference!"</p>
                  <div className="testimonial_author">
                    <Image src="/images/img-16.png" alt="Student" width={80} height={80} />
                    <div>
                      <h4>Sarah K.</h4>
                      <p>University Student</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="testimonial_card">
                  <p className="testimonial_text">"As a busy professional, I needed an efficient way to learn new skills. Enlightenium's adaptive platform was exactly what I needed."</p>
                  <div className="testimonial_author">
                    <Image src="/images/img-17.png" alt="Professional" width={80} height={80} />
                    <div>
                      <h4>James M.</h4>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="testimonial_card">
                  <p className="testimonial_text">"The AI tutor is incredibly intuitive. It identified my weak areas and created targeted exercises that helped me improve quickly."</p>
                  <div className="testimonial_author">
                    <Image src="/images/img-18.png" alt="Teacher" width={80} height={80} />
                    <div>
                      <h4>Dr. Lisa T.</h4>
                      <p>High School Teacher</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="testimonial_card">
                  <p className="testimonial_text">"I've tried many learning platforms, but Enlightenium's AI-driven approach is truly revolutionary. My test scores improved by 40% in just 2 months!"</p>
                  <div className="testimonial_author">
                    <Image src="/images/img-19.png" alt="Student" width={80} height={80} />
                    <div>
                      <h4>Michael R.</h4>
                      <p>Medical Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_logo">
                <Image src="/images/logo.png" alt="Enlightenium Logo" width={120} height={60} />
                <p>Empowering learners through AI-driven education.</p>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('story'); }}>Our Story</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Team</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Get In Touch</h3>
              <p>info.jhub@jkuat.ac.ke</p>
              <p>067-5352711</p>
              <div className="social_links">
                <a href="https://www.facebook.com/JHUBAfrica/" target="_blank"><Image src="/images/fb-icon.png" alt="Facebook" width={24} height={24} /></a>
                <a href="https://x.com/JHUBAfrica" target="_blank"><Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} /></a>
                <a href="https://www.instagram.com/jhubafrica/" target="_blank"><Image src="/images/instagram-icon.png" alt="Instagram" width={24} height={24} /></a>
                <a href="https://www.linkedin.com/company/jhubafrica/" target="_blank"><Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} /></a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Enlightenium. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
