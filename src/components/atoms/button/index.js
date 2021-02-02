import React from 'react'
import Button from '@material-ui/core/Button';
import "./button.scss"

function index({ color, label, ...rest }) {
  return (
    <div className="button-wrapper">
      <Button className="button" variant="contained" color={color} {...rest}>
        {label}
      </Button>
    </div>
  )
}

export default index
