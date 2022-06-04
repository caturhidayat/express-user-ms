import express from "express";
import { engine } from "express-handlebars";


const app = express();
const PORT = process.env.PORT || 3000;

// hbs template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');


// ROUTE
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/users", (req, res) => {
    res.render("users/user");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
