// import React, { Component } from 'react';
// import withStyles from '@material-ui/core/styles/withStyles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';
// import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';

// const styles = {
//     card: {
//         display: 'flex',
//         marginBottom: 20,
//     },
//     image: {
//         minWidth: 200,
//     },
//     content: {
//         padding: 25,
//         objectFit: 'cover'
//     }
// }

// class Scream extends Component {
//   render() {
//     dayjs.extend(relativeTime);
//     const { classes, scream : { body, createdAt, title, userHandle, locationId } } = this.props;
      
//     return (
//         <Card className={classes.card}>
//             <CardContent className={classes.content}>
//                 <Typography variant='h4' color='textSecondary' component={Link} to={`/location/locations/${locationId}`}>{title}</Typography>
//                 <Typography variant='h5' component={Link} to={`/users/${userHandle}`} color='primary'>{userHandle}</Typography>
//                 <Typography variant='body2' color='textSecondary'>{dayjs(createdAt).fromNow()}</Typography>
//                 <Typography variant='body1'>{body.length > 400 ? body.substring(0, 400) + "..." : body.substring(0, 400)}</Typography>
//             </CardContent>
//         </Card>
//     );
//   }
// }

// export default withStyles(styles)(Scream);












import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles(theme => ({
    main: {
        marginBottom: 50,
        display: 'flex',
    },
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: 0, // 16:9
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



export default function Scream(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(props.title);

 // const {no, scream:{body, createdAt, title, userHandle, locationId}} = this.props;
 const { bad, scream : { body, address, title, coordinator, date, locationId, email, signUpAmnt } } = props;

    //const temp = this.props.title;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.main}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {coordinator.substring(0,1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="sspettings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date.split("T")[0]}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body.length > 400 ? body.substring(0, 400) + "..." : body.substring(0, 400)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography header>Full Description:</Typography>
          <Typography paragraph>
            {body}
          </Typography>
          <br></br>
          <Typography header>Address:</Typography>
          <Typography paragraph>
            {address}
          </Typography>
          <br></br>
          <Typography header>Coodinator:</Typography>
          <Typography paragraph>
            {coordinator} ({email})
          </Typography>
          <br></br>
          <Typography header>Signed up users:</Typography>
          <Typography paragraph>
            {signUpAmnt}
          </Typography>
        </CardContent>
      </Collapse>
    </Card></div>
  );
}