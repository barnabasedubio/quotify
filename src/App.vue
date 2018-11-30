<template>
  <div id="app">

    <div class="upper">
      <div class="upper_content">
        <h1 class="page_title">Quotify.</h1>
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
  }
  #app {
    margin: 0;
  }
  .page_title {
    width: 10rem;
    margin-top: 3rem;
    text-align: left;
    position: relative;
  }
  .upper {
    border: 1px solid red;
    height: 63vh;
    /*text-align: center;*/
  }
  .upper_content {
    position: relative;
    width: 40%;
    margin: 0 auto;
    box-sizing: border-box;

  }
  .lower {
    border: 1px solid orange;
    /*height: 40vh;*/
  }
</style>
