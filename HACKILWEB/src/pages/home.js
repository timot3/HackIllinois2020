import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Scream from '../components/Scream';

class home extends Component {
    state = {
        screams: null
    };

    componentDidMount() {
        axios.get('/locations').then(res => {
            this.setState({
                screams: res.data
            });
        }).catch(err => console.log(err));
    }

    render() {
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream}/>)
        ) : (<p>Loading...</p>);

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/602/823/707/abstract-geometry-minimalism-wallpaper-preview.jpg')";

        return (
        <Grid container spacing={16}>
            <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile</p>
            </Grid>
        </Grid>
        );
    }
}

export default home;
