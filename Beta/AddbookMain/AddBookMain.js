document.getElementById("addStuFrom").addEventListener("submit", handleFormData );

function handleFormData(event) {
    event.preventDefault();
    
    let title = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let stock = document.getElementById('stock').value;
    let category = document.getElementById('catagory').value;

    let data =  {
        title: title,
        author: author,
        stock: stock,
        category: category
    };

    // getDataFormAddbook(data);
}