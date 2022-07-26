<template>
	<div id="side_block" :class="{'open': isMobileMenuOpened}">
		<div class="wrapper">
			<nav id="mobile_menu_container">
				<div class="logo_wrap">
					<router-link to="/"><img src="@/assets/images/home/main_logo.svg" alt="finsweet_main_logo"></router-link>
				</div>
				<ul class="mobile_menu_list">
					<li><router-link @click="toggleMobileMenu" to="/">Home</router-link></li>
					<li><router-link @click="toggleMobileMenu" to="/about-us">About us</router-link></li>
					<li><router-link @click="toggleMobileMenu" to="/features">Features</router-link></li>
					<li><router-link @click="toggleMobileMenu" to="/pricing">Pricing</router-link></li>
					<li><router-link @click="toggleMobileMenu" to="/works">Works</router-link></li>
					<li><router-link @click="toggleMobileMenu" to="/blog">Blog</router-link></li>
				</ul>
				<router-link @click="toggleMobileMenu" to="/contact" class="header_contact_btn mobile_contact_btn">Contact us</router-link>
				<button type="button" class="header_btn" @click="toggleMobileMenu">Close</button>  
			</nav>
		</div>
	</div>
	<div id="page_overlay" :class="{'open': isMobileMenuOpened}" @click="toggleMobileMenu"></div>
	<header>
		<div class="container header_flex">
			<div class="logo_wrap">
				<router-link to="/"><img src="@/assets/images/home/main_logo.svg" alt="finsweet_main_logo"></router-link>
			</div>
			<div class="main_menu_wrap">
				<nav id="main_menu">
					<ul>
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/about-us">About us</router-link></li>
						<li><router-link to="/features">Features</router-link></li>
						<li><router-link to="/pricing">Pricing</router-link></li>
						<li><router-link to="/works">Works</router-link></li>
						<li><router-link to="/blog">Blog</router-link></li>
					</ul>
				</nav>
				<router-link to="/contact" class="header_contact_btn">Contact us</router-link>
				<div class="hamburger_menu">
					<button class="hamburger hamburger--spin" type="button" :class="{'is-active' : isMobileMenuOpened}" @click="toggleMobileMenu">
						<span class="hamburger-box"><span class="hamburger-inner"></span></span>
					</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'SiteHeader',
	data(){
		return {
			isMobileMenuOpened: false
		}
	},
	methods: {
		toggleMobileMenu(){
			this.isMobileMenuOpened = !this.isMobileMenuOpened;
			document.querySelector('body').classList.toggle('hidden')
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '@/assets/css/header.scss';
</style>

<style lang="scss">
	
</style>
