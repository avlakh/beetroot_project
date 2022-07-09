<template>
    <div id="side_block">
        <div class="wrapper">
            <nav id="mobile_menu_container">
                <div class="logo_wrap">
                    <a href="#"><img src="assets/images/home/main_logo.svg" alt="finsweet_main_logo"></a>
                </div>
                <ul class="mobile_menu_list">
                    <li><a href="#">Home</a></li>
                    <li><a href="pages/about_us.html">About us</a></li>
                    <li><a href="pages/features.html">Features</a></li>
                    <li><a href="pages/pricing.html">Pricing</a></li>
                    <li><a href="pages/works.html">Works</a></li>
                    <li><a href="pages/blogs.html">Blog</a></li>
                </ul>
                <a href="pages/contact.html" id="header_contact_btn">Contact us</a> 
            </nav>
        </div>
    </div>
    <div id="page_overlay"></div>
</template>

<style lang="scss" scoped>

#side_block {
    display: block;
    width: 320px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #5474fd;
    padding: 20px;
    height: 100vh;
    z-index: 2000;
    -webkit-transform: translate(-320px);
        -ms-transform: translate(-320px);
            transform: translate(-320px);
    -webkit-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    &.open {
        -webkit-transform: translate(0px);
            -ms-transform: translate(0px);
                transform: translate(0px);
    }
}

#page_overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .7);
    display: none;
    z-index: 1500;
    &.open {
        display: block;
    }
}

#mobile_menu_container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 30px;
}

.mobile_menu_list li {
    margin-bottom: 20px;
    text-align: center;
    a {
        font-size: 22px;
        color: #fff;
    }
}

</style>