import React from 'react';
import PropTypes from 'prop-types';

class TimesIcon extends React.Component {
  static propTypes = {
    color: PropTypes.string,
  }
  static defaultProps = {
    color: '#333',
  }
  render() {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 11' width='15' height='15'>
          <line fill='none' stroke={this.props.color} strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' x1='1' y1='1' x2='10' y2='10'/>
          <line fill='none' stroke={this.props.color}  strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' x1='1' y1='10' x2='10' y2='1'/>
      </svg>
    );
  }
}

export default TimesIcon;