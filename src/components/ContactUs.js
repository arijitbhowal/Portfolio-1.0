import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h2 className="lead">
              Feel free to contact me for any work or suggestions below
            </h2>
          </div>
        </div>
        <div className="row">
          <aside className="eight columns footer-widgets">
            <div className="widget">
              <h4>Contact Information</h4>
              <p>
                Email: {resumeData.email} <br />
                Phone: {resumeData.phone}
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
