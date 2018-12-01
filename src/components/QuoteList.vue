<template>
  <div id="quote_list_div">
    <div v-for="quoteObject in quoteObjects" :key="quoteObject.id">
      <quote-card :quoteObject = quoteObject
                  v-on:deleteMe="deleteCard($event)"></quote-card>
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

  methods: {
    deleteCard(obj) {
      let id = obj.id
      this.quoteObjects = this.quoteObjects.filter(quote => quote.id !== id)
      // since to my understanding objects must be passed to eventbus $emit, pass empty object.
      EVENT_BUS.quotify_cardWasDeleted({})
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
    /*border: 2px solid green;*/
    display: flex;
    /* shorthand for flex direction and flex wrap */
    flex-flow: row-reverse wrap-reverse;
    justify-content: center;
    align-content: center;
    padding: 1rem 0;
    height: inherit;
  }
</style>