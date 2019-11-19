import React, { Component } from "react";
import "./ZoomableImage.css";

class ZoomableImage extends Component {
  /*
  
          onMouseEnter={e => {
            this.zoomIn(e.clientX, e.clientY);
          }}
          onMouseMove={e => {
            this.zoomIn(e.clientX, e.clientY);
          }}
          onMouseLeave={this.zoomOut}

        {this.state.display === "none" ? (
          ""
        ) : (
          <ZoomableImage
            src={this.props.userImg}
            display={this.state.display}
          />
        )}
  */
  render() {
    return (
      <div className="zoomable-image" style={{ display: this.props.display }}>
        <img src={this.props.src} alt={this.props.src} />
      </div>
    );
  }
}

export default ZoomableImage;
