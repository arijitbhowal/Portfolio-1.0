import React from "react";

const WorkModal = ({ project, onClose }) => {
  const modalStyle = {
    width: "400px",  // Set the width of the modal
    height: "300px", // Set the height of the modal
    position: "fixed", // Set the position to fixed
    top: "50%",       // Center vertically
    left: "50%",      // Center horizontally
    transform: "translate(-50%, -50%)", // Center both horizontally and vertically
  };

  const imageStyle = {
    maxWidth: "100%", // Set the maximum width of the image
    height: "auto",    // Maintain the aspect ratio
  };

  return (
    <div className="modal-container" style={modalStyle}>
      <div className="modal">
        <h2>{project.name}</h2>
        <img src={project.imgurl} alt={project.name} style={imageStyle} />
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          Link to the Project
        </a>
        <br></br>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default WorkModal;
