<template>
    <section class="build_together container">
        <div class="build_together_text">
            <h2>{{heading}}</h2>
            <p>{{descr}}</p>
        </div>
        <router-link to="contact" class="round_btn">{{btnText}}</router-link>
    </section>
</template>

<script>
export default {
    name: 'BuildTogether',
    props: {
        heading: {
            type: String,
            default: ''
        },
        descr: {
            type: String,
            default: ''
        },
        btnText: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .build_together {
    padding: 128px 0;
}

.build_together_text {
    width: 55%;
    margin: 0 auto 40px;
    text-align: center;
    h2 {
        margin-bottom: 20px;
    }
    p {
        padding: 0 65px;
    }
}

.round_btn {
    display: block;
    width: 18%;
    margin: 0 auto;
    background-color: #FCD980;
    border-radius: 41px;
    padding: 16px 56px;
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #1B1C2B;
    &:hover {
        background-color: #FDE4A6;
    }
}

@media screen and (max-width: 1200px) {
    .build_together .round_btn {
        width: 40%;
    }
}

@media screen and (max-width: 1000px) {
    .build_together {
        padding: 55px 0;
        &_text {
            width: 100%;
        }
    }
}

@media screen and (max-width: 600px) {
    .build_together .round_btn {
        width: 80%;
    }
}

</style>