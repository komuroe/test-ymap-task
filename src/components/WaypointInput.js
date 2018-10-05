import React from 'react';
import PropTypes from 'prop-types';

class WaypointInput extends React.Component {
  static propTypes = {
    addWaypoint: PropTypes.func,
  };
  
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.setText = this.setText.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  setText(event) {
    this.setState({text: event.target.value});
  }
    
  handleKey = event => {
    if(event.key == 'Enter' && event.currentTarget.value !== ''){            
      this.props.addWaypoint(this.state.text);
      //Reset value
      this.state.text = '';
      //Return focus on input
      event.currentTarget.focus();
    }
  };
    
  render() {
    return(
      <input className={`waypoint-input app-font app-text app-text_weight_light`}
        name='name'
        type='text'
        placeholder='Введите название точки'
        value={this.state.text} 
        onKeyDown={this.handleKey}        
        onChange={this.setText}>
      </input>
    );
  }
}

export default WaypointInput;