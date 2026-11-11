// Exercise 5: Class list
const studentNames = ["Ama", "Kwame", "Akosua", "Yaw", "Abena"];
console.log(studentNames[0]); 
console.log(studentNames[studentNames.length - 1]);
studentNames.push("Kofi");
const removedStudent = studentNames.pop();
console.log("Removed Student:", removedStudent);
console.log("Final class list:", studentNames);

// Exercise 6: Student record
 
const student = {
    name: "Ama",
    age: 20,
    mathematics: 75,
    english: 80,
    science: 65
};
console.log(student.name);
console.log(student.age);
console.log(student.mathematics);
console.log(student.english);
console.log(student.science);
student.age= 21;
console.log(student.age);

// Exercise 7: Print the class list

const students = [
   { name: "Ama",
        age: 20,  
      mathematics: 75,
        english: 80,
        science: 68
    },
    { name: "Kwame",
        age: 22,
        mathematics: 40,
        english: 55,
        science: 45
    },
    {name: "Akosua",
        age: 21,
        mathematics: 90,
        english: 85,
        science: 95
    }
];
console.log(students);
console.log(students[2].name);

for (const student of students) 
    {  console.log(student.name);
    }
   for (const student of students)
     { console.log(student.name, student.mathematics);
     }
    for (const student of students)
         {  const total = student.mathematics + student.english + student.science;
                const average = total / 3;
                  console.log(student.name, average);
         }
         let passedStudents = 0;
         for (const student of students) 
            {const total = student.mathematics + student.english + student.science;
                const average = total / 3;
                if (average >= 50) {
                    passedStudents++;
                }
            }
            console.log("Students with an average of at least 50:", passedStudents);

          // Exercise 8: Useful Array Methods
          
          const foundStudent = students.find(student => student.name === "Kwame");
          console.log(foundStudent);
          const mathPassStudents = students.filter(student => student.mathematics >= 50);
          console.log(mathPassStudents);
         const studentNamesList = students.map(student => student.name);
          console.log(studentNamesList);


   // FINAL PROJECT: STUDENT GRADE MANAGEMENT SYSTEM 
   
   // STEP 1: CREATE STUDENT RECORDS

const projectStudents = [
    {
        name: "Ama",
        mathematics: 75,
        english: 80,
        science: 65
    },
    {
        name: "Kwame",
        mathematics: 40,
        english: 55,
        science: 45
    },
    {
        name: "Akosua",
        mathematics: 90,
        english: 85,
        science: 95
    },
    {
        name: "Yaw",
        mathematics: 50,
        english: 50,
        science: 50
    }
];

// STEP 2: ADD A STUDENT

function addStudent(name, mathematics, english, science) {
    const marks = [mathematics, english, science];

    if (!name.trim() || marks.some(mark =>
        typeof mark !== "number" || mark < 0 || mark > 100
    )) {
        console.log("Invalid student details or marks.");
        return;
    }

    const newStudent = {
        name: name,
        mathematics: mathematics,
        english: english,
        science: science
    };

    projectStudents.push(newStudent);
    console.log(name + " has been added.");
}

// STEP 3: CALCULATE AVERAGE

function calculateAverage(student) {
    const total =
        student.mathematics +
        student.english +
        student.science;

    return total / 3;
}

// STEP 4: CALCULATE GRADE

function calculateGrade(average) {
    if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// STEP 5: PASS OR FAIL

function getPassStatus(average) {
    if (average >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// STEP 6: DISPLAY ALL STUDENTS

function displayStudents() {
    for (const student of projectStudents) {
        const average = calculateAverage(student);
        const grade = calculateGrade(average);
        const result = getPassStatus(average);

        console.log(
            student.name,
            "Average:", average.toFixed(2),
            "Grade:", grade,
            "Result:", result
        );
    }
}

// STEP 7: FIND A STUDENT

function findStudent(name) {
    const found = projectStudents.find(
        student => student.name.toLowerCase() === name.toLowerCase()
    );

    if (found) {
        console.log("Student found:", found);
    } else {
        console.log("Student not found.");
    }

    return found;
}

// STEP 8: FIND THE TOP STUDENT

function getTopStudent() {
    
    if (projectStudents.length === 0) {
        console.log("There are no students.");
        return [];
    }

    let highestAverage = calculateAverage(projectStudents[0]);

    for (const student of projectStudents) {
        const average = calculateAverage(student);

        if (average > highestAverage) {
            highestAverage = average;
        }
    }

    const topStudents = projectStudents.filter(
        student => calculateAverage(student) === highestAverage
    );

    console.log("Top student(s):", topStudents);
    return topStudents;
}

// STEP 9: TEST THE PROGRAM

addStudent("Nia", 70, 75, 80);

console.log("ALL STUDENT RESULTS:");
displayStudents();

console.log("SEARCH FOR KWAME:");
findStudent("Kwame");

console.log("SEARCH FOR A STUDENT WHO DOES NOT EXIST:");
findStudent("Kofi");

console.log("TOP STUDENT:");
getTopStudent();
addStudent("Test Student", -5, 70, 80);
addStudent("Test Student 2", 105, 70, 80);
console.log("Empty array test:", getTopStudent.call({}));
addStudent("Mina", 90, 85, 95);
getTopStudent();
const savedStudents = [...projectStudents];
projectStudents.length = 0;
getTopStudent();
projectStudents.push(...savedStudents);
