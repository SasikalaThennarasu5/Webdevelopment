const dragArea = document.getElementById('dragArea');
const fileInput = document.getElementById('fileInput');
const previewArea = document.getElementById('previewArea');
const fileDetails = document.getElementById('fileDetails');
const filePreview = document.getElementById('filePreview');

// Prevent default behaviors for drag events
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dragArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
});

// Highlight drop area on dragover
dragArea.addEventListener('dragover', () => {
  dragArea.classList.add('dragover');
});

// Remove highlight on dragleave
dragArea.addEventListener('dragleave', () => {
  dragArea.classList.remove('dragover');
});

// Handle dropped files
dragArea.addEventListener('drop', (e) => {
  dragArea.classList.remove('dragover');
  const files = e.dataTransfer.files;
  handleFiles(files);
});

// Open file dialog on click
dragArea.addEventListener('click', () => {
  fileInput.click();
});

// Handle file selected from file input
fileInput.addEventListener('change', () => {
  const files = fileInput.files;
  handleFiles(files);
});

// Handle and preview files
function handleFiles(files) {
  if (files.length === 0) return;

  const file = files[0];
  previewArea.classList.remove('d-none');

  fileDetails.innerHTML = `
    <strong>Name:</strong> ${file.name}<br>
    <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB
  `;

  filePreview.innerHTML = ''; // Clear previous preview

  if (file.type.startsWith('image/')) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    filePreview.appendChild(img);
  } else {
    filePreview.innerHTML = '<p class="text-muted">No preview available for this file type.</p>';
  }

  simulateUpload(file);
}

// Simulate upload progress
function simulateUpload(file) {
  console.log(`Uploading: ${file.name} (${file.size} bytes)...`);

  setTimeout(() => {
    console.log(`Upload complete: ${file.name}`);
    alert('Upload simulated successfully!');
  }, 1500); // Simulate 1.5 second upload
}
