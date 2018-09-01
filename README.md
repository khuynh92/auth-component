[![Build Status](https://travis-ci.com/khuynh92/35-cookies-persistence.svg?branch=master)](https://travis-ci.com/khuynh92/35-cookies-persistence)

heroku: http://khoa-35-cookies-persistence.herokuapp.com  
PR: https://github.com/khuynh92/35-cookies-persistence/pull/1  
Travis: https://travis-ci.com/khuynh92/35-cookies-persistence  

# LAB 35-cookies-persistence
  This lab is the frontend of sluggram (https://github.com/slugbyte/sluggram). It provides a login/signup feature. When logged in, user will be redirected to dashboard page. On sign out, user will be redirected to home page. /dashboard will ONLY be accessible if user is signed in.
## Configuration
env variables:

**backend folder**
```
PORT = 3000
MONGO_URI = 'mongodb://localhost/lab_35'
SECRET='secretnamehere'
```
**frontend root directory**
```
API_URL = http://localhost:3000
```

***make sure your api_url port matches the backend port***

## Heroku start:

simply go to. http://khoa-35-cookies-persistence.herokuapp.com. Ensure the backend directory is working by going to http://khoa-sluggram.herokuapp.com/. if `not found` is shown, the backend server is up and running. 

## To install
Download this repo and in the root directory, type in to the CLI `npm i` to install all dependencies.

Create an .env file with the frontend env vars listed above.

Go into the backend folder and type into your CLI `npm i` to install all backend dependencies.

Create an .env file with the backend env vars listed above.

## To Run
Before running, start up a mongodb server on your computer.

Go to the backend folder, and type in your CLI `npm run watch` or `npm start`

Go to the front end folder and type in `npm run watch`

## How To Use the App

The homepage will display a sign in page. This page will only work after a user has created an account

clicking `create a account` will redirect you to the signup page. Fill in the form. Alerts will occur if the form is not completed. If a user already exists, an alert will occur.

After you are logged in, you will be sent to the dashboard. Unless you hit sign out, you will forever be logged in.

