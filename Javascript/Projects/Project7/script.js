let students = JSON.parse(localStorage.getItem("students")) || [];
let editingIndex = null;

// Render table
function renderStudents(data = students) {
  const tableBody = document.querySelector("#studentTable tbody");
  tableBody.innerHTML = "";

  data.forEach((student, index) => {
    const row = `<tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.class}</td>
      <td>${student.grade}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">Edit</button>
        <button class="delete" onclick="deleteStudent(${index})">Delete</button>
      </td>
    </tr>`;
    tableBody.innerHTML += row;
  });

  localStorage.setItem("students", JSON.stringify(students));
}

// Add or Update student
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const classVal = document.getElementById("class").value.trim();
  const grade = document.getElementById("grade").value.trim();

  if (!name || !age || !classVal || !grade) return;

  const student = { name, age, class: classVal, grade };

  if (editingIndex === null) {
    students.push(student);
  } else {
    students[editingIndex] = student;
    editingIndex = null;
  }

  document.getElementById("studentForm").reset();
  renderStudents();
}

// Edit student
function editStudent(index) {
  const s = students[index];
  document.getElementById("name").value = s.name;
  document.getElementById("age").value = s.age;
  document.getElementById("class").value = s.class;
  document.getElementById("grade").value = s.grade;
  editingIndex = index;
}

// Delete student
function deleteStudent(index) {
  if (confirm("Are you sure?")) {
    students.splice(index, 1);
    renderStudents();
  }
}

// Search student
function searchStudent() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = students.filter(s => s.name.toLowerCase().includes(query));
  renderStudents(filtered);
}

// Initial load
renderStudents();
