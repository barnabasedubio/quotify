import Vue from 'vue'
import App from './App.vue'

export const EVENT_BUS = new Vue({
  methods: {
    
    quotify_sendPermissionRequest(quoteObject) {
      this.$emit('permissionRequestIncoming', quoteObject)
    },

    quotify_relayQuoteInfo(quoteObject) {
      this.$emit('quotify_quotePermissionGranted', quoteObject)
    },
  
    quotify_cardWasDeleted(empty) { 
      this.$emit('cardWasDeleted', empty)
    },

    quotify_clearInputField(empty) {
      this.$emit('clearInput', empty)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
