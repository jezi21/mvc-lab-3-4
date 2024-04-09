const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/students-lsit", (req, res) => {
  res.render("list");
});

app.get("success", (req, res) => {
  res.render("success");
});

// redirect to /students list
app.post("/add-list", (req, res) => {
  res.redirect("/students-list");
});
