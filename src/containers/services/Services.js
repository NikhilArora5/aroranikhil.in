import React, {useContext} from "react";
import "./Services.scss";
import {servicesSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Services() {
  const {isDark} = useContext(StyleContext);
  
  if (!servicesSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="services">
        <div className="services-main-div">
          <div className="services-header">
            <h1 className={isDark ? "dark-mode services-heading" : "services-heading"}>
              {servicesSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle services-text-subtitle"
                  : "subTitle services-text-subtitle"
              }
            >
              {servicesSection.subtitle}
            </p>
          </div>

          <div className="services-grid">
            {servicesSection.services.map((service, i) => {
              return (
                <Fade key={i} bottom duration={1000} delay={i * 100}>
                  <div
                    className={
                      isDark
                        ? "dark-mode service-card service-card-dark"
                        : "service-card service-card-light"
                    }
                  >
                    <div className="service-icon">
                      <span className="service-icon-text">
                        {service.title.charAt(0)}
                      </span>
                    </div>
                    <h3
                      className={
                        isDark ? "dark-mode service-title" : "service-title"
                      }
                    >
                      {service.title}
                    </h3>
                    <p
                      className={
                        isDark
                          ? "dark-mode service-description"
                          : "service-description"
                      }
                    >
                      {service.description}
                    </p>
                  </div>
                </Fade>
              );
            })}
          </div>

          {/* Ownership & Commitment Section */}
          {servicesSection.ownershipCommitments && (
            <div className="ownership-section">
              <h2 className={isDark ? "dark-mode ownership-title" : "ownership-title"}>
                My Commitment to Your Success
              </h2>
              <p className={isDark ? "dark-mode ownership-subtitle" : "ownership-subtitle"}>
                Beyond technical expertise, here's what you can expect when working with me:
              </p>
              <div className="ownership-grid">
                {servicesSection.ownershipCommitments.map((commitment, i) => {
                  return (
                    <Fade key={i} bottom duration={1000} delay={i * 50}>
                      <div
                        className={
                          isDark
                            ? "dark-mode ownership-card ownership-card-dark"
                            : "ownership-card ownership-card-light"
                        }
                      >
                        <div className="ownership-icon">✓</div>
                        <p
                          className={
                            isDark
                              ? "dark-mode ownership-text"
                              : "ownership-text"
                          }
                        >
                          {commitment}
                        </p>
                      </div>
                    </Fade>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
