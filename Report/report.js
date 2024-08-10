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

    // Update dashboard cards
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

// const books = [
//     {
//         "isbn": "9781593279509",
//         "title": "Eloquent JavaScript, Third Edition",
//         "subtitle": "A Modern Introduction to Programming",
//         "author": "Marijn Haverbeke",
//         "published": "2018-12-04T00:00:00.000Z",
//         "publisher": "No Starch Press",
//         "pages": 472,
//         "description": "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
//         "website": "http://eloquentjavascript.net/",
//         "catagory": "Computer Science",
//         "stock": "200"
//     },
//     {
//         "isbn": "9781491943533",
//         "title": "Practical Modern JavaScript",
//         "subtitle": "Dive into ES6 and the Future of JavaScript",
//         "author": "Nicolás Bevacqua",
//         "published": "2017-07-16T00:00:00.000Z",
//         "publisher": "O'Reilly Media",
//         "pages": 334,
//         "description": "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
//         "website": "https://github.com/mjavascript/practical-modern-javascript",
//         "catagory": "Mechanical Engineering",
//         "stock": "0"
//     },
//     {
//         "isbn": "9781593277574",
//         "title": "Understanding ECMAScript 6",
//         "subtitle": "The Definitive Guide for JavaScript Developers",
//         "author": "Nicholas C. Zakas",
//         "published": "2016-09-03T00:00:00.000Z",
//         "publisher": "No Starch Press",
//         "pages": 352,
//         "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
//         "website": "https://leanpub.com/understandinges6/read",
//         "catagory": "Computer Science",
//         "stock": "200"
//     },
//     {
//         "isbn": "9781449365035",
//         "title": "Speaking JavaScript",
//         "subtitle": "An In-Depth Guide for Programmers",
//         "author": "Axel Rauschmayer",
//         "published": "2014-04-08T00:00:00.000Z",
//         "publisher": "O'Reilly Media",
//         "pages": 460,
//         "description": "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
//         "website": "http://speakingjs.com/",
//         "catagory": "Civil Engineering",
//         "stock": "200"
//     },
//     {
//         "isbn": "9781449331818",
//         "title": "Learning JavaScript Design Patterns",
//         "subtitle": "A JavaScript and jQuery Developer's Guide",
//         "author": "Addy Osmani",
//         "published": "2012-08-30T00:00:00.000Z",
//         "publisher": "O'Reilly Media",
//         "pages": 254,
//         "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
//         "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
//         "catagory": "Computer Science",
//         "stock": "0"
//     },
//     {
//         "isbn": "9798602477429",
//         "title": "You Don't Know JS Yet",
//         "subtitle": "Get Started",
//         "author": "Kyle Simpson",
//         "published": "2020-01-28T00:00:00.000Z",
//         "publisher": "Independently published",
//         "pages": 143,
//         "description": "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
//         "website": "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
//         "catagory": "Computer Science",
//         "stock": "200"
//     },
//     {
//         "isbn": "9781484200766",
//         "title": "Pro Git",
//         "subtitle": "Everything you neeed to know about Git",
//         "author": "Scott Chacon and Ben Straub",
//         "published": "2014-11-18T00:00:00.000Z",
//         "publisher": "Apress; 2nd edition",
//         "pages": 458,
//         "description": "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
//         "website": "https://git-scm.com/book/en/v2",
//         "catagory": "Civil Engineering",
//         "stock": "200"
//     },
//     {
//         "isbn": "9781484242216",
//         "title": "Rethinking Productivity in Software Engineering",
//         "subtitle": "",
//         "author": "Caitlin Sadowski, Thomas Zimmermann",
//         "published": "2019-05-11T00:00:00.000Z",
//         "publisher": "Apress",
//         "pages": 310,
//         "description": "Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
//         "website": "https://doi.org/10.1007/978-1-4842-4221-6",
//         "catagory": "Computer Science",
//         "stock": "0"
//     }
// ]

// function addBookRowToTable(books) {
//     const table = document.getElementById('book-rent-list');

//     books.forEach(element => {
        
//         const newRow = document.createElement('tr');
//         newRow.innerHTML = `
//             <td>${element.title}</td>
//             <td>${element.author}</td>
//             <td>${element.catagory}</td>
//             <td>
//                <div class="book-av-Box">${element.stock === "0" ? `<div class="dot-icon" style="background-color: salmon;"></div>Out of Stock` : `<div class="dot-icon"></div>Available`}</div>
//             </td>
//         `;
//         table.appendChild(newRow);
//     });
    
// }

// addBookRowToTable(books);
// // books.forEach(data => addBookRowToTable(title, author, catagory, stock))
