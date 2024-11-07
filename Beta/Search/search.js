import { books } from "../books.js";

const booksTable = document.getElementsByClassName('books-section');
console.log(books);

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
const allBox = document.getElementById("branch-filter-box-all");
const cseBox = document.getElementById("branch-filter-box-cse");
const meBox = document.getElementById("branch-filter-box-me");
const ceBox = document.getElementById("branch-filter-box-ce");
const otherBox = document.getElementById("branch-filter-box-other");

function getCatagoryData(booksData, categoryName) {
    return booksData.filter(item => item.category.toLowerCase().includes(categoryName.toLowerCase()))
}

function filterCatagory(catagory) {
    const filterTitleName = document.getElementsByClassName("filterCatagoryName");
    if (catagory === "cse") {

        allBox.style.backgroundColor = "white";
        allBox.style.color = "black";
        cseBox.style.backgroundColor = "#4D4DFF";
        cseBox.style.color = "white";
        meBox.style.backgroundColor = "white";
        meBox.style.color = "black";
        ceBox.style.backgroundColor = "white";
        ceBox.style.color = "black";
        otherBox.style.backgroundColor = "white";
        otherBox.style.color = "black";

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
        allBox.style.backgroundColor = "white";
        allBox.style.color = "black";
        meBox.style.backgroundColor = "#4D4DFF";
        meBox.style.color = "white";
        cseBox.style.backgroundColor = "white";
        cseBox.style.color = "black";
        ceBox.style.backgroundColor = "white";
        ceBox.style.color = "black";
        otherBox.style.backgroundColor = "white";
        otherBox.style.color = "black";

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
        allBox.style.backgroundColor = "white";
        allBox.style.color = "black";
        ceBox.style.backgroundColor = "#4D4DFF";
        ceBox.style.color = "white";
        meBox.style.backgroundColor = "white";
        meBox.style.color = "black";
        cseBox.style.backgroundColor = "white";
        cseBox.style.color = "black";
        otherBox.style.backgroundColor = "white";
        otherBox.style.color = "black";

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
        allBox.style.backgroundColor = "white";
        allBox.style.color = "black";
        otherBox.style.backgroundColor = "#4D4DFF";
        otherBox.style.color = "white";
        meBox.style.backgroundColor = "white";
        meBox.style.color = "black";
        ceBox.style.backgroundColor = "white";
        ceBox.style.color = "black";
        cseBox.style.backgroundColor = "white";
        cseBox.style.color = "black";

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
        cseBox.style.backgroundColor = "white";
        cseBox.style.color = "black";
        allBox.style.backgroundColor = "#4D4DFF";
        allBox.style.color = "white";
        meBox.style.backgroundColor = "white";
        meBox.style.color = "black";
        ceBox.style.backgroundColor = "white";
        ceBox.style.color = "black";
        otherBox.style.backgroundColor = "white";
        otherBox.style.color = "black";

        filterTitleName[0].innerHTML = "All Books";
        booksTable[0].innerHTML = " ";
        allBooks(books);
    }
}

// function getDataFormAddbook(data) {
//     books.push(data);
// }