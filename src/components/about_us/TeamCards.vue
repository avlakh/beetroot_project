<template>
    <div class="our_team_card">
        <div class="our_team_photo_link">
            <img :src="require('@/assets/images/about_us/our_team/'+img)" :alt="imgAlt">
            <div class="our_card_img_bg">
                <ul class="our_card_soc_list">
                    <!-- тут звісно би були динамічні лінки з джейсона на лінки з соцмереж - збережені як заглушки -->
                    <li><a href="https://www.facebook.com/" target="_blank"><i class="icon icon-facebook"></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i class="icon icon-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><i class="icon icon-linkedin-square"></i></a></li>
                </ul>
            </div>
        </div>
        <h6>{{headingName}}</h6>
        <h5>{{headingPosition}}</h5>
    </div>
</template>

<script>
export default {
    name: "TeamCards",
    props: {
        img: {
            type: String,
            default: ''
        },
        imgAlt: {
            type: String,
            default: ''
        },
        headingName: {
            type: String,
            default: ''
        },
        headingPosition: {
            type: String,
            default: '',
        }
    }
}
</script>

<style lang="scss" scoped>
    .our_team_card {
    background-color: #fff;
    padding: 48px 63px 32px;
    .our_team_photo_link {
        position: relative;
        display: block;
        margin-bottom: 22px;
        overflow: hidden;
        &:hover .our_card_img_bg {
            transform: translate(0);
        }
    }
    .our_card_img_bg {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        padding: 20px;
        width: 168px;
        height: 168px;
        border-radius: 50%;
        transform: translate(-168px);
        background: linear-gradient(348.37deg, #5239FA 17.97%, rgba(255, 255, 255, 0) 79.2%);
        .our_card_soc_list {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 10px;
            i {
                color: #fff;
            }
            li:hover {
                transform: scale(1.2);
            }
        }
    }
    h6 {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: #1D2130;
    }
    h5 {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #1D2130;
        text-align: center;
        opacity: 0.7;
    }
}

@media screen and (max-width: 1400px){
.our_team_card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

</style>