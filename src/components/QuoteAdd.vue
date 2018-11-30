<template>
  <div>
    <textarea name="" 
              id="" 
              cols="70" 
              rows="4" 
              v-model="quoteContent"
              placeholder="click here to add a quote."></textarea>

    <div class="inputs">
      <input type="text" 
            class="add_author"
            v-model="quoteAuthor"
            placeholder="add the author">
      <button class="add_quote" @click="clearInput()">clear</button>
      <button class="clear_entry" @click="seekPermission()">add quote</button>
    </div>
    
    
  </div>
</template>

<script>
import { EVENT_BUS } from '../main.js'

export default {

  data() {
    return {
      quoteContent: '',
      quoteAuthor: '',
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
      if (!this.quoteContent) {
        this.quoteContent = 'nothing.'
        this.quoteAuthor = 'A wise man once'
      }
      EVENT_BUS.quotify_sendPermissionRequest(this.quoteObject)
    },

    clearInput() {
      this.quoteContent = ''
      this.quoteAuthor = ''
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
  textarea {
    display: block;
    outline: none;
    resize: none;
    border: 2px solid red;
    margin: 2rem auto 0 auto;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
    line-height: 1.5rem;
  }
  .inputs {
    margin-top: 2rem;
  }
  .add_author {
    position: relative;
    text-align: center;
    line-height: 1.5rem;
    width: 15rem;
    border: 2px solid red;
    outline: none;
  }
  button {
    float: right;
    line-height: 1.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
    background-color: transparent;
    border: 2px solid red;
    outline: none;
  }
  .clear_entry {
    margin-right: 1rem;
  }
</style>