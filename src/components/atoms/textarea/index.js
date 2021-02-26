import React from 'react'
import TextField from '@material-ui/core/TextField';



const TextArea = ({ width, rows, ...rest }) => {
  return (
    <TextField rows={rows} multiline={true} style={{ width }} id="outlined-basic" label="Content" variant="outlined" {...rest} />
  )
}

export default TextArea
