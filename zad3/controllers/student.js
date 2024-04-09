let nexztId = 1;
const students = [];

exports.getAddNewStudentPage = (req, res) => {
  res.render('home');
};
 
exports.addNewStudent = (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;
 
  const newStudent = {
      id: nextId++,
      fullName: fullName,
      code: code,
      fieldOfStudies: fieldOfStudies
  };
  students.push(newStudent);

  res.redirect('/success');
};

exports.getStudentsListPage = (req, res) => {
  res.render('list', { students: students });
};

exports.getSuccessPage = (req, res) => {
  res.render('success');
}