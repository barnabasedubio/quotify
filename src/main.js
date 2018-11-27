import Vue from 'vue'
import App from './App.vue'

export const EVENT_BUS = new Vue({
  methods: {
    
    quotify_sendPermissionRequest(quoteObject) {
      this.$emit('permissionRequestIncoming', quoteObject)
    },

    quotify_relayQuoteInfo(quoteObject) {
      this.$emit('quotify_quoteIncoming', quoteObject)
    },
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
