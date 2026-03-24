// ===============================
// 📌 FUNCTION 1
// ===============================

// Arrow function
// This function returns a string

let say = () => {
    return "Helloooooooooooo"
}


// ===============================
// 📌 DEFAULT EXPORT (COMMENTED)
// ===============================

// module.exports = say

// 👉 WHAT IS THIS?
// This exports ONLY ONE thing from the file

// 👉 WHY USE?
// When you want to export a single function/object

// 👉 HOW TO IMPORT?
// const say = require("./modules")

// 👉 LIMITATION:
// Only ONE export allowed ❌


// ===============================
// 📌 FUNCTION 2
// ===============================

let greet = () => {
    return "Good Morning"
}


// ===============================
// 📌 NAMED EXPORT
// ===============================

// Exporting multiple functions as object
module.exports = { say, greet }

// 👉 WHAT IS THIS?
// Exporting multiple values using object

// 👉 WHY USE?
// When you want to export multiple functions/variables

// 👉 HOW TO IMPORT?
// const { say, greet } = require("./modules")

// 👉 Internally it becomes:
/// module.exports = {
//     say: say,
//     greet: greet
// }


// ===============================
// 📌 IMPORTANT NOTE
// ===============================

// You CANNOT use both together:
// ❌ module.exports = say
// ❌ module.exports = { say, greet }

// Because second one overrides the first one
