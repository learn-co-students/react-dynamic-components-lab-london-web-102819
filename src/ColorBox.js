import React, { Component } from 'react';

export default class ColorBox extends Component {
  //Note: The style attribute 
  // inner {} __ accepts a JavaScript object with camelCased properties rather than a CSS string;
  // outer {} _ to render vanilla Javascript; 
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}> 
          {this.props.opacity >=0.2 ?  <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}
/* with short circuit conditional: (vs. ternary above)
  <div className="color-box" style={{opacity: this.props.opacity}}> 
          {this.props.opacity >=0.2 && <ColorBox opacity={this.props.opacity - 0.1} />}
  </div>
*/

/* another solution: 

In order to render based on a conditional, you can write vanilla JavaScript logic directly in render() block --> 

class ColorBox extends Component{
  render(){
    if (this.props.opacity >= 0.2){
      return (
        <div classname='color-box' style={{opacity: this.props.opacity}}>
        <ColorBox opacity={this.props.opacity - 0.1} /> // 👈 rendering ColorBox within ColorBox
        </div>
      )
    } else {
      return null;
    }
  }
} */