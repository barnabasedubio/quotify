<template>
  <div id="app">

    <div class="upper">
      <h1>Quotify.</h1>
      <quote-add></quote-add>
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
  #app {
    margin: 0;
  }
  .upper {
    border: 1px solid red;
    height: 60vh;
  }

  .lower {
    border: 1px solid orange;
    height: 40vh;
  }
</style>
