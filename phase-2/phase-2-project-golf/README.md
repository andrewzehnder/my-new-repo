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

After searching for a given postal code, you may leave them on the page, or remove using the button. Duplicate searches will not add a 2nd card.

## Acknowledgement

American flag picture used from Alpha Coders (https://www.alphacoders.com): https://images2.alphacoders.com/441/441503.jpg

## Video Walk-Through

https://youtu.be/xnmOEA25DfM 

## Blog on API JSON Server 

https://medium.com/@azehnder2/adding-items-to-api-json-server-6f515d238c7c 