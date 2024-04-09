const express = require("express");
const bodyParser = require("body-parser");
const studentController = require("./controllers/student");
const errorController = require("./controllers/error");

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  studentController.getAddNewStudentPage(req, res);
});

app.get("/students-lsit", (req, res) => {
  studentController.getStudentsListPage(req, res);
});

app.get("success", (req, res) => {
  studentController.getSuccessPage(req, res);
});

// redirect to /students list
app.post("/add-list", (req, res) => {
  studentController.addNewStudent(req, res);
  res.redirect("/students-list");
});


app.use((req, res, next) => {
  errorController.getNotFoundPage(req, res);
});


