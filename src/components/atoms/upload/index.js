import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { LoginBG } from '../../../assets';
import './upload.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  color: {
    color: 'white',
    backgroundColor: '#48D1CC'
  },
  imgUpload: {
    width: 300,
    height: 200,
    objectFit: 'cover',
    borderRadius: 5
  }
}));

const Upload = () => {
  const classes = useStyles();
  return (
    <div className="upload-wrapper" >
      <Paper elevation={3} className={classes.imgUpload}>
        <img className={classes.imgUpload} src={LoginBG} /><br alt={LoginBG} />
      </Paper>
      <div className="input-wrapper">
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <p>XXXXXXXXXXXX.png</p>
        <label htmlFor="contained-button-file">
          <Button className="button-upload" variant="contained" component="span">
            Upload Image
        </Button>
        </label>
      </div>
    </div>
  )
}

export default Upload
