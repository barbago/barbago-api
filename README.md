# Barbago API

This repository contains the codebase for Barbago's backend REST API.

## Deploying

The Barbago API uses Firebase for hosting and deployment as well as handling authentication.


## Notes

Will be hosted using Firebase. Simplest way to perform hosting, deployment, authentication, etc. Using authentication on a custom backend server just complicates everything. Firebase tokens expire after one hour, meaning you'd have to reauthenticate every. single. hour.

You can also access a MySQL server from within Firebase, so the default usage of firestore is not a major limitation.



```SQL
/* https://gis.stackexchange.com/questions/356835/sorting-by-distance-in-mysql */

SELECT *
FROM locator
WHERE SQRT(POW(X(center) - 49.843317, 2) + POW(Y(center) - 24.026642, 2)) * 100 < radius
ORDER BY SQRT(POW(X(center) - 49.843317, 2) + POW(Y(center) - 24.026642, 2)) * 100


/* https://gis.stackexchange.com/questions/31628/find-features-within-given-coordinates-and-distance-using-mysql/356830#356830

The SQL statement that will find the closest 20 locations that are within a radius of 30 miles to the 78.3232, 65.3234 coordinate. It calculates the distance based on the latitude/longitude of that row and the target latitude/longitude, and then asks for only rows where the distance value is less than 30 miles, orders the whole query by distance, and limits it to 20 results. To search by kilometers instead of miles, replace 3959 with 6371. */

SELECT
    id, (
      3959 * acos (
      cos ( radians(78.3232) )
      * cos( radians( lat ) )
      * cos( radians( lng ) - radians(65.3234) )
      + sin ( radians(78.3232) )
      * sin( radians( lat ) )
    )
) AS distance
FROM markers
HAVING distance < 30
ORDER BY distance
LIMIT 0 , 20;

```

## TO DO

- Set up a @barbago organization
- Refactor into separate repositories
- Add more screens to UI
- Decide if we're really using firebase (Why?)
- Plan out the backend collecitons
-
- Start coding frontend and backend together
- Write tests
- Get stuff deployed

### Why Use Firebase

fast to start up
simple authentication
integrates with mobile
scales easily
great developer experience
use express server

### Whyn't Use Firebase

!!! NO SQL DATABASE

- Can learn how to deal with this
- Querying sucks, this might be very bad
- Not flexible at all
- Highly couples code to platform
- Security rules are convoluted
- Not really used in production


### Use What Instead?

AWS Lambda and API Gateway
- These services will be better to learn in the long run for employment

Heroku
- Heroku has slow starts at first and quickly becomes expensive
- It's a great way to start developing and deploying an express app

### What am I gonna do?

Heroku is a balance of AWS and Firebase. Great developer experience, endless flexibility. This will let me more easily transition to AWS when it's time to go into prod.

https://aws.amazon.com/getting-started/hands-on/deploy-nodejs-web-app/services-costs/?p=gsrc&c=ho_dnwa
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-dynamodb-tutorial.html?p=gsrc&c=ho_dnwa

