import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom'



import "./header.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    position: 'absolute',
    right: 0
  },
  appBarColor: {
    background: 'linear-gradient(to right, #00c6ff, #0072ff)'
  }
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarColor}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className="title-header" variant="h6" color="inherit" onClick={() => history.push('/')}>
            Newspaper
        </Typography>
          <div className={classes.title}>
            <Tooltip title="Logout" aria-label="logout">
              <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="exit" onClick={() => history.push('/register')}>
                <ExitToAppIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
