import { users } from "../user.js";

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

// Populate table with demo data
users.forEach(data => {
    addRowToTable(data.name, data.rollNo, data.branch, data.semester, data.bookName, data.issueDate, data.expireDate, data.status);
});


