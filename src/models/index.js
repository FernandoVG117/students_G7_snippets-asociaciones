const Degree = require("./Degree");
const Student = require("./Student");


// Degree --> Student

    // R: Un estudiante (Student) pertenece a un Grado (Degree)
Student.belongsTo(Degree)

    // R: Un Grado (Degree) tiene muchos estudiantes (Student)
Degree.hasMany(Student)