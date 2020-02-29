import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image: {
        minWidth: 200,
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
}

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime);
    const { classes, scream : { body, createdAt, title, userHandle, locationId } } = this.props;
      
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography variant='h4' color='textSecondary' component={Link} to={`/location/locations/${locationId}`}>{title}</Typography>
                <Typography variant='h5' component={Link} to={`/users/${userHandle}`} color='primary'>{userHandle}</Typography>
                <Typography variant='body2' color='textSecondary'>{dayjs(createdAt).fromNow()}</Typography>
                <Typography variant='body1'>{body.length > 400 ? body.substring(0, 400) + "..." : body.substring(0, 400)}</Typography>
            </CardContent>
        </Card>
    );
  }
}

export default withStyles(styles)(Scream);
