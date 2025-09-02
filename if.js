// 1

let num = 0
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 2

let score = 59;
let grade = '';

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade: " + grade);


// 3

let skills = ["HTML", "CSS", "Javascript", "React"];

if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("Pass!");
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("Preliminary");
} else {
  console.log("Fail");
}