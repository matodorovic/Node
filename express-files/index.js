import express, { response } from "express";

const app = express();

app.get("/", (request, respons) => {
    response.send("Hello, world!");
});


app.listen(5080);