<template>
  <div class="card_box" @click="deleteQuoteCard()">
    <div class="card_box_inner">
      <p>content: {{ quoteObject.content }}</p>
      <p>author: {{ quoteObject.author }}</p>
      <p>id: {{ quoteObject.id }}</p>
    </div>

  </div>
</template>

<script>
import { EVENT_BUS } from '../main.js'
export default {

  props: {
    quoteObject: Object
  },

  methods: {
    deleteQuoteCard() {
      this.$emit('deleteMe', this.quoteObject)
    }
  }
}
</script>

<style scoped lang="scss">

  div {
    border: 1px solid orange;
    padding: 30px 20px;
    display: inline-block;
    margin: 0.5rem;
    /*transition: all 0.5s;*/
    cursor: pointer;
  }

</style>