

const bookPile = document.querySelector(".book-pile")
let downArrowBtns = [];
const overlay = document.querySelector(".overlay");
const openBarBtn = document.querySelector(".open-bar-btn")
const closeBarBtn = document.querySelector(".close-bar-btn")
const searchInput = document.querySelector(".search-bar")

const addToCollectionBtn = document.querySelector(".add-to-collection-btn");
const inputs = document.querySelectorAll(".input");

const fiction = document.querySelector(".fiction");
const reference = document.querySelector(".reference");
const all = document.querySelector(".all")

const books = [
    {
        "title": "Are you afraid of the dark?",
        "author": "Sidney Sheldon",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },

    {
        "title": "if tommorow comes",
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
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },

    {
        "title": "bloodline",
        "author": "Sidney Sheldon",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    },
    
    {    
        "title": "if tommorow comes 2",
        "author": "Tilly bagshawe",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
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
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribustemporibus omnis."
    } ,

    {
        "title": "Harry potter",
        "author": "J.K. Rowling",
        "genre": "fiction",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio adipisci sint impedit mollitia velit tempora ipsum culpa: alias laudantium: at exercitationem? In ab: sint illo incidunt doloribus temporibus omnis."
    }

]

const renderBooks = (booksArray) => {
    booksArray.forEach(bk => {

        const book = document.createElement("div");
        book.classList.add("book");
        
        const bookTitleContainer = document.createElement("div");
        bookTitleContainer.classList.add("book-title-container");


        const bookTitle = document.createElement("h1");
        bookTitle.textContent = bk["title"]
        bookTitle.classList.add("book-title");

        const downArrowBtn = document.createElement("button");
        downArrowBtn.classList.add("down-arrow-btn");
        downArrowBtn.textContent = "\u2304";

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

        bookDetails.append(horizontal);
        bookTitleContainer.append(bookTitle);
        bookTitleContainer.append(downArrowBtn);

        bookDetails.append(author);
        bookDetails.append(genre);
        bookDetails.append(description);

        // to an array of all the arrow btns.
        downArrowBtns.push(downArrowBtn);

        book.append(bookTitleContainer);
        book.append(bookDetails);
        bookPile.append(book);
    })
}

renderBooks(books);


// ============ toggling book descriptions
function descriptiontoggler() {

    downArrowBtns.forEach((btn, idx) => {
        btn.addEventListener("click", (event) => {
    
            event.preventDefault();
            bookPile.children[idx].children[0].classList.toggle("current-book");
            bookPile.children[idx].children[1].classList.toggle("show-book-details");
            btn.classList.toggle("current-book");
            btn.classList.toggle("rotate-arrow");
            console.log("hello")
        })
    })
}
descriptiontoggler();



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

    for(let book of bookPile.children) {

            if(book.children[0].children[0].textContent.toLowerCase().indexOf(searchInput.value.toLowerCase()) === -1) {
                book.classList.add("hide");
            } else {
                book.classList.remove("hide");
            }
        }
})



addToCollectionBtn.addEventListener("click", event => {

    event.preventDefault();

    const bookInfoRecieve = [];
    inputs.forEach(input => {
        bookInfoRecieve.push(input.value);
        input.value = '';
    })

    const bookInfo = {
        "title": bookInfoRecieve[0],
        "author": bookInfoRecieve[1],
        "genre": bookInfoRecieve[2],
        "description": bookInfoRecieve[3]
    };
    books.push(bookInfo)

    bookPile.innerHTML = '';
    downArrowBtns = [];

    renderBooks(books);
    descriptiontoggler();
})

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