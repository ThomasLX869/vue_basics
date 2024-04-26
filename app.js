const app = Vue.createApp({
    data() {
        return {
            url: 'https://github.com/ThomasLX869',
            showBooks: false,
            books: [
                { title : 'The Final Empire', author : 'Brandon Sanderson', age: '45', img: 'assets/the_final_empire.jpg'},
                { title : 'Harry Poter', author : 'JK Rowling', age: '25', img: 'assets/harry_potter.jpg'},
                { title : 'Le Horla', author : 'Guy de Maupassant', age: '133', img: 'assets/horla.jpg'},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
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
        }
    }
})

app.mount('#app')