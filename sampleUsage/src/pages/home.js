// import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
// import axios from 'axios';

// import Scream from '../components/Scream';

// class home extends Component {
//     state = {
//         screams: null
//     };

//     componentDidMount() {
//         axios.get('/locations').then(res => {
//             this.setState({
//                 screams: res.data
//             });
//         }).catch(err => console.log(err));
//     }

//     render() {
//         let recentScreamsMarkup = this.state.screams ? (
//             this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream}/>)
//         ) : (<p>Loading...</p>);

//         document.body.style.backgroundSize = "cover";
//         document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/602/823/707/abstract-geometry-minimalism-wallpaper-preview.jpg')";

//         return (
//         <Grid container spacing={16}>
//             <Grid item sm={8} xs={12}>
//                 {recentScreamsMarkup}
//             </Grid>
//             <Grid item sm={4} xs={12}>
//                 <p>Profile</p>
//             </Grid>
//         </Grid>
//         );
//     }
// }

// export default home;












// import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
// import axios from 'axios';
// import { render } from "react-dom";
// import ParticlesBg from "particles-bg";



// import Scream from '../components/Scream';

// class home extends Component {
//     constructor() {
//         super();
//         this.state = {
//           name: "React"
//         };
//     }

//     state = {
//         screams: null
//     };

//     componentDidMount() {
//         axios.get('/locations').then(res => {
//             this.setState({
//                 screams: res.data
//             });
//         }).catch(err => console.log(err));
//     }

//     render() {
//         let recentScreamsMarkup = this.state.screams ? (
//             this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream}/>)
//         ) : (<p>Loading...</p>);

//         let config = {
//             num: [4, 7],
//             rps: 0.1,
//             radius: [5, 40],
//             life: [1.5, 3],
//             v: [2, 3],
//             tha: [-40, 40],
//             alpha: [0.6, 0],
//             scale: [.1, 0.4],
//             position: "all",
//             color: ["random", "#ff0000"],
//             cross: "dead",
//             // emitter: "follow",
//             random: 15
//           };

//           if (Math.random() > 0.85) {
//             config = Object.assign(config, {
//               onParticleUpdate: (ctx, particle) => {
//                 ctx.beginPath();
//                 ctx.rect(
//                   particle.p.x,
//                   particle.p.y,
//                   particle.radius * 2,
//                   particle.radius * 2
//                 );
//                 ctx.fillStyle = particle.color;
//                 ctx.fill();
//                 ctx.closePath();
//               }
//             });
//           }
      

//         // document.body.style.backgroundSize = "cover";
//         // document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/602/823/707/abstract-geometry-minimalism-wallpaper-preview.jpg')";

//         return (
//             <Grid container spacing={16}>
//                 <ParticlesBg type="custom" config={config} bg={true} />
//                 <Grid item sm={8} xs={12}>
//                     {recentScreamsMarkup}
//                 </Grid>
//                 <Grid item sm={4} xs={12}>
//                     <p>Profile</p>
//                 </Grid>
//             </Grid>
//         );
//     }
// }

// export default home;















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

        return (
        <Grid container spacing={16}>

            <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
            </Grid>
        </Grid>
        );
    }
}

export default home;
