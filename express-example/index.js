import express from "express";

const app = express();


/* GET method */
app.get("/hello", (request, response) => {
    response.send("Hello, world!");
});

app.use("/hello", (request, response) => {
    response.status(405).end();
});

/* All the methods */
app.use("/goodbye", (request, response) => {
    response.send("Goodbye, world!");
});


app.listen(5080);

