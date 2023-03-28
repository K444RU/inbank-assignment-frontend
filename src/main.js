import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";

import VueSimpleAlert from "vue-simple-alert";


// font awesome stuff
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUserSecret, fas, faR } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"


// font awesome stuff
library.add(faUserSecret, fas, faR)
Vue.component('font-awesome-icon', FontAwesomeIcon, VueSimpleAlert)
axios.defaults.baseURL = 'http://localhost:9090/'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
