<template>
  <div>
    <textarea name="" 
              id="" 
              cols="30" 
              rows="10" 
              v-model="quoteContent"></textarea>

    <input type="text" v-model="quoteAuthor">
    <button @click="seekPermission()">add quote</button>
    
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
        quoteContent: this.quoteContent,
        quoteAuthor: this.quoteAuthor
      }
    }
  },

  methods: {
    seekPermission() {
      EVENT_BUS.quotify_sendPermissionRequest(this.quoteObject)
    }
  }
}
</script>

