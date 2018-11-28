<template>
  <div>
    <p>capacity: {{ capacity }} / 10</p>
  </div>
</template>

<script>
import { EVENT_BUS } from '../main.js'

export default {

  data() {
    return {
      capacity: 0
    }
  },

  methods: {
    displayCapacityFull() {
      // capacity limit reached. Display error message
      alert('Capacity full. Please delete a quote to add another one.')
    }
  },

  created() {
    EVENT_BUS.$on('permissionRequestIncoming', (quoteObject) => {
      if (this.capacity < 10) {
        // add ID to quoteObject (0 to 9). This makes the v-for in the quote list component easier
        quoteObject.id = this.capacity 
        this.capacity++
        // event bus can notify QuoteAdd component to send the quote object to QuoteList component
        EVENT_BUS.quotify_relayQuoteInfo(quoteObject)
      
      } else this.displayCapacityFull()
    })
  }
}
</script>

<style scoped lang="scss">
</style>