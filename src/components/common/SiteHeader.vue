<template>
    <div id="side_block" :class="{'open': isMobileMenuOpened}">
        <div class="wrapper">
            <nav id="mobile_menu_container">
                <div class="logo_wrap">
                    <a href="#"><img src="@/assets/images/home/main_logo.svg" alt="finsweet_main_logo"></a>
                </div>
                <ul class="mobile_menu_list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About us</a></li>
                    <li><a href="/features">Features</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/works">Works</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
                <a href="/contact" class="header_contact_btn mobile_contact_btn">Contact us</a>
                <button type="button" class="header_btn" @click="toggleMobileMenu">Close</button>  
            </nav>
        </div>
    </div>
    <div id="page_overlay" :class="{'open': isMobileMenuOpened}"></div>
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
                    <button class="hamburger hamburger--arrow" type="button" :class="{'is-active' : isMobileMenuOpened}" @click="toggleMobileMenu">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
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
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/header.scss';
</style>
