function addRowToTable(name, rollNo, branch, semester, bookName, issueDate, expireDate, status) {
    const table = document.getElementById('book-rent-list');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${rollNo}</td>
        <td>${branch}</td>
        <td>${semester}</td>
        <td>${bookName}</td>
        <td>${issueDate}</td>
        <td>${expireDate}</td>
        <td class="status-cell">${status}</td>
        <td>
            <div class="return-buttons" style="display: ${status === 'issued' ? 'block' : 'none'};">
                <button class="yes-btn">Yes</button>
                <button class="no-btn">No</button>
            </div>
        </td>
    `;
    
    table.appendChild(newRow);

    // Attach event listeners to the buttons
    const yesBtn = newRow.querySelector('.yes-btn');
    const noBtn = newRow.querySelector('.no-btn');

    yesBtn.addEventListener('click', () => {
        updateStatus(newRow, 'returned');
    });

    noBtn.addEventListener('click', () => {
        // Optionally, you can add an action for the No button
    });

    updateDashboard(status);
}

function updateStatus(row, newStatus) {
    console.log(row)
    const statusCell = row.querySelector('.status-cell');
    const returnButtons = row.querySelector('.return-buttons');

    // Update the status in the table
    statusCell.textContent = newStatus;

    // Hide the return buttons after updating the status
    returnButtons.style.display = 'none';

    // Update the dashboard counts
    updateDashboard('updateActiveAndReturnCount');
}

function updateDashboard(status) {
    const totalIssued = document.getElementById('total-issued');
    const totalReturned = document.getElementById('total-returned');
    const activeRentals = document.getElementById('active-rentals');

    let issuedCount = parseInt(totalIssued.textContent);
    let returnedCount = parseInt(totalReturned.textContent);
    let activeCount = parseInt(activeRentals.textContent);

    if (status === 'issued') {
        issuedCount++;
        activeCount++;
    } else if (status === 'returned') {
        issuedCount++;
        returnedCount++;
    } else if (status === 'updateActiveAndReturnCount') {
        returnedCount++;
        activeCount--;
    }

    totalIssued.textContent = issuedCount;
    totalReturned.textContent = returnedCount;
    activeRentals.textContent = activeCount;
}

// Demo data
const demoData = [
    { name: 'Junjyoti Changmai', rollNo: '19875643986401', branch: 'CSE', semester: '5', bookName: 'Data Structures', issueDate: '2024-08-01', expireDate: '2024-08-15', status: 'issued' },
    { name: 'Jane Smith', rollNo: '10987564398642', branch: 'ECE', semester: '5', bookName: 'Digital Electronics', issueDate: '2024-07-25', expireDate: '2024-08-10', status: 'issued' },
    { name: 'Alice Johnson', rollNo: '19875643986403', branch: 'IT', semester: '4', bookName: 'Database Management', issueDate: '2024-08-05', expireDate: '2024-08-20', status: 'issued' },
    { name: 'Bob Brown', rollNo: '19875643986404', branch: 'ME', semester: '7', bookName: 'Thermodynamics', issueDate: '2024-07-20', expireDate: '2024-08-05', status: 'returned' },
    { name: 'Charlie Davis', rollNo: '10987564398645', branch: 'CSE', semester: '8', bookName: 'Machine Learning', issueDate: '2024-08-02', expireDate: '2024-08-17', status: 'issued' },
    { name: 'Eve Williams', rollNo: '10987564398646', branch: 'ECE', semester: '6', bookName: 'Microprocessors', issueDate: '2024-08-03', expireDate: '2024-08-18', status: 'issued' },
    { name: 'Frank Harris', rollNo: '10987564398647', branch: 'CE', semester: '5', bookName: 'Structural Analysis', issueDate: '2024-07-30', expireDate: '2024-08-14', status: 'issued' },
    { name: 'Grace Clark', rollNo: '10898756439864', branch: 'CSE', semester: '4', bookName: 'Operating Systems', issueDate: '2024-07-28', expireDate: '2024-08-12', status: 'returned' },
    { name: 'Henry Martin', rollNo: '10998756439864', branch: 'IT', semester: '7', bookName: 'Network Security', issueDate: '2024-08-04', expireDate: '2024-08-19', status: 'issued' },
    { name: 'Ivy Thompson', rollNo: '11098756439864', branch: 'ME', semester: '6', bookName: 'Fluid Mechanics', issueDate: '2024-07-22', expireDate: '2024-08-06', status: 'returned' },
    { name: 'Charlie Davis', rollNo: '10987564398645', branch: 'CSE', semester: '8', bookName: 'Machine Learning', issueDate: '2024-08-02', expireDate: '2024-08-17', status: 'issued' },
    { name: 'Eve Williams', rollNo: '10987564398646', branch: 'ECE', semester: '6', bookName: 'Microprocessors', issueDate: '2024-08-03', expireDate: '2024-08-18', status: 'issued' },
    { name: 'Frank Harris', rollNo: '10987564398647', branch: 'CE', semester: '5', bookName: 'Structural Analysis', issueDate: '2024-07-30', expireDate: '2024-08-14', status: 'issued' },
    { name: 'Grace Clark', rollNo: '10898756439864', branch: 'CSE', semester: '4', bookName: 'Operating Systems', issueDate: '2024-07-28', expireDate: '2024-08-12', status: 'returned' },
    { name: 'Henry Martin', rollNo: '10998756439864', branch: 'IT', semester: '7', bookName: 'Network Security', issueDate: '2024-08-04', expireDate: '2024-08-19', status: 'issued' },
    { name: 'Ivy Thompson', rollNo: '11098756439864', branch: 'ME', semester: '6', bookName: 'Fluid Mechanics', issueDate: '2024-07-22', expireDate: '2024-08-06', status: 'returned' },
    { name: 'Charlie Davis', rollNo: '10987564398645', branch: 'CSE', semester: '8', bookName: 'Machine Learning', issueDate: '2024-08-02', expireDate: '2024-08-17', status: 'issued' },
    { name: 'Eve Williams', rollNo: '10987564398646', branch: 'ECE', semester: '6', bookName: 'Microprocessors', issueDate: '2024-08-03', expireDate: '2024-08-18', status: 'issued' },
    { name: 'Frank Harris', rollNo: '10987564398647', branch: 'CE', semester: '5', bookName: 'Structural Analysis', issueDate: '2024-07-30', expireDate: '2024-08-14', status: 'issued' },
    { name: 'Grace Clark', rollNo: '10898756439864', branch: 'CSE', semester: '4', bookName: 'Operating Systems', issueDate: '2024-07-28', expireDate: '2024-08-12', status: 'returned' },
    { name: 'Henry Martin', rollNo: '10998756439864', branch: 'IT', semester: '7', bookName: 'Network Security', issueDate: '2024-08-04', expireDate: '2024-08-19', status: 'issued' },
    { name: 'Ivy Thompson', rollNo: '11098756439864', branch: 'ME', semester: '6', bookName: 'Fluid Mechanics', issueDate: '2024-07-22', expireDate: '2024-08-06', status: 'returned' },
];

// Populate table with demo data
demoData.forEach(data => {
    addRowToTable(data.name, data.rollNo, data.branch, data.semester, data.bookName, data.issueDate, data.expireDate, data.status);
});


