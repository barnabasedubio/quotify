<template>
  <div>
    <p>content: {{ quoteObject.content }}</p>
    <p>author: {{ quoteObject.author }}</p>
  </div>
</template>

<script>
import { EVENT_BUS } from '../main.js'
export default {

  props: {
    quoteObject: Object
  }
}
</script>

<style scoped lang="scss">

  div {
    border: 1px solid orange;
    padding: 30px 20px;
    display: inline-block;
    width: 18rem;
    height: 6rem;
    margin: 0.5rem;
  }

</style>