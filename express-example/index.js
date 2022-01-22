import express from "express";

const app = express();


/* GET method */
app.get("/hello", (request, response) => {
    response.send("Hello, world!");
});

/* All the methods */
app.use("/goodbye", (request, response) => {
    response.send("Goodbye, world!");
});


app.listen(5080);

