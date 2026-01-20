const db = require("../config/db");

// Get all students
const getAllStudents = async () => {
  const [rows] = await db.query("SELECT * FROM tbl_student");
  return rows;
};

// Get a single student by ID
const getStudentById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM tbl_student WHERE id = ?",
    [id]
  );
  return rows[0]; // return single record
};


// Create a new student
const createStudent = async (student) => {
  const { firstname, lastname, gender, age, course_id, department_id, status } = student;
  const [result] = await db.query(
    "INSERT INTO tbl_student (firstname, lastname, gender, age, course_id, department_id) VALUES (?, ?, ?, ?, ?, ?)",
    [firstname, lastname, gender, age, course_id, department_id,]
  );
  return result;
};

// Update a student
const updateStudent = async (id, { firstname, lastname, gender, age, course_id, department_id, status }) => {
  const [result] = await db.query(
    "UPDATE tbl_student SET firstname = ?, lastname = ?, gender = ?, age = ?, course_id = ?, department_id = ? WHERE id = ?",
    [firstname, lastname, gender, age, course_id, department_id, id]
  );
  return result;

};
// Update student status
const updateStudentStatus = async (id, status) => {
  const [result] = await db.query(
    "UPDATE tbl_student SET status = ? WHERE id = ?",
    [status, id]
  );
  return result;
};

// Delete a student
const deleteStudent = async (id) => {
  const [result] = await db.query(
    "DELETE FROM tbl_student WHERE id = ?",
    [id]
  );
  return result;
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  updateStudentStatus,
  deleteStudent,
};