const books = [
    {
        "title": "Computer Networks",
        "author": "Andrew S. Tanenbaum",
        "stock": 6,
        "category": "Computer Science"
    },
    {
        "title": "Operating System Concepts",
        "author": "Abraham Silberschatz",
        "stock": 3,
        "category": "Computer Science"
    },
    {
        "title": "Structural Analysis",
        "author": "Russell C. Hibbeler",
        "stock": 0,
        "category": "Civil Engineering"
    },
    {
        "title": "Mechanics of Materials",
        "author": "Ferdinand P. Beer",
        "stock": 6,
        "category": "Civil Engineering"
    },
    {
        "title": "Engineering Mechanics: Statics",
        "author": "J.L. Meriam",
        "stock": 5,
        "category": "Civil Engineering"
    },
    {
        "title": "Fluid Mechanics",
        "author": "Frank M. White",
        "stock": 4,
        "category": "Mechanical Engineering"
    },
    {
        "title": "Engineering Mechanics: Dynamics",
        "author": "J.L. Meriam",
        "stock": 0,
        "category": "Mechanical Engineering"
    },
    {
        "title": "Thermodynamics: An Engineering Approach",
        "author": "Yunus A. Çengel",
        "stock": 8,
        "category": "Mechanical Engineering"
    },
    {
        "title": "Introduction to Algorithms",
        "author": "Thomas H. Cormen",
        "stock": 5,
        "category": "Computer Science"
    },
    {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell",
        "stock": 0,
        "category": "Computer Science"
    },
    {
        "title": "Computer Networks",
        "author": "Andrew S. Tanenbaum",
        "stock": 6,
        "category": "Computer Science"
    },
    {
        "title": "Operating System Concepts",
        "author": "Abraham Silberschatz",
        "stock": 3,
        "category": "Computer Science"
    },
    {
        "title": "Structural Analysis",
        "author": "Russell C. Hibbeler",
        "stock": 3,
        "category": "Civil Engineering"
    },
    {
        "title": "Mechanics of Materials",
        "author": "Ferdinand P. Beer",
        "stock": 6,
        "category": "Civil Engineering"
    },
    {
        "title": "Engineering Mechanics: Statics",
        "author": "J.L. Meriam",
        "stock": 5,
        "category": "Civil Engineering"
    },
    {
        "title": "Fluid Mechanics",
        "author": "Frank M. White",
        "stock": 4,
        "category": "Mechanical Engineering"
    },
    {
        "title": "Engineering Mechanics: Dynamics",
        "author": "J.L. Meriam",
        "stock": 7,
        "category": "Mechanical Engineering"
    },
    {
        "title": "Thermodynamics: An Engineering Approach",
        "author": "Yunus A. Çengel",
        "stock": 8,
        "category": "Mechanical Engineering"
    },
    {
        "title": "Introduction to Algorithms",
        "author": "Thomas H. Cormen",
        "stock": 5,
        "category": "Computer Science"
    },
    {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell",
        "stock": 4,
        "category": "Computer Science"
    },
    {
        "title": "Computer Networks",
        "author": "Andrew S. Tanenbaum",
        "stock": 6,
        "category": "Computer Science"
    },
    {
        "title": "Operating System Concepts",
        "author": "Abraham Silberschatz",
        "stock": 0,
        "category": "Computer Science"
    }
]

const booksTable = document.getElementsByClassName('books-section');

function allBooks(getBooksData) {
    try {
        getBooksData.forEach(element => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${element.title}</td>
                <td>${element.author}</td>
                <td>${element.category}</td>
                <td>
                    <div class="book-av-Box">${element.stock === 0 ? `<div class="dot-icon" style="background-color: salmon;"></div>Out of Stock` : `<div class="dot-icon"></div>Available`}</div>
                </td>
            `;
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
function getCatagoryData(booksData, categoryName) {
    return booksData.filter(item => item.category.toLowerCase().includes(categoryName.toLowerCase()))
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

});