import express from "express";

//@type/express
const app = express();

//GET
app.get("/test", (request, response) => {
    return response.send("Hello NLW");
});

//POST
app.post("/test-post", (request, response) => {
    return response.send("Hello NLW Post");
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));