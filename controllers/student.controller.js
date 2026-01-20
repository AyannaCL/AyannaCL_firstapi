const Student = require("../models/student.model");

const getStudents = async ( req, res) => {
    try{
         const students = await Student.getAllStudents();
        res.json(students);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
     
};

// Get a single student by ID
const getStudent = async (req, res) => {
  try {
    const student = await Student.getStudentById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new student
const addStudent = async (req, res) => {
  try {
    const result = await Student.createStudent(req.body);
    res.status(201).json({
      id: result.insertId,
      ...req.body,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Edit a student
const editStudent = async (req, res) => {
  try {
    await Student.updateStudent(req.params.id, req.body);
    res.json({ message: "Student updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Change student status
const changeStudentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    await Student.updateStudentStatus(req.params.id, status);
    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Remove a student
const removeStudent = async (req, res) => {
  try {
    await Student.deleteStudent(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  getStudents,
  getStudent,
  addStudent,
  editStudent,
  changeStudentStatus,
  removeStudent,
};
