// ============================================
// TOKEN MIDDLEWARE FILE
// ============================================

// This token should be stored in .env file
// Example: myToken=123

let checkToken = (req, res, next) => {

    // Get token from query
    const token = req.query.token;

    // 1. Check if token exists
    if (!token) {
        return res.status(400).send({
            status: 0,
            msg: "Please provide token"
        });
    }

    // 2. Validate token using environment variable
    if (token !== process.env.myToken) {
        return res.status(401).send({
            status: 0,
            msg: "Invalid token"
        });
    }

    // 3. Allow request to proceed
    next();
};

// Export middleware
module.exports = { checkToken };