<template>
  <div id="quoteAdd_comp">
    <textarea cols="70" 
              rows="3" 
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

    EVENT_BUS.$on('quotify_clearInputField', (empty) => {
      this.clearInput()
    })
  }
}
</script>

<style scoped lang="scss">
  #quoteAdd_comp {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  textarea {
    background-color: transparent;
    font-family: 'Bodoni MT', sans-serif;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    display: block;
    outline: none;
    resize: none;
    border: none;
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
    color: white;
    border: 2px solid white;
    position: relative;
    text-align: center;
    line-height: 1.5rem;
    padding:0.5rem 1rem;
    width: 18rem;
    background-color: transparent;
    font-family: 'Bodoni MT', sans-serif;
    font-size: 1.5rem;
    outline: none;
  }
  button {
    color: #888;
    border: 2px solid white;
    float: right;
    line-height: 1.5rem;
    padding:0.5rem 1rem;
    box-sizing: border-box;
    background-color: transparent;
    outline: none;
    font-family: 'Bodoni MT', sans-serif;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.4s
  }
  button:hover {
    background-color: white;
    color: #252525;
  }
  .clear_entry {
    margin-right: 1rem;
  }
</style>