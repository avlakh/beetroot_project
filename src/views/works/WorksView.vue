<template>
	<section class="works_home_section">
		<div class="container">
			<div class="works_home_flex">
				<h4>What we created</h4>
				<h2>Our Work Portfolio</h2>
				<p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
				<ul class="sm_list">
					<li><a href="https://www.facebook.com/" target="_blank" title="Facebook"><i class="icon icon-facebook"></i></a></li>
					<li><a href="https://twitter.com/" target="_blank" title="Twitter"><i class="icon icon-twitter"></i></a></li>
					<li><a href="https://www.instagram.com/" target="_blank" title="Instagram"><i class="icon icon-instagram"></i></a></li>
					<li><a href="https://www.linkedin.com/" target="_blank" title="LinkedIn"><i class="icon icon-linkedin-square"></i></a></li>
				</ul>
			</div>
		</div>
	</section>
	<section class="templates">
		<div class="container">
			<div class="templates_list_flex">
				<ul class="templates_list">
					<li><a @click="setType('')" :class="{'active' : type === ''}">All</a></li>
					<li v-for="t in typesList" :key="t"><a @click="setType(t)" :class="{'active' : t === type}">{{t}} Design</a></li>
				</ul>
			</div>
			<div class="templates_grid">
				<template v-for="(item, i) in cardList()" :key="i">
					<works-card :item="item"/>
				</template>
			</div>
		</div>
		
	</section>
	<template v-for="(item, i) in buildTogetherArr" :key="i">
		<build-together :item="item"/>
	</template>
	
</template>

<script>
import axios from 'axios'
import WorksCard from '@/components/works/WorksCard.vue'
import BuildTogether from '@/components/works/BuildTogether.vue'

export default {
	name: 'WorksView',
	components: {
		WorksCard,
		BuildTogether
	},
	data (){
		return {
			worksCardArr: [],
			buildTogetherArr: [],
			type: '',
			typesList: []
		}
	},
	created(){
		axios
			.get('data/Works/WorksCard.json')
			.then(resp=>{
				this.worksCardArr = resp.data;
				this.getTypesList();
			}),
		axios
			.get('data/BuildTogether.json')
			.then(resp=>{
				this.buildTogetherArr = resp.data;
			})
	}, 
	methods: {
		cardList(){
			let arr = [];
			if (this.type !== ''){
				arr = this.worksCardArr.filter(el=>el.type === this.type);
			} else {
				arr = this.worksCardArr;
			}
			return arr
		},
		getTypesList(){
			let arr = [];
			this.worksCardArr.forEach(el=>{
				if (arr.indexOf(el.type) === -1){
					arr.push(el.type);
				}
			})
			this.typesList = arr;
		},
		setType(type){
			this.type = type;
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '@/assets/css/pages/works.scss';
</style>