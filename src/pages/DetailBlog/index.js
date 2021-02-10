import React from 'react'
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import { RegisterBG } from '../../assets';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Gap } from '../../components';
import "./detailblog.scss"

const useStyles = makeStyles({
  media: {
    minHeight: 500,
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
});

const DetailBlog = () => {
  const classes = useStyles();
  return (
    <Paper className="detail-wrappers">
      <Gap height={10} />
      <CardMedia
        className={classes.media}
        image={RegisterBG}
        title="Contemplative Reptile"
      />
      <Gap height={15} />
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'row' }}>
          <Typography gutterBottom variant="h4" component="h2" >
            Lizards are a widespread group
          </Typography>
          <Typography gutterBottom color="textSecondary" style={{ marginTop: 14, marginLeft: 14 }}>
            Alex Junaidi - September , 20-2021
          </Typography>
        </div>
        <Typography variant="body2" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          </Typography>
      </CardContent>
    </Paper>
  )
}

export default DetailBlog
