<template>
  <div>
    <p>quote to send to quote card component: </p>
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

</style>