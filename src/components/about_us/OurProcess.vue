<template>
    <div class="our_process_card">
        <h6>{{heading}}</h6>
        <p>{{paragraph}}</p>
    </div>
</template>

<script>
export default {
    name: 'OurProcess',
    props: {
        heading: {
            type: String,
            default: ''
        },
        paragraph: {
            type: String,
            deafult: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/vars.scss';

.our_process_card {
    padding-top: 52px;
    h6 {
        margin-bottom: 13px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: -55px;
            border: 1px solid $royal-blue;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: $royal-blue;
        }
        &:after {
            content: '';
            position: absolute;
            border-bottom: 2px dashed rgba(36, 5, 242, .4);
            width: 224px;
            top: -45px;
            right: 25px;
        }
    }
}

@media screen and (max-width: 1400px) {
    .our_process_card {
        justify-self: center;
        h6::after {
        content: none;
        }
    }
}
</style>