let nextId = 1;
const students = [];

exports.getAddNewStudentPage = (req, res) => {
  res.render("home", { pageTitle: "Add New Student" });
};

exports.addNewStudent = (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;

  const newStudent = {
    id: nextId++,
    fullName: fullName,
    code: code,
    fieldOfStudies: fieldOfStudies,
  };
  students.push(newStudent);

  res.redirect("/success");
};

exports.getStudentsListPage = (req, res) => {
  res.render("list", { students: students, pageTitle: "Students List" });
};

exports.getSuccessPage = (req, res) => {
  res.render("success", { pageTitle: "Success" });
};
