<template>
  <div>
    <p>capactiy</p>
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
      id: 0,
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
      EVENT_BUS.$emit('quotify_clearInputField', {})
    }
  },

  created() {
    EVENT_BUS.$on('permissionRequestIncoming', (quoteObject) => {
      if (this.capacity < 10) {
        // add ID to quoteObject. This makes the v-for in the quote list component easier
        quoteObject.id = this.id
        this.id++
        this.capacity++
        // event bus can notify QuoteAdd component to send the quote object to QuoteList component
        EVENT_BUS.quotify_relayQuoteInfo(quoteObject)
      
      } else this.displayCapacityFull()
    })

    EVENT_BUS.$on('cardWasDeleted', (empty) => {
      this.capacity--
    })
  }
}
</script>

<style scoped lang="scss">
  div {
    text-align: center;
    height: 3.5rem;
  }
  p {
    position: relative;
    bottom: 0.5rem;
    color: white;
  } 
  .capacity_bar {
    border: 2px solid white;
    border-radius: 16px;
    overflow: hidden;
    height: 1rem;
    width: 50%;
    margin: 0 auto;
  }
  .progress {
    height: 2rem;
    background-color: #F25656;
    transition: width 0.7s;
    transform: translateY(-50%);
  }

</style>