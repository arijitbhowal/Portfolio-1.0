import React, { Component } from "react";

export default class LogoWall extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="logo-wall">
        <div className="text-container">
          <div className="row">
            <div className="twelve columns">
              <h1 style={{ paddingTop: "20px" }}>
                <span>Technology Stack</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <div
                className="logo-wall-container"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {resumeData.logos &&
                  resumeData.logos.map((logo, index) => (
                    <div
                      className="logo-item"
                      key={index}
                      style={{ margin: "10px", width: "calc(10% - 20px)" }}
                    >
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        style={{ height: "auto", width: "100px" }} // Adjust the size as needed
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
