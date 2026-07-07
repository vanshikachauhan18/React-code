import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;