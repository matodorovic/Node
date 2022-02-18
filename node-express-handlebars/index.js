import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

const menu = [ {
    label: "Home",
    link: "/",
},
{
    label: "About us",
    link: "/about",
},
{
    label: "Contact us",
    link: "/contact",
},
];

const menuWithActive = path => menu.map(item => {
    return {
        link: item.link,
        label: item.label,
        active: item.link == path,
    };
});

app.get("/", async (req, res) => {
    res.render("index", {
        menu: menuWithActive(req.path),
    });
});

app.get("/about", async (req, res) => {
    res.render("about", {
        menu: menuWithActive(req.path),
    });
});

app.get("/contact", async (req, res) => {
    res.render("contact", {
        menu: menuWithActive(req.path),
    });
});




app.use("/", express.static("./static"));

app.listen(5080);