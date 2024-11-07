import {books} from "../books.js";

function searchBook() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query)
    );

    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'result-item';
            bookElement.innerHTML = `
                <strong>Title:</strong> ${book.title}<br>
                <strong>Stock:</strong> ${book.stock > 0 ? book.stock : 'Out of Stock'}
            `;
            
            bookElement.addEventListener('click', () => {
                document.getElementById("bookname").value = book.title;
                document.getElementById("bookid").value = book.bookid;
            });

            resultsContainer.appendChild(bookElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No books found matching your search criteria.</p>';
    }
}

document.getElementsByClassName("searchBtn")[0].addEventListener("click", searchBook);

document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const issueDate = today.toISOString().split('T')[0];

    const expireDate = new Date(today);
    expireDate.setDate(expireDate.getDate() + 10);
    const expireDateString = expireDate.toISOString().split('T')[0];

    document.getElementById('issueDate').value = issueDate;
    document.getElementById('expireDate').value = expireDateString;
});

document.getElementsByClassName('submit-btn')[0].addEventListener("click", (e) => {
    e.preventDefault();
    let bookName = document.getElementById('bookname').value;
    let rollNo = document.getElementById('rollno').value;
    let branch = document.getElementById('branch').value;
    let semester = document.getElementById('semester').value;
    let name = document.getElementById('name').value;
    let issueDate = document.getElementById('issueDate').value;
    let expireDate = document.getElementById('expireDate').value;
    let bookid = document.getElementById('bookid').value;

    const userData = {
        bookName: bookName,
        rollNo: rollNo,
        branch: branch,
        semester: semester,
        name: name,
        issueDate: issueDate,
        expireDate: expireDate,
        bookid: bookid
    }
    console.log(userData)
    
})