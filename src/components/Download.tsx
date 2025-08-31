import React from 'react';
import { FaTableTennis, FaTrophy, FaStar, FaUsers, FaHeart, FaRegClock } from 'react-icons/fa';
import { GiTennisBall, GiTennisRacket } from 'react-icons/gi';
import { IoMdTennisball } from 'react-icons/io';
import mockupPhone from "../assets/images/Mockup.png";
import AppleIcon from "../assets/icons/apple-white.png";
import GoogleplayIcon from "../assets/icons/googleplay-icon.svg";
import "../styles/Download.css";

export function Download() {
  return (
    <section id="download-section" className="download-section">
      <div className="background-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
      </div>
      
      <div className="download-container">
        <div className="content-wrapper">
          {/* Text Content */}
          <div className="text-content">
            <h2 className="title">Elevate Your <span className="text-accent">Padel</span> Game</h2>
            <p className="description">
              Join thousands of padel enthusiasts who are improving their skills, 
              finding partners, and tracking matches with our powerful app.
            </p>
            
            <div className="stats-container">
              <div className="stat">
                <div className="stat-icon">
                  <FaStar />
                </div>
                <span className="stat-number">4.9</span>
                <span className="stat-label">App Rating</span>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <span className="stat-number">50K+</span>
                <span className="stat-label">Players</span>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <GiTennisRacket />
                </div>
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
            
            <div className="download-buttons">
              <a
                href="https://play.google.com/store/apps/details?id=com.kensoftware.playsonic"
                className="store-button google-play"
              >
                <div className="button-icon">
                  <img src={GoogleplayIcon} alt="Google Play" />
                </div>
                <div className="button-text">
                  <span className="get-it">Get it on</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>

              <a
                href="https://apps.apple.com/ca/app/playsonic/id6677030736"
                className="store-button app-store"
              >
                <div className="button-icon">
                  <img src={AppleIcon} alt="App Store" />
                </div>
                <div className="button-text">
                  <span className="get-it">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="phone-content">
            <div className="phone-wrapper">
              <img src={mockupPhone} alt="App Preview" className="phone-image" />
              <div className="phone-highlight"></div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-icon icon-1">
                <GiTennisRacket />
              </div>
              <div className="floating-icon icon-2">
                <GiTennisBall />
              </div>
              <div className="floating-icon icon-3">
                <FaTrophy />
              </div>
              <div className="floating-icon icon-4">
                <IoMdTennisball />
              </div>
              <div className="floating-icon icon-5">
                <FaTableTennis />
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="feature-icons">
          <div className="feature-item">
            <div className="feature-icon">
              <GiTennisRacket />
            </div>
            <span>Find Partners</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaRegClock />
            </div>
            <span>Track Matches</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaTrophy />
            </div>
            <span>Compete</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <FaHeart />
            </div>
            <span>Stay Healthy</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}