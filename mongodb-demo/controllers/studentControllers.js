import Student from "../models/student.js";

export const addStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json({ message: "Student added", student });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};