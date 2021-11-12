# Noah Networks

## Description

Noah Networks is my personal webiste! This web application is a portal to all of my projects and is used to host my blog and manage blog entries.

## Front-End

The front end for Noah Networks is writen in Javascript using the React library. A sign up / sign in form allows users to log in. If a users email is in a list of approved admins they have access to an addition tab called Forms for adding blog posts. Navigation is used in the client application to link between routes. These routes include: a home page, an about page, a projects page, a blog page, a contact page and a login page. Other routes can be accessed through the main pages mentioned.

## Back-End

The back end for Noah Networks is written in Javascript and set up using the AWS CLI (Amazon Web Services Command Line Interface). The main application logic lives in an AWS Lambda Funciton that's's running an Express Server. The express server has routes for the HTTP methods invoked on a DynamoBD NoSQL Database used to store blog posts. To interact with the main Lambda function an API is used for invoking the correct HTTP requests. Authentication is used to allow users to sign-in / sign-out and to enable administrator access for writing and deleting blog posts from the database. Finally, another Lambda Function is used to place users with admin approved emails into the admin group upon sign-in.
