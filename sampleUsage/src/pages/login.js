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
            email: '',
            password: '',
            errors: {},
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.setState({
        //     loading: true
        // });

        const userData = {
            email: this.state.email,
            password: this.state.password
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
                    <img src={AppIcon} alt='iconImg' className={classes.image}/>
                    <Typography variant='h2' className={classes.pageTitle}>Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id='email' name='email' type='email' label='email' className={classes.textField} helperText={errors.email} error={errors.email ? true : false} value={this.state.email} onChange={this.handleChange} fullWidth/>
                        <TextField id='password' name='password' type='password' label='password' className={classes.textField} helperText={errors.password} error={errors.password ? true : false} value={this.state.password} onChange={this.handleChange} fullWidth/>
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
