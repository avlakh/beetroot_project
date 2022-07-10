<template>
    <footer>
        <div class="footer_top">
            <div class="container">
                <div class="footer_top_flex">
                    <div class="footer_top_us">
                        <div class="footer_top_info">
                            <div class="footer_top_logo">
                                <router-link to="/"><img src="@/assets/images/home/footer_logo.svg" alt="finsweet_main_logo"></router-link>
                            </div>
                            <p>We are always open to discuss your project and improve your online presence.</p>
                        </div>
                        <div class="footer_top_contact">
                            <div class="footer_top_email">
                                <h6>Email me at</h6>
                                <a href="mailto:contact@website.com">contact@website.com</a>
                            </div>
                            <div class="footer_top_phone">
                                <h6>Call us</h6>
                                <a href="tel:0927 6277 28525">0927 6277 28525</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer_top_descr">
                        <h2>Lets Talk!</h2>
                        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <ul class="sm_list">
                            <li><a href="https://www.facebook.com/" target="_blank"><i class="icon icon-facebook"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank"><i class="icon icon-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i class="icon icon-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i class="icon icon-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom">
            <div class="container">
                <div class="footer_bottom_flex">
                    <div class="footer_bottom_copy">
                        <router-link to="privacy-policy"> Copyright 2022, Finsweet.com</router-link>
                    </div>
                    <nav>
                        <ul class="footer_bottom_menu">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="about-us">About us</router-link></li>
                            <li><router-link to="features">Features</router-link></li>
                            <li><router-link to="pricing">Pricing</router-link></li>
                            <li><router-link to="works">Works</router-link></li>
                            <li><router-link to="blog">Blog</router-link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SiteFooter'
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/footer.scss';
</style>