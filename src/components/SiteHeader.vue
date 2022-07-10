<template>
    <header>
        <div class="container header_flex">
            <div class="logo_wrap">
                <router-link to="/"><img src="@/assets/images/home/main_logo.svg" alt="finsweet_main_logo"></router-link>
            </div>
            <div class="main_menu_wrap">
                <nav id="main_menu">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="about-us">About us</router-link></li>
                        <li><router-link to="features">Features</router-link></li>
                        <li><router-link to="pricing">Pricing</router-link></li>
                        <li><router-link to="works">Works</router-link></li>
                        <li><router-link to="blog">Blog</router-link></li>
                    </ul>
                </nav>
                <router-link to="contact" id="header_contact_btn">Contact us</router-link>
                <div class="hamburger_menu">
                    <button class="hamburger hamburger--arrow" type="button">
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
    name: 'SiteHeader'
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/header.scss';
</style>
