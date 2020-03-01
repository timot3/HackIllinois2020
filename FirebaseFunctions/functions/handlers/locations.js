const { db } = require('../util/admin');

exports.getAllLocations = (req, res) => {
    db.collection('locations').get().then(data => {
        let locations = [];
        data.forEach(doc => {
            locations.push({
                locationId: doc.id,
                email: doc.data().email,
                address: doc.data().address,
                title: doc.data().title,
                coordinator: doc.data().coordinator,
                body: doc.data().body,
                date: doc.data().date,
                tags: doc.data().tags,
                signUpAmnt: doc.data().signUpAmnt
            });
        });
        
        return res.json(locations);
    }).catch(err => console.error(err));
};

exports.postOneLocation = (req, res) => {
    // if(req.body.body.trim() === '')
    //     return res.status(400).json({ body: 'Body must not be empty' });

    const newLocation = {
        email: req.user.email,
        address: req.body.address,
        title: req.body.title,
        coordinator: req.user.handle,
        body: req.body.body,
        date: req.body.date,
        tags: req.body.tags,
        signUpAmnt: req.body.signUpAmnt
    };

    db.collection('locations').add(newLocation).
    then(doc => {
        const resLocation = newLocation;
        resLocation.locationId = doc.id;
        res.json({ message: `document ${doc.id} created successfully` });
    }).catch(err => {
        res.status(500).json({ error: `something went wrong` });
        console.error(err);
    });
};

exports.getLocation = (req, res) => {
    let locationData = {};
    db.doc(`/locations/${req.params.locationId}`).get().then(doc => {
        if(!doc.exists)
            return res.status(404).json({ error: 'Location not found' });

        locationData = doc.data();
        locationData.locationId = doc.id;
        return db.collection('locations').where('locationId', '==', req.params.locationId).get();
    }).then(data => {
        locationData.comments = [];
        data.forEach(doc => {
            locationData.comments.push(doc.data());
        });

        return res.json(locationData);
    }).catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code });
    });
};
