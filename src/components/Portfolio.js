import React, { useState } from "react";
import WorkModal from "./WorkModal";

const Portfolio = ({ resumeData }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {resumeData.portfolio &&
              resumeData.portfolio.map((item) => (
                <div
                  className="columns portfolio-item"
                  key={item.name}
                  onClick={() => handleProjectClick(item)}
                >
                  <div
                    className="item-wrap"
                    style={{ width: "250px", height: "150px" }}
                  >
                    {/* Adjust the width and height as needed */}
                    <img
                      src={item.imgurl}
                      className="item-img"
                      alt={item.name}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <WorkModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Portfolio;
