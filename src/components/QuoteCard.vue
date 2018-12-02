<template>
  <div  ref="quoteCard"
        class="card-box"
        @mouseenter="toDelete=true" 
        @mouseleave="toDelete=false" 
        @click="deleteQuoteCard()">

    <template v-if="toDelete">
      <p class="quote-text-content" style="color:#555">{{ quoteObject.content }}</p>
      <p class="quote-delete">click to delete</p>
    </template>
    <template v-else>
      <p class="quote-text-content">{{ quoteObject.content }}</p>
      <p class="quote-text-author">- {{ quoteObject.author }}</p>
    </template>

  </div>
</template>
<script>
import { EVENT_BUS } from '../main.js'
export default {

  props: {
    quoteObject: Object
  },

  data() {
    return {
      toDelete: false,
    }
  },

  methods: {
    deleteQuoteCard() {
      this.$emit('deleteMe', this.quoteObject)
    }
  }
}
</script>

<style scoped lang="scss">

  .card-box {
    border: 1px  solid #555;
    padding: 30px 20px;
    display: inline-block;
    margin: 0.5rem;
    min-width: 10rem;
    min-height: 3.4rem;
    line-height: 1.5rem;
    transition: all 0.5s;
    cursor: pointer;
  }

  .card-box:hover {
    background-color: #555;
    color: #555;
  }

  .quote-text-author {
    float: right;
    margin-top: 0.5rem;
  }

  .quote-delete {
    color: white;
    text-align: center;
    position: relative;
    bottom: 0.7rem;
  }

</style>