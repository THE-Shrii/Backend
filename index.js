// ============================================
// EXPRESS SERVER MAIN FILE
// ============================================

// 1. IMPORT MODULES
const express = require("express");
require("dotenv").config();

// Import middleware
const { checkToken } = require("./checkTokenMiddleware");

// 2. CREATE APP
const app = express();

// 3. MIDDLEWARE
app.use(express.json());

// Global logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


// ============================================
// ROUTES
// ============================================

// Home route
app.get("/", (req, res) => {
    res.send({ status: 1, msg: "Home API" });
});


// Protected route
app.get("/news", checkToken, (req, res) => {
    res.send({ status: 1, msg: "News API (Protected)" });
});


// Params example
app.get("/user/:id", (req, res) => {
    res.send({
        status: 1,
        userId: req.params.id
    });
});


// Query example
app.get("/search", (req, res) => {
    res.send({
        status: 1,
        query: req.query.term
    });
});


// POST example
app.post("/products", (req, res) => {
    res.status(201).send({
        status: 1,
        product: req.body
    });
});


// Users data
const users = [
    { id: 1, name: "Shrii" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
];

// Get all users
app.get("/users", (req, res) => {
    res.send({ status: 1, users });
});

// Get user by ID
app.get("/users/:id", (req, res) => {

    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.send({
            status: 1,
            user
        });
    } else {
        res.status(404).send({
            status: 0,
            msg: "User not found"
        });
    }
});


// 404 handler
app.use((req, res) => {
    res.status(404).send({
        status: 0,
        msg: "Page Not Found"
    });
});


// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});