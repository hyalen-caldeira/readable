# Readable Project

For the Readable project, I've built a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This content and comment structure is common across a large number of websites and applications, from news sites to blogs to aggregators like Hacker News and Reddit. By building this project, I was able to gain an understanding of how Redux can function in a standard type of application.

This project was started using [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## Project Setup

* Clone the Project - `git clone https://github.com/hyalen-moreira/readable.git`
* Install the dependencies - `npm install`
* Start the application - `npm start`

## What you gonna find
```
+--public/    
 |-- index.html - DO NOT MODIFY
+-- src/
 +-- actions
 +-- components
 +-- reducers
 +-- utils
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

Refer to the [local backend development server](https://github.com/udacity/reactnd-project-readable-starter) to proceed with the backend server installation. This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project. Basically you need to:
* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
The server is built in Node, but it is very simple. You won't need to edit the server code; instead, your code will talk to the server using documented API endpoints. You can use the server's endpoints to manage storing, reading, updating, and deleting data for your application.

Using this server, I've only built the React/Redux front end for the application.

## Views
The application have the following four views:

### `Default (Root)`
* list all available categories, which should link to a category view for that category
* list all of the posts ordered by voteScore (highest score first)
* have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
* have a control for adding a new post

### `Category View`
* identical to the default view, but filtered to only include posts with the selected category

### `Post Detail View`
* show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
* list all of the comments for that post, ordered by voteScore (highest first)
* have controls to edit or delete the post
* have a control to add a new comment.
* implement comment form however you want (inline, modal, etc.)
* comments should also have controls for editing or deleting

### `Create/Edit View`
* have a form to create new post or edit existing posts
* when editing, existing data should be populated in the form

## Important
This application is anonymous, with no authentication or authorization. There are no user objects, and comments and posts accept any username/name for creation and editing.

The server is very light weight. It performs zero data validation to enforce the above data types. Make sure you are using the correct types when sending requests to the server.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
