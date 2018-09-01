[![Build Status](https://travis-ci.com/khuynh92/18-oauth.svg?branch=master)](https://travis-ci.com/khuynh92/18-oauth)

Travis: https://travis-ci.com/khuynh92/18-oauth  
Heroku: https://khoa-18-oauth.herokuapp.com  
PR: https://github.com/khuynh92/18-oauth/pull/2  

## 18-oauth

## testing routes

### OAuth Sign in/up
on the home page `https://khoa-18-oauth.herokuapp.com` click on the anchor tag 'sign in with linkedIn' to test linkedIn OAuth.
Response Will be your user object that was created through linkedIn OAuth *note password hash shown IS NOT your linkedIN password hash*

### /signup
on the home page, use the form to create an account. The user will be redirected to a page with a JWT

### /signin
To test signin, Use the JWT that was given when signing up on the home page. Use that JWT as a bearer token in postman or httpie.

**This lab was built off of codefellows 18-oauth demo code**
