import React from 'react'
import TextField from '@material-ui/core/TextField';
import "./Input.scss"

function Input({ label, ...rest }) {
  // console.log(`Input :`, label)
  return (
    <div className="input-wrapper">
      <TextField id="outlined-basic" label={label} variant="outlined" className="input" {...rest} />
    </div>
  )
}

export default Input
