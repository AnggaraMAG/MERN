import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  TextArea: {
    height: 200
  },
}));

const TextArea = ({ width, rows }) => {
  return (
    <TextField rows={rows} multiline={true} style={{ width }} id="outlined-basic" label="Content" variant="outlined" />
  )
}

export default TextArea
