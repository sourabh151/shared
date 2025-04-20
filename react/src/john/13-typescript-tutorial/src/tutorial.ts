function createStudent(student: { id: number; name: string, email?: string }) {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
  console.log(student.email || 'no email');
  
}

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com',
};

createStudent(newStudent);
createStudent({ id: 1, name: 'bob'});