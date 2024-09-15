// Data for info boxes
export const infoBoxes = [
    { title: "Benefitted Students", value: "5,000", description: "These students have successfully received scholarships, helping them pursue higher education." },
    { title: "Scholarship Distributed", value: "₹50,000,000", description: "The total amount of scholarships distributed to eligible students under the PMSSS program." },
    { title: "Pending Students", value: "1,000", description: "These students are in the process of verifying their details to receive the scholarship." },
    { title: "Total Institutions", value: "500", description: "Educational institutions across the country participating in the PMSSS program." },
    { title: "Average Scholarship", value: "₹10,000", description: "The average scholarship amount awarded to each student." },
    { title: "Success Rate", value: "95%", description: "The percentage of students who have successfully received scholarships." }
  ];
  
  // Student data
  export let students = [
    { id: 1, name: "Manya Sharma", studentId: "123456", course: "B.Tech IT", bank: "ABC Bank", accountNo: "9876543210", scholarshipPercentage: 100 },
    { id: 2, name: "Rohit Gupta", studentId: "654321", course: "B.Sc Physics", bank: "XYZ Bank", accountNo: "1234567890", scholarshipPercentage: 100 },
    { id: 3, name: "Simran Patel", studentId: "789456", course: "B.Com", bank: "PQR Bank", accountNo: "9876543201", scholarshipPercentage: 100 },
    { id: 4, name: "Aditya Mehta", studentId: "321654", course: "B.E Civil", bank: "LMN Bank", accountNo: "1234567889", scholarshipPercentage: 100 },
    { id: 5, name: "Anjali Desai", studentId: "456789", course: "BBA", bank: "DEF Bank", accountNo: "9876543198", scholarshipPercentage: 100 }
  ];
  
  // Function to create info boxes
  export function createInfoBoxes() {
    const infoBoxesContainer = document.getElementById('infoBoxes');
    if (infoBoxesContainer) {
      infoBoxesContainer.innerHTML = ''; // Clear existing content
      infoBoxes.forEach(box => {
        const boxElement = document.createElement('div');
        boxElement.className = 'bg-white shadow-md rounded-lg p-10 hover:shadow-lg transition-shadow duration-300 text-center w-full md:w-64 lg:w-80 h-61';
        boxElement.innerHTML = `
          <h2 class="text-xl font-semibold mb-4">${box.title}</h2>
          <p class="text-4xl font-bold text-blue-600">${box.value}</p>
          <p class="text-gray-600 mt-4">${box.description}</p>
        `;
        infoBoxesContainer.appendChild(boxElement);
      });
    }
  }
  
  // Function to create student table rows
  export function createStudentRows() {
    const studentTableBody = document.getElementById('studentTableBody');
    if (studentTableBody) {
      studentTableBody.innerHTML = ''; // Clear existing content
      students.forEach(student => {
        const row = document.createElement('tr');
        row.className = 'border-b hover:bg-gray-100';
        row.innerHTML = `
          <td class="p-3">${student.name}</td>
          <td class="p-3">Student ID: ${student.studentId}<br>Course: ${student.course}</td>
          <td class="p-3">Bank: ${student.bank}<br>Account No: ${student.accountNo}</td>
          <td class="p-3">
            <select id="scholarship-${student.id}" class="border rounded p-1" onchange="handleScholarshipChange(${student.id}, this.value)">
              <option value="100" ${student.scholarshipPercentage === 100 ? 'selected' : ''}>100%</option>
              <option value="75" ${student.scholarshipPercentage === 75 ? 'selected' : ''}>75%</option>
              <option value="50" ${student.scholarshipPercentage === 50 ? 'selected' : ''}>50%</option>
              <option value="25" ${student.scholarshipPercentage === 25 ? 'selected' : ''}>25%</option>
            </select>
          </td>
          <td class="p-3">
            <button onclick="handleDisburse(${student.id})" class="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Disburse Scholarship
            </button>
          </td>
        `;
        studentTableBody.appendChild(row);
      });
    }
  }
  
  
  // Function to show alerts
  export function showAlert(message) {
    const alertContainer = document.getElementById('alertContainer');
    const alertElement = document.createElement('div');
    alertElement.className = 'bg-blue-700 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-0 max-w-md';
    alertElement.style.position = 'fixed';
    alertElement.style.bottom = '4rem'; // Move it 4rem above the bottom
    alertElement.style.left = '1rem'; // Keep it left-aligned as before
    alertElement.innerHTML = `
      <div class="flex items-center">
        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p>${message}</p>
      </div>
    `;
  
    alertContainer.appendChild(alertElement);
    alertContainer.classList.remove('hidden');
  
    // Fade in
    setTimeout(() => {
      alertElement.classList.add('opacity-100');
    }, 10);
  
    // Fade out and remove after 2.5 seconds
    setTimeout(() => {
      alertElement.classList.remove('opacity-100');
      setTimeout(() => {
        alertContainer.removeChild(alertElement);
        if (alertContainer.children.length === 0) {
          alertContainer.classList.add('hidden');
        }
      }, 300);
    }, 2500);
  }
  
  // Function to handle scholarship percentage change
  export function handleScholarshipChange(id, percentage) {
  const student = students.find(s => s.id === id);
  if (student) {
    student.scholarshipPercentage = parseInt(percentage, 10); // Update percentage in the array
    console.log(`Scholarship percentage for ${student.name} changed to ${percentage}%`);
    
    // Re-render the student table to reflect the changes
    createStudentRows(); 

    // Optionally update the info boxes if necessary
    updateInfoBoxes();
  }
}
window.handleScholarshipChange = handleScholarshipChange
  
  // Function to handle scholarship disbursement
  export function handleDisburse(id) {
    const student = students.find(s => s.id === id);
    if (student) {
      showAlert(`Payment process activated for student ${student.name} with ${student.scholarshipPercentage}% scholarship.`);
      student.scholarshipDisbursed = true;
      updateInfoBoxes(); // Update info boxes to reflect changes
      createStudentRows(); // Refresh the student table
    }
  }
  window.handleDisburse = handleDisburse;
  
  // Function to update info boxes based on current data
  export function updateInfoBoxes() {
    const benefittedStudents = students.filter(s => s.scholarshipDisbursed).length;
    const totalScholarship = students.reduce((total, s) => total + (s.scholarshipDisbursed ? s.scholarshipPercentage : 0), 0) * 1000; // Assuming ₹1000 per percentage point
    const pendingStudents = students.length - benefittedStudents;
  
    infoBoxes[0].value = benefittedStudents.toString();
    infoBoxes[1].value = `₹${totalScholarship.toLocaleString()}`;
    infoBoxes[2].value = pendingStudents.toString();
    infoBoxes[4].value = benefittedStudents > 0 ? `₹${Math.round(totalScholarship / benefittedStudents).toLocaleString()}` : "₹0";
    infoBoxes[5].value = `${Math.round((benefittedStudents / students.length) * 100)}%`;
  
    createInfoBoxes(); // Refresh the info boxes
  }
  