import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    
                    {/* Project Description - Support both string and array */}
                    {Array.isArray(project.projectDesc) ? (
                      <ul className={isDark ? "dark-mode project-bullets" : "project-bullets"}>
                        {project.projectDesc.map((point, idx) => (
                          <li key={idx} className={isDark ? "dark-mode bullet-point" : "bullet-point"}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>
                    )}
                    
                    {/* Technologies Used */}
                    {project.technologies && (
                      <div className="project-technologies">
                        <span className={isDark ? "dark-mode tech-label" : "tech-label"}>
                          Technologies:
                        </span>
                        <div className="tech-tags">
                          {project.technologies.split(", ").map((tech, idx) => (
                            <span
                              key={idx}
                              className={
                                isDark
                                  ? "dark-mode tech-tag"
                                  : "tech-tag"
                              }
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Results/Impact */}
                    {project.results && (
                      <div className="project-results">
                        <span className={isDark ? "dark-mode results-label" : "results-label"}>
                          Key Results:
                        </span>
                        <p className={isDark ? "dark-mode results-text" : "results-text"}>
                          {project.results}
                        </p>
                      </div>
                    )}

                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <>
                              {link.url ? (
                                <span
                                  key={i}
                                  className={
                                    isDark
                                      ? "dark-mode project-tag project-link"
                                      : "project-tag project-link"
                                  }
                                  onClick={() => openUrlInNewTab(link.url)}
                                >
                                  {link.name}
                                </span>
                              ) : (
                                <span
                                  key={i}
                                  className={
                                    isDark
                                      ? "dark-mode project-tag project-link-disabled"
                                      : "project-tag project-link-disabled"
                                  }
                                >
                                  {link.name}
                                </span>
                              )}
                            </>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
