import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppIcon from '../images/icon.png';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = {
    typography: {
        useNextVariants: true
    },
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '10px auto 10px auto',
    },
    pageTitle: {
        margin: '20px auto 20px auto',
    },
    textField: {
        margin: '10px auto 10px auto',
    },
    button: {
        marginTop: 20,
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    progress: {
        position: 'absolute'
    }
};

class login extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
            body: '',
            tags: '',
            title: '',
            errors: {},
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.setState({
        //     loading: true
        // });

        const userData = {
            address: this.state.address,
            body: this.state.body,
            tags: this.state.tags,
            title: this.state.title,

        };

        this.props.loginUser(userData, this.props.history);

        // axios.post('/login', userData).then(res => {
        //     localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        //     this.setState({
        //         loading: false
        //     });

        //     this.props.history.push('/');
        // }).catch(err => {
        //     this.setState({
        //         errors: err.response.data,
        //         loading: false
        //     });
        // });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state;

        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variant='h2' className={classes.pageTitle}>Host An Event</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id='title' name='title' type='title' label='title' className={classes.textField} helperText={errors.title} error={errors.title ? true : false} value={this.state.title} onChange={this.handleChange} fullWidth/>
                        <TextField id='address' name='address' type='address' label='address' className={classes.textField} helperText={errors.address} error={errors.address ? true : false} value={this.state.address} onChange={this.handleChange} fullWidth/>
                        <TextField id='body' name='body' type='body' label='body' className={classes.textField} helperText={errors.body} error={errors.body ? true : false} value={this.state.body} onChange={this.handleChange} fullWidth multiline/>
                        <TextField id='tags' name='tags' type='tags' label='tags' className={classes.textField} helperText={errors.tags} error={errors.tags ? true : false} value={this.state.tags} onChange={this.handleChange} fullWidth/>
                        {errors.general && (
                            <Typography variant='body2' className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button type='submit' variant='contained'  color='primary' className={classes.button} disabled={loading}>Login {loading && (<CircularProgress size={30} className={classes.progress}/>)}</Button>
                        <br/><br/>
                        <small>No account? <Link to='/signup'>Sign up now</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login));
