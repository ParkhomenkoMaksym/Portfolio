Maksym Parkhomenko
Programming in HTML5 with JavaScript and CSS3
Assignment Task B


I used sample code from:
1. image gallery - MDN (index.html 89-101 lines)
2. canvas with animation - MDN (index.html 139-143 lines)
3. XMLHttpRequest - MDN (index.html 145-184 lines)
4. web worker - w3schools (index.html 186-220 lines)
5. web socket - MDN (index.html 222-225 lines)
6. local storage - Book "Head First O'Reilly HTML 5"(index.html 228-247 lines)
7. gmap with leaflet - https://leafletjs.com (contact.html 59-74 lines)



You need in order to run your website files in "socket-chat-example" (Live Server port: 3000) "server.js"


===============================================================================


#XMLReq
The line 127 holds a button that when clicked triggers a function called (loadDoc). The function loads an external document 

//cd_catalog.xml
Is a xml document with a simple list of my favorite bands that gets loaded through the function (myFunction) when the button 'Get my CD collection' is clicked


===============================================================================================
**Implement CSS effect**

In file named "index.css"
The line 89 containing CSS effect

Transition - when hovering the navigation menu changes color and size

===============================================================================================
**Implement an HTML geolocation using API**

In file named "JS/index.js "

A button named Try It, is a button that when pressed will load two JavaScript functions to get the geolocation from
the user and show it on google maps

getLocation() 
The getLocation fuction will get the current position of the user device using the getCurrentPosition method

showPosition()
The showPosition function will get the laitude and longitude coordination of the user position
It will then pass them though and displayed in a div as in google maps
The function also displayes the latitude and longitude in numerical form using the getLocation function

=============================================================================================
**To implement graphic using HTML cavas and JS code

In file/webpage named " index.html "

The second half of the page there is a drawing implemented on HTML Canva using JavaScript code
The canva tag is a container for graphics 

JS/test.js
Is the Javascript file on which the actual drawing is made each part of he drawing is created defining a shape 
and coords of x and y, radius included in circles 
They all have a color of filling defined with the .fillStyle property
In order to show the drowing on the page the .fill() method is used.

===================================================================================
To implement CSS transitions or amimation along with JavaScript code to detect when a transation has finished.

In file named " index.html "

The first header of the HTML file contains a button named "My Portfolio" when you pressed the button will move to the right with animation 


============================================================================
**To implement a client web server with web socket and node.js

In file/web page named " socket-chat-example/server.js "

=============================================================================
**To implement local storage with JavaScript code in file named "index.html"
When entering text and color, a colored sticker with the text will appear and be saved in local storage.

================================================================================================

**Responsive Design & Print version**




