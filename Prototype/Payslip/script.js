document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  function renderCalendar(month, year) {
    const date = new Date(year, month);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let html = '<table class="table table-bordered"><thead><tr>';

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(d => html += `<th>${d}</th>`);
    html += '</tr></thead><tbody><tr>';

    let firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
      html += '<td></td>';
    }

    for (let d = 1; d <= daysInMonth; d++) {
      let fullDate = new Date(year, month, d);
      if ((firstDay + d - 1) % 7 === 0) html += '</tr><tr>';
      let todayCheck = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
      html += `<td class="${todayCheck ? 'bg-warning rounded' : ''}" style="cursor:pointer;" onclick="alert('Selected: ${d}-${month + 1}-${year}')">${d}</td>`;
    }

    html += '</tr></tbody></table>';
    calendarEl.innerHTML = html;
  }

  renderCalendar(currentMonth, currentYear);
});
document.getElementById('payrollForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Payroll submitted successfully!');
});


//Download PDF file

  async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Payroll Summary", 20, 20);
    doc.text("Employee Name: John Doe", 20, 30);
    doc.text("Salary: $5000", 20, 40);
    // Add more form data here...

    doc.save("payroll.pdf");
  }

