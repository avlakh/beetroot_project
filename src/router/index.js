import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import ('@/views/HomeView.vue')
	},
	{
		path: '/about-us',
		name: 'about-us',
		component: () => import('@/views/AboutUs.vue')
	},
	{
		path: '/pricing',
		name: 'pricing',
		component: () => import('@/views/PricingView.vue')
	},
	{
		path: '/features',
		name: 'features',
		component: () => import('@/views/FeaturesView.vue')
	}, 
	{
		path: '/works',
		name: 'works',
		component: () => import('@/views/works/WorksView.vue')
	},
	{
		path: '/works/:slug',
		name: 'works-project',
		component: () => import('@/views/works/WorksProject.vue')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/views/blog/BlogView.vue')
	},
	{
		path: '/blog/:title',
		name: 'blog-page',
		component: () => import('@/views/blog/BlogPage.vue')
	},
	{
		path: '/privacy-policy',
		name: 'privacy-policy',
		component: () => import ('@/views/PrivacyPolicy.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import ('@/views/ContactView.vue')
	},
	{
		path: '/:pathMatch(.*)',
		name: '404',
		component: () => import ('@/views/PageView404.vue')
	}
	
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 }
	},
	base: '/beetroot_project/'
})

export default router
