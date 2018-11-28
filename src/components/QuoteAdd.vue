<template>
  <div>
    <textarea name="" 
              id="" 
              cols="30" 
              rows="10" 
              v-model="quoteContent"
              placeholder="click here to add a quote"></textarea>

    <input type="text" v-model="quoteAuthor">
    <button @click="seekPermission()">add quote</button>
    <button @click="clearInput()">clear</button>
    
  </div>
</template>

<script>
import { EVENT_BUS } from '../main.js'

export default {

  data() {
    return {
      quoteContent: "",
      quoteAuthor: "",
    }
  },

  computed: {
    quoteObject() {
      return {
        content: this.quoteContent,
        author: this.quoteAuthor
      }
    }
  },

  methods: {
    seekPermission() {
      EVENT_BUS.quotify_sendPermissionRequest(this.quoteObject)
    },

    clearInput() {
      this.quoteContent = ""
      this.quoteAuthor = ""
    }
  },

  created() {
    EVENT_BUS.$on('quotify_quotePermissionGranted', (obj) => {
      this.clearInput()
    })
  }
}
</script>

<style scoped lang="scss">
</style>