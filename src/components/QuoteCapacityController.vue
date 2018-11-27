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
      alert('Capacity full. Please delete a quote to add another one.')
    }
  },

  created() {
    EVENT_BUS.$on('permissionRequestIncoming', (quoteObject) => {
      if (this.capacity < 10) {
        // event bus can notify QuoteAdd component to send the quote object to QuoteList component
        this.capacity++
        EVENT_BUS.quotify_relayQuoteInfo(quoteObject)
      
      } else this.displayCapacityFull() // capacity limit reached. Display error message
    })
  }
}
</script>
