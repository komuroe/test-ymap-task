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
      <svg className='app-logo' version="1.1" xmlns='http://www.w3.org/2000/svg' x="0px" y="0px"
        viewBox="0 0 100 100" width='60' height='60' enableBackground="new 0 0 100 100" >
      <g>
        <path fill={fillColor} stroke={strokeColor} strokeWidth="3" strokeMiterlimit="10" d="M30.3,25.9c-9,0-16.4,7.3-16.4,16.4
          s13.9,27.4,16.4,27.4s16.4-18.1,16.4-27.1S39.3,25.9,30.3,25.9z M30.3,46.9c-2.9,0-5.2-2.4-5.2-5.2c0-2.9,2.4-5.2,5.2-5.2
          s5.2,2.4,5.2,5.2C35.5,44.5,33.1,46.9,30.3,46.9z"/>
        <path fill={fillColor} stroke={strokeColor} strokeWidth="3" strokeMiterlimit="10" d="M77,25.2c-5,0-9.1,4.1-9.1,9.1s7.7,15.1,9.1,15.1
          c1.4,0,9.1-10,9.1-15.1S82,25.2,77,25.2z M77,36.9c-1.5,0-2.9-1.4-2.9-2.9c0-1.5,1.4-2.9,2.9-2.9s2.9,1.4,2.9,2.9
          C79.9,35.5,78.6,36.9,77,36.9z"/>
        <path fill={fillColor} stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
          M77,54.5c-1.3-0.2-20.9-1.5-20.2,2.7c0.7,4.2,21.7,6.9,22,13.4c0.3,6.5-48.5,4.7-48.5,4.7"/>
      </g>
      </svg>
    )
  }
}

export default LogoIcon;
