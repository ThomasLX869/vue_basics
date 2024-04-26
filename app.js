const app = Vue.createApp({
    data() {
        return {
            url: 'https://github.com/ThomasLX869',
            showBooks: false,
            showFavBooks: true,
            books: [
                { title : 'The Final Empire', author : 'Brandon Sanderson', img: 'assets/the_final_empire.jpg', isFav: false},
                { title : 'Harry Poter', author : 'JK Rowling', img: 'assets/harry_potter.jpg', isFav: false},
                { title : 'Le Horla', author : 'Guy de Maupassant', img: 'assets/horla.jpg', isFav: true},
            ],
            x: 0,
            y: 0
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleShowFavBooks() {
            this.showFavBooks = !this.showFavBooks
        },
        handleEvent(event, data) {
            console.log(event, event.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
})

app.mount('#app')