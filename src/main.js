import Vue from 'vue'
import App from './App.vue'
import BaseCard from './components/BaseCard.vue'
import BaseButton from './components/BaseButton.vue'
import BaseDialog from './components/BaseDialog.vue'

Vue.config.productionTip = false

Vue.component('base-card', BaseCard)
Vue.component('base-button', BaseButton)
Vue.component('base-dialogu', BaseDialog)
new Vue({
  render: h => h(App),
}).$mount('#app')


