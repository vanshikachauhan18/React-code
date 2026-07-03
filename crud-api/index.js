import express from 'express';

const app = express();

app.use(express.json());

const students = [
  {
    id: 1,
    name: "abc",
    class: 9,
    city: "mumbai",
    school: "xyz international school"
  },
  {
    id: 2,
    name: "hen",
    class: 10,
    city: "delhi",
    school: "xyz international school"
  }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  students.push({
    id: 3,
    name: "newname",
    age: 12,
    city: "kolkata",
    school: "xyz international school"
  });

  res.json({
    message: "Student added successfully",
    students
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});