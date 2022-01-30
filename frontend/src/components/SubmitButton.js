import React from 'react';
import Button from '@material-ui/core/Button'

class SubmitButton extends React.Component {
  render() {
    return(
      <div className="submitButton">

        <Button 
          size = "small"
          variant = "contained"
          color = "#e76666"
          disabled = {this.props.disabled}
          onClick = { () =>this.props.onClick()}
        >
          {this.props.text}
        </Button>
        
      </div>
    );
  }
}

export default SubmitButton;
