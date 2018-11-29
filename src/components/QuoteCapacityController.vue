<template>
  <div>
    <p>capactiy</p>
    <!-- <p id="capacity_bar">{{ capacity }} / 10</p> -->
    <div class="capacity_bar">
      <div class="progress" :style="capacityProgressBar"></div>
    </div>
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

  computed: {
    capacityProgressBar() {
      return {
        width: this.capacity * 10 + '%'
      }
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
  div {
    text-align: center;
  }
  .capacity_bar {
    border: 2px solid purple;
    border-radius: 16px;
    overflow: hidden;
    height: 1rem;
    width: 50%;
    margin: 0 auto;
  }

  .progress {
    height: inherit;
    background-color: #444;
    transition: width 0.7s;
  }

</style>