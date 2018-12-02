<template>
  <div id="app">

    <div class="upper">
      <div class="upper_content">
        <a href="/index.html">
          <h1 class="page_title">Quotify</h1>
        </a>
        <quote-add></quote-add>
      </div>
      <quote-capacity-controller></quote-capacity-controller>
    </div>

    <div class="lower">
      <quote-list></quote-list>
    </div>

  </div>
</template>

<script>
import QuoteAdd from './components/QuoteAdd.vue'
import QuoteCapacityController from './components/QuoteCapacityController.vue'
import QuoteList from './components/QuoteList.vue'

export default {
  components: {
    QuoteAdd,
    QuoteCapacityController,
    QuoteList,
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
    height: 100%;
  }
  body {
    height: inherit;
  }
  h1, h2, h3, h4, h5, h6, p {
    font-family: 'Bodoni MT', sans-serif;
  }
  h1 {
    font-size: 3rem;
    color: white;
  }
  p {
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
  }
  #app {
    margin: 0;
    height: inherit;
    background-color: #f98488;
  }
  .page_title {
    width: 10rem;
    margin-top: 3rem;
    text-align: left;
    position: relative;
  }
  .upper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;
    background-color: #252525;
  }
  .upper_content {
    position: relative;
    width: 40%;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
