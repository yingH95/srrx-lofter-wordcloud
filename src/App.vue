<template>
  <div id="app m-0">
    <div class="">
      <NavBar></NavBar>
      <div class="container">
        <WordCloud class="m-0" :member="member"></WordCloud>
      </div>
    </div>
  </div>
</template>

<script>
import WordCloud from './components/WordCloud.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    WordCloud,
    NavBar
  },
  computed: {
    member: function () {
      return this.$store.state.member
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
