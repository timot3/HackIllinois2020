const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users');
const { postOneLocation, getLocation, getAllLocations } = require('./handlers/locations');



app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);
app.post('/location', FBAuth, postOneLocation);
app.get('/locations/:locationId', getLocation);
app.get('/locations', getAllLocations);

exports.api = functions.https.onRequest(app);
