let employees = JSON.parse(localStorage.getItem("employees")) || [];

document.getElementById("employeeForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const id = document.getElementById("id").value.trim();
  const department = document.getElementById("department").value.trim();

  if (employees.some(emp => emp.id === id)) {
    alert("Employee ID already exists!");
    return;
  }

  const newEmployee = {
    name,
    id,
    department,
    status: "Absent",
    attendanceCount: 0
  };
  employees.push(newEmployee);
  saveData();
  renderEmployees();
  updateDepartmentFilter();
  e.target.reset();
});

function saveData() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

function renderEmployees() {
  const deptFilter = document.getElementById("filterDept").value;
  const statusFilter = document.getElementById("filterStatus").value;
  const sortBy = document.getElementById("sortBy").value;

  let filtered = employees.filter(emp => {
    return (deptFilter === "all" || emp.department === deptFilter) &&
           (statusFilter === "all" || emp.status === statusFilter);
  });

  if (sortBy === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "attendance") {
    filtered.sort((a, b) => b.attendanceCount - a.attendanceCount);
  }

  const list = document.getElementById("employeeList");
  list.innerHTML = "";

  filtered.forEach(emp => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${emp.name}</strong> (ID: ${emp.id})<br>
      Dept: ${emp.department} | Status: ${emp.status} | Attendance: ${emp.attendanceCount} days<br>
      <button onclick="markAttendance('${emp.id}', 'Present')">Mark Present</button>
      <button onclick="markAttendance('${emp.id}', 'Absent')">Mark Absent</button>
    `;
    list.appendChild(div);
  });
}

function markAttendance(empId, status) {
  const emp = employees.find(e => e.id === empId);
  if (emp.status !== status) {
    emp.status = status;
    if (status === "Present") {
      emp.attendanceCount++;
    }
    saveData();
    renderEmployees();
  }
}

function updateDepartmentFilter() {
  const filter = document.getElementById("filterDept");
  const departments = [...new Set(employees.map(e => e.department))];
  filter.innerHTML = '<option value="all">All Departments</option>';
  departments.forEach(dep => {
    const option = document.createElement("option");
    option.value = dep;
    option.textContent = dep;
    filter.appendChild(option);
  });
}

// Initial load
updateDepartmentFilter();
renderEmployees();
