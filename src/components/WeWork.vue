<template>
    <div class="we_work_card">
        <img :src="require('@/assets/images/home/how_we_work/'+img)" :alt="imgAlt">
        <h5>{{heading}}</h5>
        <p>{{paragraph}}</p>
    </div>
</template>

<script>

export default {
    name: 'WeWork',
    props: {
        img: {
            type: String,
            default: ''
        },
        imgAlt: {
            type: String,
            default: ''
        },
        heading: {
            type: String,
            default: ''
        },
        paragraph: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>

.we_work_card {
    img {
        margin-bottom: 10px;
    }
    h5 {
        margin-bottom: 11px;
    }
    p {
        line-height: 28px;
        color: rgba(40, 41, 56, .7);
    }
}

</style>