// ===============================
// 📌 IMPORT HTTP MODULE
// ===============================

// 'http' is a built-in Node.js module
// It helps us create a web server (like Express but basic)
const http = require("http")


// ===============================
// 📌 CREATE SERVER
// ===============================

// createServer() creates a server
// It takes a callback function which runs EVERY time a request comes

const server = http.createServer((req, res) => {

    // req → request object (data coming from client/browser)
    // res → response object (data we send back to client)


    // ===============================
    // 📌 SET RESPONSE HEADER
    // ===============================

    // Header tells browser what type of data we are sending
    // application/json → sending JSON data
    res.setHeader("Content-Type", "application/json")


    // ===============================
    // 📌 ROUTING (URL HANDLING)
    // ===============================

    // req.url gives the path user entered
    // Example: localhost:8000/news → req.url = "/news"

    
    if (req.url === "/") {

        // This runs when user visits:
        // http://localhost:8000/

        // JSON.stringify() converts JS object → JSON string
        // Because res.end() only sends string or buffer

        res.end(JSON.stringify({
            message: "Welcome to Home Page"
        }))
    }


    else if (req.url === "/news") {

        // This runs when user visits:
        // http://localhost:8000/news

        // Creating a JS object (data to send)
        let obj = {
            status: 1, // status code (custom, not HTTP status)
            data: [
                {
                    newsTitle: "Node.js News",
                    newsDes: "Learning HTTP module deeply"
                }
            ]
        }

        // Convert object → JSON string before sending
        res.end(JSON.stringify(obj))
    }


    else if (req.url === "/about") {

        // Always send response
        // Otherwise browser will keep loading (request hangs)

        res.end(JSON.stringify({
            message: "About Page"
        }))
    }


    else {

        // This is DEFAULT route (if no match found)

        res.end(JSON.stringify({
            message: "404 Not Found"
        }))
    }

})


// ===============================
// 📌 START SERVER
// ===============================

// listen() starts the server on given port
// Port = address where server runs

server.listen(8000, () => {

    // Callback runs when server starts successfully
    console.log("✅ Server running on http://localhost:8000")

})





// PACKAGE JSON EXPLANATION
// {
//   "name": "backend", 
//   // 👉 Project name
//   // Used when publishing on npm
//   // Should be unique (if public)

//   "version": "1.0.0", 
//   // 👉 Version of your project
//   // Format: MAJOR.MINOR.PATCH
//   // Example: 1.0.1 (small fix), 2.0.0 (big change)

//   "main": "index.js", 
//   // 👉 Entry point of your app
//   // This file runs first when project starts

//   "type": "commonjs", 
//   // 👉 Defines module system
//   // commonjs → use require() & module.exports
//   // module → use import/export (ES Modules)

//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     // 👉 Default test script (auto-generated)

//     "start": "nodemon index"
//     // 👉 Runs your project using nodemon
//     // nodemon auto-restarts server when file changes
//   },

//   "keywords": [], 
//   // 👉 Used for searching package on npm

//   "author": "", 
//   // 👉 Your name

//   "license": "ISC", 
//   // 👉 License type (legal use)

//   "description": "" 
//   // 👉 Short info about your project
// }