import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Typewriter} from "../../components/typewriter/Typewriter";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <Typewriter
                texts={[
                  "Freelance Full Stack Developer",
                  "Available for New Projects",
                  "Let's Build Something Great"
                ]}
                speed={80}
                delay={2000}
              />
             
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              
              {/* Trust Indicators */}
              <div className="trust-indicators">
                <div className="trust-item">
                  <span className="trust-number">8+</span>
                  <span className="trust-label">Projects Delivered</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">2.5+</span>
                  <span className="trust-label">Years Experience</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">100%</span>
                  <span className="trust-label">Client Satisfaction</span>
                </div>
              </div>

              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Get a Free Consultation" href="#contact" className="cta-primary" />
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    download="Nikhil Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="View Resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
