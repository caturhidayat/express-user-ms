import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
