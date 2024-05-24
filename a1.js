/*********************************************************************************

WEB700 – Assignment 1
I declare that this assignment is my own work in accordance with Seneca Academic Policy.
No part of this assignment has been copied manually or electronically from any other source
(including web sites) or distributed to other students.

Name: Neel Hiren Bamania
Student ID: 160262234
Date: 24th May, 2024

********************************************************************************/

const serverVerbs = ["GET", "POST", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This Assignment was prepared by Neel Hiren Bamania",
    "Contact Information: nhbamania@myseneca.ca",
    "User Logged In",
    "Main Panel",
    "User Logged Out"
];

// httpRequest function
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manually testing the httpRequest function
console.log(httpRequest("GET", "/")); // "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // "200: This Assignment was prepared by Neel Hiren Bamania"
console.log(httpRequest("PUT", "/")); // "404: Unable to process PUT request for /"

// Utility function to get a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to automate testing
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    // Execute randomRequest every 1 second
    setInterval(randomRequest, 1000);
}

// Invoke automateTests function
automateTests();
