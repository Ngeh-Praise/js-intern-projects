const nameInput = document.getElementById("studentName");
const scoreInput = document.getElementById("studentScore");
const clearBtn =  document.getElementById("clearBtn");
const checkBtn = document.getElementById("checkBtn");
const resultdiv = document.getElementById("result");
const studentlist = document.getElementById("studentlist");

let students = [];

clearBtn.addEventListener("click", clearAll);
checkBtn.addEventListener("click", checkGrade);

function checkGrade() {
    let name= nameInput.value;
    let score= scoreInput.value;

    if (name==="" || score<0 || score >100){
        alert("please enter valid data");
        return;
    }
    let grade = "";
    if (score >= 90)grade="A";
    else if (score >= 80)grade= "B";
    else if (score >= 70)grade= "C";
    else if (score >= 60)grade= "D";
    else grade="F";

    resultdiv.innerText = `${name} ${score} -> ${grade}`;
    resultdiv.className = grade;

    students.push({name, score, grade});
    renderStudents ();
}
function renderStudents() {
    studentlist.innerHTML = "";
    students.forEach((student) => {
        const li = document.createElement("li");
        li.innerText = `${student.name}-${student.score} (${student.grade})`;
        li.classList.add(student.grade);
        studentlist.appendChild(li)
    });
};
function clearAll (){
    nameInput.value="";
    scoreInput.value="";
    resultdiv.innerText="";
    studentlist.innerHTML="";
    students=[];
}