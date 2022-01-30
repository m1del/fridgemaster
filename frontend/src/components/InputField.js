import React from 'react';
import { TextField } from '@material-ui/core'

class InputField extends React.Component {
  render() {
    return(
      <div className='inputField'>
        <TextField 
          size    = 'normal' 
          id      = 'filled-basic'
          variant = 'filled'

          input className='input'
                type = {this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={(e) => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}

export default InputField;
