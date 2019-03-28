import React  from 'react';
import {TextField} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const resistanceTextFieldStyles = {
  input: {
    color: 'white',
  },
  label: {
    color: 'white'
  }
};

const ResistanceTextField = ({children, classes, ...other}) => (
  <TextField
    style={{borderBottom: '2px solid white'}}
    fullWidth
    classes={{
      label: classes.label
    }}
    InputProps={{
      classes: {
        input: classes.input,
        label: classes.label
      },
      className: classes.input,
      disableUnderline: true
    }}
    {...other}
  >
    {children}
  </TextField>
);

export default withStyles(resistanceTextFieldStyles)(ResistanceTextField);
