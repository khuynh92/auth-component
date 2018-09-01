[![Build Status](https://travis-ci.com/khuynh92/auth-component.svg?branch=master)](https://travis-ci.com/khuynh92/auth-component)

PR: https://github.com/khuynh92/auth-component/pull/1  
Travis: https://travis-ci.com/khuynh92/auth-component  

# Auth Component
  This lab is the frontend of sluggram (https://github.com/khuynh92/18-oauth). It provides a login/signup feature. When logged in, user will be redirected to dashboard page. On sign out, user will be redirected to home page. /dashboard will ONLY be accessible if user is signed in.
  
 Depending on the users roles (user, admin, editor), certain information will show on the dashboard page.
## Configuration

env variables:

**backend folder**
```
PORT = 3000
MONGODB_URI = 'mongodb://localhost/39-auth-component'
APP_SECRET = 'sssssshhhhhhhhh'
CLIENT_URL = 'http://localhost:3000/profile'
API_URL='http://localhost:3000'
```
**frontend root directory**
```
API_URL = http://localhost:3000
```

***make sure your api_url port matches the backend port***

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

