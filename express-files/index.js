import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/", async (request, response) => {
    const fileBuf = await fs.readFile("./files/index.html");
    response.type("html");
    response.send(fileBuf);
});

app.get("/:name", async (request, response) => {
    const name = request.params.name;
    const fileBuf = await fs.readFile("./files/index.html");
    const content = fileBuf.toString().replace("Marta", name);
    response.type("html");
    response.send(content);
});

 /* Querystring name */ /*
app.get("/hello", async (request, response) => {
    const name = request.query.name;
    const fileBuf = await fs.readFile("./files/index.html");
    const content = fileBuf.toString().replace("Marta", name);
    response.type("html");
    response.send(content);
});
*/

/*
app.get("/main.css", async (request, response) => {
    const fileBuf = await fs.readFile("./files/main.css");
    response.type("css");
    response.send(fileBuf);
});
*/
/*
app.get("/:fileName", async (request, response) => {
    const fileName = request.params.fileName;
    const fileBuf = await fs.readFile(`./files/${fileName}`);
    const type = fileName.split(".")[1];
    response.type(type);
    response.send(fileBuf);
});
*/

app.get("/*", async (request, response) => {
    try {
        const fileName = request.path;
        const fileBuf = await fs.readFile(`./files/${fileName}`);
        const type = fileName.split(".")[1];
        response.type(type);
        response.send(fileBuf);
    } catch (err) {
        response.status(404).end();
    }
});


/*
app.use(express.static("./files"));
*/

app.listen(5080);