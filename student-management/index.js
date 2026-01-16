import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

const DB_FILE = "./db.json";

const readData = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

app.post("/students", (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const data = readData();
  const newStudent = {
    id: Date.now(),
    name,
    course,
    year
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = readData();

  const student = data.students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = req.body.name || student.name;
  student.course = req.body.course || student.course;
  student.year = req.body.year || student.year;

  writeData(data);

  res.json({ message: "Student updated successfully" });
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = readData();

  const index = data.students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students.splice(index, 1);
  writeData(data);

  res.json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
