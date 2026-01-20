const express = require("express");

const router = express.Router();

const {
    getStudents,
    getStudent,
    addStudent,
    editStudent,
    changeStudentStatus,
    removeStudent,
} = require("../controllers/student.controller"); // updated path

// Routes
router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', editStudent);
router.patch('/:id/status', changeStudentStatus);
router.delete('/:id', removeStudent);

module.exports = router;