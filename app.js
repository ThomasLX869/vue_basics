const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: '45',
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