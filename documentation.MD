# Documentation

## Basics
Essentially everything can be done with POST/GET requests.

The base URL is `https://us-central1-volunteerapp-378a4.cloudfunctions.net/api`. As an example, if you would like to preform a GET request to retrieve all events, you would preform a GET request on the following URL: ` https://us-central1-volunteerapp-378a4.cloudfunctions.net/api/locations`. Preforming these POST/GET requests vary based on what platform you're using and how you plan on using the data. For instance, for a React web app, you may end up using [axios](https://github.com/axios/axios), a Promise based HTTP client for the browser and node.js. This may be done using the following line:

```
axios.get('/locations').then(res => {
            this.setState({
                allEvents: res.data
            });
}).catch(err => console.log(err));
```

## Requests

#### POST requests:
* SIGNUP
  * A user must be registered with our back end to add new events to our service. This is done to reduce fake events and allow users to update their events after initial creation.
  * Accessed using the `/signup` route. As an input, it expects a json in the following format:
    ```
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "tes32422t@email.com",
      "password": "abcdef",
      "confirmPassword": "abcdef",
      "handle": "JohnDoeUsername",
      "tags": "apple, banana, carrot",
      "eventsWorked": "eventOne, eventTwo",
      "currentEvents": "eventThree, eventFour"
    }
    ```
    A login token is then returned.
* LOGIN
  * Accessed using the `/login` route. As an input, it expects a json in the following format:
  ```
  {
      "email": "tes32422t@email.com",
      "password": "abcdef"
  }
  ```
  A login token is then returned.

* USER INFO
  * Accessed using the `/user` route. Specific information of the currently logged in user can then be updated. Not fully functional currently.

* ADD NEW EVENT
  * Accessed using the `/location` route. Must be currently logged in as an authenticated user to post. Expects an input in the following format:
  ```
  {
      "address": "950 N Lombard St Mahomet, IL 61852",
      "title": "Spring Break at the Museum - Candle Dipping",
      "body": "Not sure what to fill your day with this spring break? Stop by the Museum for fun-filled activities every day! During the 19th century, candles were the most common form of interior lighting. Dip a wick in some candle wax and take home your very own classic candle!",
      "date": "2020-03-18T22:00:00.000Z",
      "tags": "",
      "signUpAmnt": 0
  }
  ```

  Returns a JSON specifying if the request was completed successfully.


#### GET requests:
* GET USER INFO
  * Get information about the currently authenticated user. Accessed using the `/user` route. A JSON in the following format is then returned:
  ```
  {
      "credentials": {
          "currentEvents": "",
          "tags": "",
          "createdAt": "2020-03-01T04:41:29.050Z",
          "lastName": "Doe",
          "firstName": "John",
          "eventsWorked": "",
          "handle": "JohnDoeUsername",
          "email": "tes32422t@email.com",
          "userId": "uTUqeEP2UqbB2Wtd0vTvPQgts1y1",
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/volunteerapp-378a4.appspot.com/o/no-img.png?alt=media"
      },
      "likes": []
  }
  ```

* GET ALL EVENTS
  * Get every single volunteer event currently on the service. Accessed using the `/locations` route. A JSON with the following format is then returned.
  ```
  [
      {
          "locationId": "0R2mhqrOFBSLxLsFxOHP",
          "email": "test5@email.com",
          "address": "1400 W. Park Street Urbana, IL 61801",
          "title": "Administrative Assistant / Volunteer Coordinator",
          "coordinator": "a",
          "body": "We have an opening for a half-time administrative assistant to help manage our day to day operations. Responsibilities include basic bookkeeping, event support, database management and general office support.  The volunteer would also",
          "date": "Tuesday, February 23, 2021 - 2:30pm",
          "tags": "",
          "signUpAmnt": 0
      },
      {
          "locationId": "0wTobnENZtnGZS4GiU0K",
          "email": "test5@email.com",
          "address": "Champaign, IL 61820",
          "title": "Camp Invention Volunteer Leadership Intern -  Champaign IL Area",
          "coordinator": "a",
          "body": "Get ready to reinvent volunteering by participating in our Leadership Intern program! Leadership Interns work closely with K-6 grade Camp Invention participants to help them learn, think creativity and develop their innovation skills to help invent a better tomorrow.",
          "date": "Wednesday, May 15, 2020 - 2:00pm",
          "tags": "",
          "signUpAmnt": 0
      },
  ]
  ```

* GET A SPECIFIC EVENT
  * Get a single event from the database. Accessed using the `/locations/locationId` route where `locationId` is a specific id for an event (ie. `/locations/3T7uxibzkd5ebPPV0e3R`). It returns a JSON in the following format:
  ```
  {
      "tags": "",
      "title": "Introduction to Tutoring with Project READ",
      "signUpAmnt": 0,
      "address": "200 West Green Champaign, IL 61820",
      "email": "test5@email.com",
      "body": "Project READ (parkland.edu/projectread) helps adults improve their skills in basic reading, basic math, or English as a second language. This program is made possible by volunteers who give their time to improve the quality of life for hundreds of people in our community. Tutors and learners meet regularly at the Champaign Public Library, The Urbana Free Library, Wesley Food Pantry, Champaign Unit 4 Schools, CU FAIR: Champaign Urbana Friends & Allies of Immigrants &..., Rantoul Public Library, and many other public places in our community and throughout our region. Tutors might be homemakers, retirees from any profession, college students, working professionals, or former adult learners. Learners are older teens and adults age 17 to 80+, who want to improve their lives and the lives of their families.",
      "date": "Friday, April 3, 2020 - 11:30am",
      "coordinator": "a",
      "locationId": "3T7uxibzkd5ebPPV0e3R",
      "comments": []
  }
  ```
