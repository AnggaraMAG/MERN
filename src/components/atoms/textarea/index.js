import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const TextArea = ({ width, height }) => {
  return (
    <TextareaAutosize style={{ width, height }} aria-label="minimum height" rowsMin={5} placeholder="content..." />
  )
}

export default TextArea
