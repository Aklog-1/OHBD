

const bookPile = document.querySelector(".book-pile")

const overlay = document.querySelector(".overlay")
const openBarBtn = document.querySelector(".open-bar-btn")
const closeBarBtn = document.querySelector(".close-bar-btn")
const fiction = document.querySelector(".fiction")
const reference = document.querySelector(".reference")
const all = document.querySelector(".all")

const searchInput = document.querySelector(".search-bar")

const addToCollectionBtn = document.querySelector(".add-to-collection-btn")
const inputs = document.querySelectorAll(".input")

let deleteBookBtns = [];
let titlesArray = [];

const books = [
    {
        "title": "Are you afraid of the dark?",
        "author": "Sidney Sheldon",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },

    {
        "title": "if tomorrow comes",
        "author": "Sidney Sheldon",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit: amet consectetur adipisicing elit. Culpa: rerum minima! Nemo consequuntur similique itaque odio velit: optio ratione: assumenda: quasi exercitationem culpa illum repellendus aspernatur quaerat esse iusto nostrum."
    },

    {
        "title": "best laid plans",
        "author": "Sidney Sheldon",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },

    {    
        "title": "doomsday conspiracy",
        "author": "Sidney Sheldon",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit: amet consectetur adipisicing elit. Culpa: rerum minima! Nemo consequuntur similique itaque odio velit: optio ratione: assumenda: quasi exercitationem culpa illum repellendus aspernatur quaerat esse iusto nostrum."
    },

    {
        "title": "bloodline",
        "author": "Sidney Sheldon",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },
    
    {    
        "title": "if tomorrow comes 2",
        "author": "Tilly bagshawe",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit: amet consectetur adipisicing elit. Culpa: rerum minima! Nemo consequuntur similique itaque odio velit: optio ratione: assumenda: quasi exercitationem culpa illum repellendus aspernatur quaerat esse iusto nostrum."
    },

    {
        "title": "gone with the wind",
        "author": "margaret mitchel",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit: amet consectetur adipisicing elit. Culpa: rerum minima! Nemo consequuntur similique itaque odio velit: optio ratione: assumenda: quasi exercitationem culpa illum repellendus aspernatur quaerat esse iusto nostrum."
    },

    {    
        "title": "the boy in the stripped pyjamas",
        "author": "John Boyne",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },
    
    {
        "title": "Animal farm",
        "author": "-------",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit: amet consectetur adipisicing elit. Culpa: rerum minima! Nemo consequuntur similique itaque odio velit: optio ratione: assumenda: quasi exercitationem culpa illum repellendus aspernatur quaerat esse iusto nostrum."
    } ,

    {
        "title": "Harry potter",
        "author": "J.K. Rowling",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },

    {
        "title": "Extreme chemistry",
        "author": "Extreme dudes",
        "genre": "reference",
        "description": "Lorem ipsum dolor sit: amet consectetur adipisicing elit. Culpa: rerum minima! Nemo consequuntur similique itaque odio velit: optio ratione: assumenda: quasi exercitationem culpa illum repellendus aspernatur quaerat esse iusto nostrum."
    },

    {
        "title": "galaxy Physics",
        "author": "galaxy dudes",
        "genre": "reference",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },

    {
        "title": "Extreme Biology",
        "author": "extreme series",
        "genre": "reference",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    }

]

const renderBooks = (booksArray) => {

    bookPile.innerHTML = '';
    titlesArray = [];
    deleteBookBtns = [];

    booksArray.forEach(bk => {

        const book = document.createElement("div");
        book.classList.add("book");
        
        const bookTitleContainer = document.createElement("div");
        bookTitleContainer.classList.add("book-title-container");


        const bookTitle = document.createElement("h1");
        bookTitle.textContent = bk["title"]
        bookTitle.classList.add("book-title");

        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.classList.add("delete-btn");
        deleteBookBtn.textContent = "\u00D7";

        const bookDetails = document.createElement("div");
        bookDetails.classList.add("book-details");

        const horizontal = document.createElement("hr");
        
        const author = document.createElement("div");
        author.classList.add("author");
        author.innerHTML = `author: <span>${bk["author"]}</span>`;

        const genre = document.createElement("div");
        genre.classList.add("genre");
        genre.innerHTML = `genre: <span>${bk["genre"]}</span>`;

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent = bk["description"];

        bookTitleContainer.append(bookTitle);
        bookTitleContainer.append(deleteBookBtn);

        bookDetails.append(horizontal);
        bookDetails.append(author);
        bookDetails.append(genre);
        bookDetails.append(description);

        // to the arrays of title and delete btns
        titlesArray.push(bookTitle);
        deleteBookBtns.push(deleteBookBtn);

        book.append(bookTitleContainer);
        book.append(bookDetails);
        bookPile.append(book);
    })
}


// ============ toggling book descriptions
function descriptiontoggler() {

    titlesArray.forEach((title, idx) => {
        title.addEventListener("click", () => {

            bookPile.children[idx].children[1].classList.toggle("show-book-details");
            title.classList.toggle("current-book");
        })
    })
}



// ==========mobile navigation bars
openBarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    overlay.classList.add("show-overlay");

})
closeBarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    overlay.classList.remove("show-overlay");
})


// ============= searching bar
searchInput.addEventListener("input", () => {

    bookPile.childNodes.forEach(book => {
        // used childNodes - forEach doesn't work on children.

        if(book.children[0].children[0].textContent.toLowerCase().indexOf(searchInput.value.toLowerCase()) === -1) {
            book.classList.add("hide");
        } else {
            book.classList.remove("hide");
        }
    })
})



addToCollectionBtn.addEventListener("click", event => {

    event.preventDefault();

    const bookInfoRecieved = [];
    inputs.forEach(input => {
        bookInfoRecieved.push(input.value);
        input.value = '';
    })

    const bookInfo = {
        "title": bookInfoRecieved[0],
        "author": bookInfoRecieved[1],
        "genre": bookInfoRecieved[2],
        "description": bookInfoRecieved[3]
    };
    books.push(bookInfo)

    refresh();
})


// genre togglers
fiction.addEventListener("click", () => {
    
    books.forEach((bk, idx) => {
        bookPile.children[idx].classList.add("hide");
        if(bk.genre.toLowerCase() === "fiction") {
            bookPile.children[idx].classList.remove("hide");
        }
    })
})

reference.addEventListener("click", () => {

    books.forEach((bk, idx) => {
        bookPile.children[idx].classList.add("hide");
        if(bk.genre.toLowerCase() === "reference") {
            bookPile.children[idx].classList.remove("hide");
        }
    })
})

all.addEventListener("click", () => {

    books.forEach((bk, idx) => {
        bookPile.children[idx].classList.remove("hide");
    })
})



function deleteBook() {
    deleteBookBtns.forEach((button, index) => {
        button.addEventListener("click", event => {
            event.preventDefault();
            books.splice(index, 1);

            refresh();
        })
    })
}



function refresh() {

    renderBooks(books);
    deleteBook();
    descriptiontoggler();
}
refresh();