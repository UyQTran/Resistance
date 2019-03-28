import React  from 'react';
import {Button} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const resistanceButtonStyles = {
  root: {
    background: '#4c5052',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  label: {
    fontWeight: 'bold'
  },
};

const ResistanceButton = ({children, classes}) => (
  <Button
    fullWidth
    classes={{
      root: classes.root,
      label: classes.label
    }}
  >
    {children}
  </Button>
);

export default withStyles(resistanceButtonStyles)(ResistanceButton);
