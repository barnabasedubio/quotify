<template>
  <div id="app">
    <quote-add></quote-add>
    <quote-capacity-controller></quote-capacity-controller>
    <quote-list></quote-list>
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
</style>
