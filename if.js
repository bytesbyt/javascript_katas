// 1

let num = -1
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 2

let score = 90;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";

console.log("Grade: " + grade);

// 3

let skills = ["HTML", "CSS", "Javascript", "React"];
let hasJS = skills.includes("Javascript");
let hasReact = skills.includes("React");

if (hasJS && hasReact) {
  console.log("Pass!");
} else if (hasJS || hasReact) {
  console.log("Preliminary");
} else {
  console.log("Fail");
}