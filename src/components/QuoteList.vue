<template>
  <div>
    <p>quote to send to quote card component: </p>
    <p>content: {{ quoteContent }}</p>
    <p>author: {{ quoteAuthor }}</p>
    <quote-card></quote-card>

  </div>
</template>

<script>
import { EVENT_BUS } from '../main.js'
import QuoteCard from './QuoteCard.vue'

export default {

  components: {
    QuoteCard,
  },

  data() {
    return {
      quoteContent: "",
      quoteAuthor: "",
    }    
  },

  created() {
    EVENT_BUS.$on('quotify_quoteIncoming', (quoteObject) => {
      this.quoteContent = quoteObject.quoteContent
      this.quoteAuthor = (quoteObject.quoteAuthor) ? quoteObject.quoteAuthor : "anonymous"
    })
  }
}
</script>
