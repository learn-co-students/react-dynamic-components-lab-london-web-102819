import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    const opacityValue = this.props.opacity;
    if (opacityValue >= 0.2) {
      return (
        <div className="color-box" style={{ opacity: opacityValue }}>
          <ColorBox opacity={opacityValue - 0.1} />
        </div>
      );
    } else {
      return null;
    }
  }
}

//Note: The style attribute accepts
//a JavaScript object with camelCased
//properties rather than a CSS string
