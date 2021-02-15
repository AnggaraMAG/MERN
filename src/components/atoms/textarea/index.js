import React from 'react'
import TextField from '@material-ui/core/TextField';



const TextArea = ({ width, rows }) => {
  return (
    <TextField rows={rows} multiline={true} style={{ width }} id="outlined-basic" label="Content" variant="outlined" />
  )
}

export default TextArea
