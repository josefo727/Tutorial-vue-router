import Vue from 'vue'
import Router from 'vue-router'

import Home    from '@/components/Home'
import About   from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/',
			component: Home
    	},
    	{
      		path: '/about',
			component: About
    	},
    	{
      		path: '/contact',
			component: Contact
    	}
  	],
  	linkActiveClass: "active",
  	mode: 'history'
})