import React from 'react';
import PropTypes from 'prop-types';

class LogoIcon extends React.Component {
  static propTypes = {
    strokeColor: PropTypes.string,
    fillColor: PropTypes.string,
  }
  static defaultProps = {
    strokeColor: '#333',
    fillColor: '#333',
  }
  render() {
    let strokeColor, fillColor;
    if (this.props.solidColor) {
      strokeColor = fillColor = this.props.solidColor;
    } else {
      strokeColor = this.props.strokeColor;
      fillColor = this.props.fillColor;
    }
    return(
      <svg className='app-logo' viewBox='-15 -15 100 100' width='60' height='60' xmlns='http://www.w3.org/2000/svg' >
      <path fill={fillColor} stroke={strokeColor} strokeMiterlimit='10' d='M21,25c0.1,0.1,0.1,0.2,0.1,0.3v26.3c0,0.3-0.2,0.6-0.5,0.7L3.3,60.1
      c-0.5,0.2-1.1-0.2-1.1-0.7v-32c0-0.3,0.2-0.6,0.5-0.7l15.2-6.9c0.4-0.2,0.9,0,1,0.4C19.5,21.8,20.2,23.4,21,25z'/>
      <path fill={fillColor} stroke={strokeColor} strokeMiterlimit='10' d='M68.6,52.3l-17.3,7.8c-0.5,0.2-1.1-0.1-1.1-0.7v-32
      c0-0.3,0.2-0.6,0.5-0.7L68,19c0.5-0.2,1.1,0.1,1.1,0.7v32C69.1,51.9,68.9,52.2,68.6,52.3z'/>
      <path fill={fillColor} stroke={strokeColor} strokeMiterlimit='10' d='M45.4,33.2c0.4-0.6,1.4-0.3,1.4,0.4v25.9c0,0.5-0.5,0.9-1,0.7
      l-21.4-7.9c-0.3-0.1-0.5-0.4-0.5-0.7V32.4c0-0.7,1-1,1.4-0.4c4.3,6.5,9.1,11.8,10.5,11.8C37,43.8,41.3,39.1,45.4,33.2z'/>
      <path fill={fillColor} stroke={strokeColor} strokeMiterlimit='10' d='M35.7,1.3c-7.6,0-13.8,6.2-13.8,13.8S33.6,38,35.7,38
      s13.8-15.2,13.8-22.8S43.3,1.3,35.7,1.3z M35.7,18.9c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4s4.4,2,4.4,4.4S38.1,18.9,35.7,18.9z'/>
      </svg>
    )
  }
}

export default LogoIcon;
