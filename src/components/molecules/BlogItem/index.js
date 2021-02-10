import React from 'react'
import { RegisterBG1 } from '../../../assets'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./blogitem.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const BlogItem = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <Card className="blog-item" >
      <div {...rest}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}> R</Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Alexander Juned"
          subheader={"September ,13 2021"}
        />
        <CardMedia
          className="blog-image"
          image={RegisterBG1}
          title="Paella dish"
        />
        <CardContent className="blog-content">
          <Typography variant="body2" color="textSecondary" component="p" >
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    // <div className="blog-item" {...rest}>
    //   <img className="blog-image" src={RegisterBG1} alt="post" />
    //   <div className="content-detail-wrapper">
    //     <p className="blog-title">Title Blog</p>
    //     <p className="blog-autor-date">Author - Date post</p>
    //     <p className="blog-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
    //   </div>
    // </div>
  )
}

export default BlogItem
