# HackIllinois2020

## A Simple to use API to find volunteer events

## Info
Main site: [www.volunteerconnect.tk/](http://34.66.104.95/)

An open source project. MIT license. Made during HackIllinois 2020.


## Layout of Repo
* `FirebaseFunctions` contains all functions used on our Firebase backend. This includes all POST and GET requests.

* `mainSite` contains the code for our informational website found at [www.volunteerconnect.tk/](http://34.66.104.95/) .

* `sampleUsage` contains a sample use case of our API on a site designed for users to sign up to attend volunteering events, get in contact with coordinators, track their hours, and more. It is written using React, an open source web framework, and is currently still a work in progress.

* 'volunteerApp' is a sample usage of our API in an app format. It is still very much in progress. Essentially, its a mobile version of our `sampleUsage` website written using React Native, an open source mobile framework.

* `reactComponent` contains code for our custom React component published to NPM. This can be easily implemented in your own React projects by simply running the command `npm i volunteer-connect-get-all` and then importing it into your desired .js file. Currently it provides a list view of all volunteering events currently in the database, but we hope to expand its functionality in the future. 


## Documentation
Check out [`documentation`](documentation.MD) file for more info about this API and how to use it.
