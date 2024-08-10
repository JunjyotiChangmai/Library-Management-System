const books = [
    {
        "isbn": "9781593279509",
        "title": "Eloquent JavaScript, Third Edition",
        "subtitle": "A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "published": "2018-12-04T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 472,
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "website": "http://eloquentjavascript.net/",
        "catagory": "Computer Science",
        "stock": "200"
    },
    {
        "isbn": "9781491943533",
        "title": "Practical Modern JavaScript",
        "subtitle": "Dive into ES6 and the Future of JavaScript",
        "author": "Nicolás Bevacqua",
        "published": "2017-07-16T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 334,
        "description": "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
        "website": "https://github.com/mjavascript/practical-modern-javascript",
        "catagory": "Mechanical Engineering",
        "stock": "0"
    },
    {
        "isbn": "9781593277574",
        "title": "Understanding ECMAScript 6",
        "subtitle": "The Definitive Guide for JavaScript Developers",
        "author": "Nicholas C. Zakas",
        "published": "2016-09-03T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 352,
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        "website": "https://leanpub.com/understandinges6/read",
        "catagory": "Computer Science",
        "stock": "200"
    },
    {
        "isbn": "9781449365035",
        "title": "Speaking JavaScript",
        "subtitle": "An In-Depth Guide for Programmers",
        "author": "Axel Rauschmayer",
        "published": "2014-04-08T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 460,
        "description": "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        "website": "http://speakingjs.com/",
        "catagory": "Civil Engineering",
        "stock": "200"
    },
    {
        "isbn": "9781449331818",
        "title": "Learning JavaScript Design Patterns",
        "subtitle": "A JavaScript and jQuery Developer's Guide",
        "author": "Addy Osmani",
        "published": "2012-08-30T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 254,
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
        "catagory": "Computer Science",
        "stock": "0"
    },
    {
        "isbn": "9798602477429",
        "title": "You Don't Know JS Yet",
        "subtitle": "Get Started",
        "author": "Kyle Simpson",
        "published": "2020-01-28T00:00:00.000Z",
        "publisher": "Independently published",
        "pages": 143,
        "description": "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
        "website": "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
        "catagory": "Computer Science",
        "stock": "200"
    },
    {
        "isbn": "9781484200766",
        "title": "Pro Git",
        "subtitle": "Everything you neeed to know about Git",
        "author": "Scott Chacon and Ben Straub",
        "published": "2014-11-18T00:00:00.000Z",
        "publisher": "Apress; 2nd edition",
        "pages": 458,
        "description": "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
        "website": "https://git-scm.com/book/en/v2",
        "catagory": "Civil Engineering",
        "stock": "200"
    },
    {
        "isbn": "9781484242216",
        "title": "Rethinking Productivity in Software Engineering",
        "subtitle": "",
        "author": "Caitlin Sadowski, Thomas Zimmermann",
        "published": "2019-05-11T00:00:00.000Z",
        "publisher": "Apress",
        "pages": 310,
        "description": "Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
        "website": "https://doi.org/10.1007/978-1-4842-4221-6",
        "catagory": "Computer Science",
        "stock": "0"
    }
]

const booksTable = document.getElementsByClassName('books-section');

function allBooks(getBooksData) {
    try {
        getBooksData.forEach(element => {
            //     const books = document.createElement('div');
        
            //     books.style.display = `flex`;
            //     books.style.padding = `15px 5px`;
            //     books.style.backgroundColor = `white`;
            //     books.style.borderRadius = `8px`;
            //     books.style.marginBottom = `16px`;
            //     books.style.boxShadow = `#ede7e7 0px 0px 3px`;
        
            //     books.innerHTML = `
            //     <div class="book-title-Box">${element.title}</div>
            //     <div class="book-author-Box">${element.author}</div>
            //     <div class="book-branch-Box">${element.catagory}</div>
            //     <div class="book-av-Box">${element.stock === "0" ? `<div class="dot-icon" style="background-color: salmon;"></div>Out of Stock` : `<div class="dot-icon"></div>Available`}</div>
            // `;
        
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${element.title}</td>
                <td>${element.author}</td>
                <td>${element.catagory}</td>
                <td>
                    <div class="book-av-Box">${element.stock === "0" ? `<div class="dot-icon" style="background-color: salmon;"></div>Out of Stock` : `<div class="dot-icon"></div>Available`}</div>
                </td>
            `;
        
                // booksTable[0].appendChild(books);
                booksTable[0].appendChild(newRow);
            })
    } catch (error) {
        console.log(error)
    }
    
}

allBooks(books);


const searchBtn = document.getElementsByClassName("search-btn")
const addBookBtn = document.getElementsByClassName("addBook-btn")
const addStuBtn = document.getElementsByClassName("addStu-btn")
const reportBtn = document.getElementsByClassName("report-btn")

var DisplaySearchData = document.getElementsByClassName("SearchBooks")
var DisplayAddBookForm = document.getElementsByClassName("AddBooksForm")
var DisplayAddStudentForm = document.getElementsByClassName("AddStudentForm")
var DisplayReportData = document.getElementsByClassName("ReportsData")

function searchBtnClick() {
    searchBtn[0].style.color = "#0007D6";
    addBookBtn[0].style.color = "#767272";
    addStuBtn[0].style.color = "#767272";
    reportBtn[0].style.color = "#767272";

    DisplaySearchData[0].style.display = "block";
    DisplayAddBookForm[0].style.display = "none";
    DisplayAddStudentForm[0].style.display = "none";
    DisplayReportData[0].style.display = "none";

}
function addBookBtnClick() {
    searchBtn[0].style.color = "#767272";
    addBookBtn[0].style.color = "#0007D6";
    addStuBtn[0].style.color = "#767272";
    reportBtn[0].style.color = "#767272";

    DisplaySearchData[0].style.display = "none";
    DisplayAddBookForm[0].style.display = "block";
    DisplayAddStudentForm[0].style.display = "none";
    DisplayReportData[0].style.display = "none";
}
function addStuBtnClick() {
    searchBtn[0].style.color = "#767272";
    addBookBtn[0].style.color = "#767272";
    addStuBtn[0].style.color = "#0007D6";
    reportBtn[0].style.color = "#767272";

    DisplaySearchData[0].style.display = "none";
    DisplayAddBookForm[0].style.display = "none";
    DisplayAddStudentForm[0].style.display = "block";
    DisplayReportData[0].style.display = "none";
}
function reportBtnClick() {
    searchBtn[0].style.color = "#767272";
    addBookBtn[0].style.color = "#767272";
    addStuBtn[0].style.color = "#767272";
    reportBtn[0].style.color = "#0007D6";

    DisplaySearchData[0].style.display = "none";
    DisplayAddBookForm[0].style.display = "none";
    DisplayAddStudentForm[0].style.display = "none";
    DisplayReportData[0].style.display = "block";
}



// searching working here---------------------------------------------------------------------------------------
function getBookName() {
    let book = document.getElementsByClassName("search")[0].value;
    let availableBooks = searchName(books, book);

    if (availableBooks[0] === undefined) {
        booksTable[0].innerHTML = " ";
        booksTable[0].innerHTML = `<div class="noBooks">No Books Found</div>`;
    }
    else {
        booksTable[0].innerHTML = " ";
        allBooks(availableBooks);
    }

}

function searchName(books, bookTitle) {
    return books.filter(item => item.title.toLowerCase().includes(bookTitle.toLowerCase()))
}

//Handling search when press ENTER key---------------------------------------------------------------------------
const searchOnKeyPress = document.getElementsByClassName("search");
searchOnKeyPress[0].addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementsByClassName("search-icon")[0].click();
    }
})



//Handle catagory filter branchwise-------------------------------------------------------------------------------------
function getCatagoryData(booksData, catagoryName) {
    return booksData.filter(item => item.catagory.toLowerCase().includes(catagoryName.toLowerCase()))
}

function filterCatagory(catagory) {
    const filterTitleName = document.getElementsByClassName("filterCatagoryName");
    if (catagory === "cse") {
        const result = getCatagoryData(books, 'Computer Science');
        filterTitleName[0].innerHTML = "CSE Books";
        if (result[0] === undefined) {
            booksTable[0].innerHTML = " ";
            booksTable[0].innerHTML = `<div class="noBooks">No Books Found</div>`;
        }
        else {
            booksTable[0].innerHTML = " ";
            allBooks(result);
        }
    }
    else if (catagory === "me") {
        const result = getCatagoryData(books, 'Mechanical Engineering');
        filterTitleName[0].innerHTML = "ME Books";
        if (result[0] === undefined) {
            booksTable[0].innerHTML = " ";
            booksTable[0].innerHTML = `<div class="noBooks">No Books Found</div>`;
        }
        else {
            booksTable[0].innerHTML = " ";
            allBooks(result);
        }
    }
    else if (catagory === "ce") {
        const result = getCatagoryData(books, 'Civil Engineering');
        filterTitleName[0].innerHTML = "CE Books";
        if (result[0] === undefined) {
            booksTable[0].innerHTML = " ";
            booksTable[0].innerHTML = `<div class="noBooks">No Books Found</div>`;
        }
        else {
            booksTable[0].innerHTML = " ";
            allBooks(result);
        }
    }
    else if (catagory === "others") {
        const result = getCatagoryData(books, 'Others');
        filterTitleName[0].innerHTML = "Other Books";
        if (result[0] === undefined) {
            booksTable[0].innerHTML = " ";
            booksTable[0].innerHTML = `<div class="noBooks">No Books Found</div>`;
        }
        else {
            booksTable[0].innerHTML = " ";
            allBooks(result);
        }
    }
    else if (catagory === "all") {
        filterTitleName[0].innerHTML = "All Books";
        booksTable[0].innerHTML = " ";
        allBooks(books);
    }
}



// AddStudent form data handle here----------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const issueDate = today.toISOString().split('T')[0];

    const expireDate = new Date(today);
    expireDate.setDate(expireDate.getDate() + 10);
    const expireDateString = expireDate.toISOString().split('T')[0];

    document.getElementById('issueDate').value = issueDate;
    document.getElementById('expireDate').value = expireDateString;
});

document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        rollno: document.getElementById('rollno').value,
        branch: document.getElementById('branch').value,
        semester: document.getElementById('semester').value,
        bookname: document.getElementById('bookname').value,
        issueDate: document.getElementById('issueDate').value,
        expireDate: document.getElementById('expireDate').value,
    };

    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData);

    // Optionally, you can do something with the JSON data here, like sending it to a server

    
});