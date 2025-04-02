function calculategrade(marks){
let totalmarks = 0;
for (let i = 0; i < marks.length; i++){
    totalmarks += marks[i];
}


let averagemarks = totalmarks / marks.length;
let grade;

if(averagemarks >= 90) {
    grade = 'A';
} else if (averagemarks >= 75){
    grade = 'B';
} else if (averagemarks >= 50){
    grade = 'C' ;
}else {
    grade = 'F';
}

return { totalmarks, averagemarks, grade };
}

//getting user input

let numsubjects = parseInt(prompt("Enter the number of subjects"));
let marks = [ ];
for (let i = 0 ; i < numsubjects; i++){
    let mark = parseFloat(prompt(`Enter marks for subject ${i + 1}: `));
    marks.push(mark);
}

let result = calculategrade(marks);
console.log(`\nTotal marks: ${result.totalmarks}`);
console.log(`\nAverage marks: ${result.averagemarks}`);
console.log(`\nGrade: ${result.grade}`);