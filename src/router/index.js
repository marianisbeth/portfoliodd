import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '../views/welcome.vue'
import categories from '../views/categories.vue'
import biography from '../views/biography.vue'
import contact from '../views/contact.vue'
import invites from '../views/invites.vue'
import posters from '../views/posters.vue'
import logos from '../views/logos.vue'
import elements from '../views/elements.vue'
import doubleexposures from '../views/doubleexposures.vue'
import photographs from '../views/photographs.vue'
import cv from '../views/cv'

Vue.use(VueRouter)

  export default new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return {x: 0, y: 0}
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
  
    {
      path: '/categories',
      name: 'categories',
      component: categories
    },
  
    {
      path: '/biography',
      name: 'biography',
      component: biography
    },
  
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    
    {
      path: '/invites',
      name: invites,
      component: invites
    },

    {
      path: '/posters',
      name: posters,
      component: posters
      },

    {
      path: '/logos',
      name: logos,
      component: logos
    },

    {
      path: '/elements',
      name: elements,
      component: elements
    },

    {
      path: '/doubleexposures',
      name: doubleexposures,
      component: doubleexposures
    },

    {
      path: '/photographs',
      name: photographs,
      component: photographs
    },

    {
      path: '/cv',
      name: cv,
      component: cv
    }

  ]
})


