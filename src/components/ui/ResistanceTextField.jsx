import React  from 'react';
import {TextField} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const resistanceTextFieldStyles = {
  input: {
    color: '#4c5052',
  },
  label: {
    color: '#4c5052'
  },
  underline: {
    '&:hover': {
      '&:before': {
        borderBottom: ['#4c5052', '!important'],
      }
    },
    '&:before': {
      borderBottom: '#4c5052',
    }
  }
};

const ResistanceTextField = ({children, classes, ...other}) => (
  <TextField
    classes={{
      label: classes.label
    }}
    InputProps={{
      classes: {
        input: classes.input,
        label: classes.label,
        underline: classes.underline
      },
      className: classes.input
    }}
    {...other}
  >
    {children}
  </TextField>
);

export default withStyles(resistanceTextFieldStyles)(ResistanceTextField);
