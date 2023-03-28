import Vue from 'vue'
import VueRouter from 'vue-router'

import LoanApplicationView from "@/views/LoanApplicationView";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

Vue.use(VueRouter)

const routes = [


{
    path: '/',
    name: 'LoanApplicationView',
    component: LoanApplicationView
  },

]

const router = new VueRouter({
  routes
})

export default router
