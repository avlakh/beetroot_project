<template>
	<template v-for="(item, i) in homeSectionArr" :key="i">
		<home-section v-if="i === 0" :item="item"/>
	</template>
	<section class="we_work">
		<div class="container">
			<div class="we_work_text">
				<h2>How we work</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
				<router-link to="contact" class="arrow_btn">Get in touch with us</router-link>
			</div>
			<div class="we_work_grid">
				<template v-for="(item, i) in weWorkCardArr" :key="i">
					<we-work :item="item"/>
				</template>
			</div>
		</div>
	</section>
	<section class="our_projects">
		<div class="container">
			<div class="our_projects_text">
				<h2>View our projects</h2>
				<router-link to="works" class="arrow_btn">View More</router-link>
			</div>
			<div class="our_projects_grid">
				<div class="our_projects_big_card">
					<template v-for="(item, i) in ourProjectsArr">
						<our-projects-big :key="i" v-if="i === 0"  :item="item"/>
					</template>
				</div>
				<div class="our_projects_small_grid">
					<div class="our_projects_small_card sm_card_up">
						<template v-for="(item, i) in ourProjectsArr">
							<our-projects-sm :key="i" v-if="i === 1" :item="item"/>
						</template>
					</div>
					<div class="our_projects_small_card sm_card_bot">
						<template v-for="(item, i) in ourProjectsArr" >
							<our-projects-sm :key="i" v-if="i === 2" :item="item"/>
						</template>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="features">
		<div class="container">
			<div class="features_text">
				<h6>Features</h6>
				<h2>Design that solves problems, one product at a time</h2>
			</div>
			<div class="features_grid">
				<template v-for="(item, i) in featureCardsArr">
					<feature-cards :key="i" v-if="i === 0" :item="item"/>
				</template>
				<template v-for="(item, i) in featureCardsArr">
					<feature-cards :key="i" v-if="i === 1" :item="item"/>
				</template>
				<template v-for="(item, i) in featureCardsArr">
					<feature-cards :key="i" v-if="i === 2" :item="item"/>
				</template>
				<template v-for="(item, i) in featureCardsArr">
					<feature-cards :key="i" v-if="i === 3" :item="item"/>
				</template>
				<template v-for="(item, i) in featureCardsArr">
					<feature-cards :key="i" v-if="i === 4" :item="item"/>
				</template>
				<template v-for="(item, i) in featureCardsArr">
					<feature-cards :key="i" v-if="i === 5" :item="item"/>
				</template>
			</div>
		</div>
	</section>
	<section class="clients" v-if="homeSliderArr !== null">
		<div class="container">
			<div class="clients_flex">
				<div class="clients_flex_descr">
					<h3>What our clients say about us</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
				</div>
				<div class="clients_flex_slider">
					<carousel :settings="sliderSettings">
						<slide v-for="(item, i) in homeSliderArr" :key="i">
							<h5 class="clients_quote">{{item.quote}}</h5>
							<div class="slide_author">
								<div class="slide_img">
									<img :src="require('@/assets/images/home/'+item.img)" :alt="item.imgAlt">
								</div>
								<div class="slide_author_descr">
									<h5>{{item.authorName}}</h5>
									<h6>{{item.authorPosition}}</h6>
								</div>
							</div>
						</slide>
						<template #addons>
							<navigation />
						</template>
					</carousel>
				</div>
			</div>
		</div>
	</section>
	<faqs-accord/>
	<section class="contact">
		<div class="container">
			<div class="form_bg">
				<h2>Building stellar websites for early startups</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
			</div>
			<div class="form_input">
				<div class="form_input_wrap">
					<h5>Send inquiry</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
					<template>
						<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
							<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
								<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
							</symbol>
							<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
								<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
							</symbol>
						</svg>
					</template>
					<form id="home_form" @submit.prevent="checkAndSend">
						<div v-if="answer.success" class="alert_success">
							<svg width="24" height="24"><use xlink:href="#check-circle-fill"/></svg>
							<div>
								{{answer.text}}
							</div>
						</div>
						<div v-if="answer.success === false" class="alert_danger">
							<svg width="24" height="24"><use xlink:href="#exclamation-triangle-fill"/></svg>
							<div>
								{{answer.text}}
							</div>
						</div>
						<div class="form_flex">
							<div class="form_name">
								<input type="text" placeholder="Your Name" :class="{'error_input' : errors.name !== ''}" @focus="resetError('name')" v-model.trim="name">
								<div class="form_error_text">
									{{errors.name}}
								</div>
							</div>
							<div class="form_email">
								<input type="text" placeholder="Email" :class="{'error_input' : errors.email !== ''}" @focus="resetError('email')" v-model.trim="email">
								<div class="form_error_text">
									{{errors.email}}
								</div>
							</div>
							<div class="form_message">
								<input type="text" :class="{'error_input' : errors.message !== ''}" placeholder="Paste your comment" @focus="resetError('message')" v-model.trim="message">
								<div class="form_error_text">
									{{errors.message}}
								</div>
							</div>
							<button type="submit" class="round_btn">Send an Inquiry</button>
						</div>
					</form>
					<div class="arrow_wrap">
						<router-link to="contact" class="arrow_btn">Get in touch with us</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="our_blog">
		<div class="container">
			<router-link to="/blog" class="heading_link">Our blog</router-link>
			<div class="blog_card_wrap">
				<template  v-for="(item, i) in blogCardArr" >
					<blog-cards :key="i" v-if="i === 0" :item="item"/>
				</template>
				<template  v-for="(item, i) in blogCardArr" >
					<blog-cards :key="i" v-if="i === 1" :item="item"/>
				</template>
				<template  v-for="(item, i) in blogCardArr" >
					<blog-cards :key="i" v-if="i === 2" :item="item"/>
				</template>
			</div>
		</div>
	</section>
	
</template>

<script>

import HomeSection from '@/components/home/HomeSection.vue'
import WeWork from '@/components/home/WeWork.vue'
import FeatureCards from '@/components/feature/FeatureCards.vue'
import OurProjectsBig from '@/components/home/OurProjectsBig.vue'
import OurProjectsSm from '@/components/home/OurProjectsSm.vue'
import BlogCards from '@/components/blog/BlogCards.vue'
import FaqsAccord from '@/components/plugins/FaqsAccord.vue'
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Navigation, Slide} from 'vue3-carousel'
import axios from 'axios'

export default {
	name: 'HomeView',
	components: {
	HomeSection,
	WeWork,
	FeatureCards,
	OurProjectsBig,
	OurProjectsSm,
	BlogCards,
	FaqsAccord,
	Carousel,
	Navigation,
	Slide
},
	data () {
		return {
			weWorkCardArr: [],
			featureCardsArr: [],
			homeSectionArr: [],
			blogCardArr: [],
			homeSliderArr: null,
			ourProjectsArr: [],
			sliderSettings: {
				itemsToShow: 1,
				autoplay: 3000,
				wrapAround: true
			},
			API_BOT_ID: '5418916099:AAGDMXUx4XQRdK6ai4-m7Xco_1Q1wVDjT60',
			CHAT_ID: '-1001385692547',
			name: '',
			email: '',
			message: '',
			errors: {
				name: '',
				email: '',
				message: '',
			},
			answer: {
				success: null,
				text: ''
			}
		}
	},
	created() {
		axios
			.get('data/FeatureCards.json')
			.then (resp =>{
				this.featureCardsArr = resp.data;
			}),
		axios
			.get('data/HomeSection.json')
			.then (resp =>{
				this.homeSectionArr = resp.data;
			}),
		axios 
			.get('data/WeWork.json')
			.then (resp=>{
				this.weWorkCardArr = resp.data
			}),
		axios
			.get('data/HomeSlider.json')
			.then(resp=>{
				this.homeSliderArr = resp.data;
			}),
		axios 
			.get('data/Works/WorksCard.json')
			.then(resp=>{
				this.ourProjectsArr = resp.data;
			}),
		axios
			.get('data/BlogCard.json')
			.then(resp=>{
				this.blogCardArr = resp.data;
			})
	}, 
	methods: {
		checkAndSend(){
			let valid = true;
			if (this.name === ''){
				this.errors.name = 'Enter your name';
				valid = false;
			}
			if (this.name.length === 1){
				this.errors.name = 'Minimal length is 2 characters';
				valid = false;
			}
			if (this.email === ''){
				this.errors.email = 'Enter your email';
				valid = false;
			} else {
				if (this.isValidEmail(this.email) === false){
					this.errors.email = 'Enter valid email address';
					valid = false;
				}
			}
			if (this.message === ''){
				this.errors.message = 'Enter your message';
				valid = false;
			}
			if(valid){
				const message_text = '<i>Messages from home page form</i>'+
				'%0a<b>Name: </b>'+this.name + 
				'%0a<b>Email: </b>'+this.email + 
				'%0a<b>Message: </b>'+this.message;
				let url = `https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`;
				axios 
					.get(url)
					.then(resp=>{
					return resp.data
					})
					.then(resp=>{
						if (resp.ok){
							this.answer.success = true
							this.answer.text = 'Message successfully sent'
							this.name = this.email = this.message = ''

						} else {
							this.answer.success = false
							this.answer.text = 'Some error occurs. Please try again later'
						}
						setTimeout(()=>{
							this.answer.success = null
							this.answer.text = ''
						}, 3000)
					})
					.catch(()=>{
						this.answer.success = false
						this.answer.text = 'AJAX error. Please try again later'
					})}
			},
			resetError(fld){
			this.errors[fld] = '';
			},
			isValidEmail(email){
				return Boolean(email.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				))
			}
		}
}
</script>
<style lang="scss" scoped>
	@import '@/assets/css/pages/index.scss';
</style>
<style lang="scss">
.carousel__prev {
	position: absolute;
	z-index: 10;
	height: 48px;
	width: 48px;
	top: auto;
	left: auto;
	bottom: -28px;
	right: 20px;
	background: none;
	svg {
		display: none;
	}
	&::before {
			content: url('@/assets/images/home/clients/prev_arrow.svg');
			position: absolute;
			opacity: 1;
			width: 48px;
			height: 48px;
			top: 28%;
			left: 0%;
		}
		&:hover::before {
			content: url('@/assets/images/home/clients/prev_arrow_hover.svg');
		}
		&:hover::after {
			content: '';
			position: absolute;
			z-index: -5;
			top: 0;
			left: 0;
			width: 48px;
			height: 48px;
			background-color: #5239FA;
			border-radius: 50%;
		}
}
.carousel__next {
	position: absolute;
	z-index: 10;
	height: 48px;
	width: 48px;
	top: auto;
	left: auto;
	bottom: -28px;
	right: 0;
	background: none;
	svg {
		display: none;
	}
	&::before {
			content: url('@/assets/images/home/clients/next_arrow.svg');
			opacity: 1;
			width: 48px;
			height: 48px;
			position: absolute;
			top: 28%;
			left: 4%;
		}
		&:hover::before {
			content: url('@/assets/images/home/clients/next_arrow_hover.svg');
		}
		&:hover::after {
			content: '';
			position: absolute;
			z-index: -5;
			top: 0;
			left: 0;
			width: 48px;
			height: 48px;
			background-color: #5239FA;
			border-radius: 50%;
		}
}

@media screen and (max-width: 600px) {
	.carousel__prev, .carousel__next {
		display: none;
	}
}
</style>