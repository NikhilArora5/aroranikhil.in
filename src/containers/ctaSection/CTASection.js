import React, {useContext} from "react";
import "./CTASection.scss";
import Button from "../../components/button/Button";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {contactInfo} from "../../portfolio";

export default function CTASection() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode cta-section" : "cta-section"} id="cta">
        <div className="cta-content">
          <h2 className={isDark ? "dark-mode cta-title" : "cta-title"}>
            Ready to Start Your Project?
          </h2>
          <p className={isDark ? "dark-mode cta-subtitle" : "cta-subtitle"}>
            Let's discuss how I can help bring your vision to life. I'm available for new freelance opportunities and typically respond within 24 hours.
          </p>
          <div className="cta-buttons">
            <Button 
              text="Get Free Consultation" 
              href="#contact"
              className="cta-primary-button"
            />
            <Button 
              text="View My Work" 
              href="#projects"
              className="cta-secondary-button"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
