const express = require("express");
const exphbs = require("express-handlebars");

const coingeckoApi = require("../lib/coingeckoApi");

const app = express();
const port = process.env.PORT || 3000;

const handlebarsInstance = exphbs.create({
  extname: ".html",
  defaultLayout: "main",
});

app.engine("html", handlebarsInstance.engine);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/../public"));
console.log(__dirname + "/../public");

app.get("/", async (req, res) => {
  const tokensArray = await coingeckoApi.getCurrentPrice();
  res.render("home", { token: tokensArray });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
