<template>
    <section class="our_blog">
            <div class="container">
                <h2>Our blog</h2>
                <div class="blog_card_wrap">
                    <div class="blog_card">
                        <div class="blog_card_img">
                            <img src="@/assets/images/home/blog/blog_card_1.jpg" alt="arab_businessman">
                        </div>
                        <h6>19 Jan 2022</h6>
                        <h5>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h5>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <router-link to="#" class="arrow_btn">Read More</router-link>
                    </div>
                    <div class="blog_card">
                        <div class="blog_card_img">
                            <img src="@/assets/images/home/blog/blog_card_2.jpg" alt="arab_businessman">
                        </div>
                        <h6>19 Jan 2022</h6>
                        <h5>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h5>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <router-link to="#" class="arrow_btn">Read More</router-link>
                    </div>
                    <div class="blog_card">
                        <div class="blog_card_img">
                            <img src="@/assets/images/home/blog/blog_card_3.jpg" alt="arab_businessman">
                        </div>
                        <h6>19 Jan 2022</h6>
                        <h5>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h5>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                        <router-link to="#" class="arrow_btn">Read More</router-link>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'BlogCards'
}
</script>

<style lang="scss" scoped>

    @import '@/assets/css/vars.scss';

    .our_blog {
    margin-bottom: 128px;
    h2 {
        margin-bottom: 64px;
    }
}

.blog_card_wrap {
    display: flex;
    gap: 32px;
}

.blog_card {
    .blog_card_img {
        margin-bottom: 40px;
        img {
            width: 100%;
            height: 100%;
            vertical-align: top;
        }
    }
    h6 {
        font-size: 16px;
        line-height: 28px;
        color: $dark-blue;
        opacity: 0.7;
        margin-bottom: 16px;
    }
    h5 {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #282938;
        margin-bottom: 16px;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #282938;
        opacity: 0.7;
        margin-bottom: 32px;
    }
    .arrow_btn {
        display: inline-block;
        color: $dark-blue;
        &:before, &:after {
            border-color: $dark-blue;
        }
        &:hover::before,
        &:hover::after {
            transform: translateX(30px);
        }
        &:hover::after {
            transform: translateX(30px) rotate(-135deg);
        }
    }
}

@media screen and (max-width: 1000px) {
    .blog_card_wrap {
        flex-wrap: wrap;
        .blog_card {
            width: 45%;
            justify-content: center;
            align-items: center;
        }
    }
}

@media screen and (max-width: 500px) {
    .blog_card_wrap .blog_card {
        width: 100%;
    }
}

</style>