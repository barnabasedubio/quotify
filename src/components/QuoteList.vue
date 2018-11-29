<template>
  <div id="quote_list_div">
    <div v-for="quoteObject in quoteObjects" :key="quoteObject.id">
      <quote-card :quoteObject = quoteObject></quote-card>
    </div>
  </div>
</template>

<script>
import { EVENT_BUS } from '../main.js'
import QuoteCard from './QuoteCard.vue'

export default {

  components: {
    QuoteCard
  },

  data() {
    return {
      quoteObjects: []
      }    
  },

  created() {
    EVENT_BUS.$on('quotify_quotePermissionGranted', (quoteObject) => {
      let toAdd = quoteObject
      toAdd.author = quoteObject.author ? quoteObject.author : "anonymous"
      this.quoteObjects.push(toAdd)
    })
  }
}
</script>

<style scoped lang="scss">
  #quote_list_div {
    border: 2px solid green;
    display: flex;
    /* shorthand for flex direction and flex wrap */
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    margin-top: 1rem;
    /*padding-top: 2rem;
    padding-bottom: 2rem;*/
    height: inherit;
  }
</style>