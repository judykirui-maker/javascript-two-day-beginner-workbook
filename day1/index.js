// Exercise 1: Student Details

const studentName="Ama";
const studentAge=20;
let mathematics=75;
let english=80;
let science=68;
let isRegistered=true;
console.log(studentName);
console.log(studentAge);
console.log(mathematics);
console.log(english);
console.log(science);
console.log(isRegistered);
mathematics=90;
console.log(mathematics);

// Exercise 2:Calculate a total 

const mathematics2=90;
const english2=85;
const science2=75;
const total2=mathematics2+english2+science2;
const Average2=total2 /3;
console.log("Total:", total2);
console.log("Average:", Average2);

// Exercise 3: Pass or fail

let mark=-120;
if(mark >= 50) {
    console.log("pass");
} else {
    console.log("fail");
}
if(mark<0||mark>100) {console.log("Error: Invalid mark");}
else if(mark>=50) {console.log("pass");}
else {console.log("fail");}

// Exercise 4: Write a function

function isPassed(Average)
{return Average >= 50;
}
console.log(isPassed(45));
console.log(isPassed(50));
console.log(isPassed(78));

function getGrade(Average)
{if(Average >= 80) {return "A";}
else if(Average >=70) {return "B";}
else if(Average >=60) {return "C";}
else if(Average >=50) {return "D";}
else {return "F";}
}
console.log(getGrade(45));
console.log(getGrade(50));
console.log(getGrade(78));

// Mini Program

const StudentName="Ama";
const Mathematics=75;
const English=85;
const Science=68;
const Total=Mathematics+English+Science;
const Average=Total/3;

let Grade;
if (Average >= 80) {
    console.log("Grade A");
}
     else if (Average >= 70) {
        console.log("Grade B");
     }
 else if (Average >= 60) {
    console.log("Grade C");
}
 else if (Average >= 50) {
    console.log("Grade D");
}
 else {
    console.log("Grade F");
}
let Result;

if (Average >= 50) {
  Result = "Pass";
} else {
Result = "Fail";
}
console.log("StudentName:", StudentName);
console.log("Mathematics:", Mathematics);
console.log("English:", English);
console.log("Science:", Science);
console.log("Total:", Total);
console.log("Average:", Average.toFixed(2));
console.log("Grade:", Grade);
console.log("Result:", Result);
