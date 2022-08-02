# phase2-project

Phase 2 Project - Arizona Golf Course List

## Description

This single page application was created to display and add golf courses and display information about each of them to a webpage visitor. On the top of the page is a navigation bar that will allow you to toggle between the home page, the current course list, and a page to add a new course. Once added, you can navigate to the course list to see the new information. Routing is included so "/" will take you to the home page, "/courses' will take you to the course list, and "/addcourse" will take you to the add course page. This page was created in React.js and uses Material UI.

## Installation

To get this page running, you will need to the API JSON server running. 

Step 1: Run the following command to setup the JSON server:
npm install -g json-server

Step 2: Start the JSON server using the following command:
json-server --watch db.json

From there, the page should post, update, and delete from the db.json file.

## Usage

The home page was created as a landing page for information and explaining the web page. There should be a few courses already created for you to view on the Course List page. You can create a new course by navigating to the Add Course Page.

Example Course to Add:
Name: Lookout Mountain Golf Club
Location: Phoenix, AZ
Price: 175
Rating: 7.4
Website URL: https://www.lookoutmountaingolf.com/

After adding a new golf course, you will be navigating to the course list to see the updated list.

## Requirements
Make a single page application using create-react-app. 
- Completed
Your app should use at least 5 components.
- Completed (App, Home, Navbar, AddCourse, CourseList, CourseForm)
There should be at least 3 client-side routes using React Router.
- Completed (Home, AddCourse, CourseList)
Use a json-server to create a RESTful API for your backend and make both a GET and POST request.
- Completed (GET in App, POST in AddCourse)
Add some styling.
- Completed (Experimented with Material UI in a number of areas)

## Acknowledgement

Golf course photo from the home page was used from Quintero Golf Club: (https://www.quinterogolf.com/) https://www.quinterogolf.com/wp-content/uploads/2020/03/bkg-hole-1.jpg

## Video Walk-Through

https://youtu.be/NZXej5CW_O8 

## Blog on Material UI
https://medium.com/@azehnder2/getting-started-with-material-ui-50e4ba6d5b53

