<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleOpenModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja giveaway !</h1>
      <p>Grab your ninja swag for half price !</p>
    </Modal>
  </div>
  <div v-if="showModalEx">
    <Modal @close="toggleOpenModalEx">
      <h1>My exercice Modal</h1>
      <p>Made for exercice</p>
    </Modal>
  </div>
  <div>
  </div>
  <button @click.alt="toggleOpenModal"> Open modal (alt) </button>
  <button @click.ctrl="toggleOpenModalEx"> Open modal (ctrl) </button>
</template>

<script>

import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the giveaway !',
      text: 'This is some content !',
      showModal: false,
      showModalEx: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleOpenModal() {
      this.showModal = !this.showModal
    },
    toggleOpenModalEx() {
      this.showModalEx = !this.showModalEx
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
