function calculateEMI() {
  const principal = parseFloat(document.getElementById('amount').value);
  const annualRate = parseFloat(document.getElementById('interest').value);
  const years = parseFloat(document.getElementById('years').value);

  if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate <= 0 || years <= 0) {
    alert("Please enter valid input values.");
    return;
  }

  const monthlyRate = annualRate / 12 / 100;
  const numPayments = years * 12;

  // EMI formula
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
              (Math.pow(1 + monthlyRate, numPayments) - 1);

  const totalPayable = emi * numPayments;

  document.getElementById('emi').textContent = emi.toFixed(2);
  document.getElementById('total').textContent = totalPayable.toFixed(2);
}
