<template>
	<section class="about_us_home container">
		<template v-for="(item, i) in ourApproachArr">
			<our-approach :key="i" v-if="i === 0" :item="item"/>
		</template>
	</section>
	<section class="who_we_are">
		<div class="container">
			<template v-for="(item, index) in whoWeAreArr" :key="index">
				<who-we-are :item="item"/>
			</template>
		</div>
	</section>
	<section class="our_process">
		<div class="container">
			<h2>The process we follow</h2>
			<div class="our_process_flex">
				<template v-for="(item, index) in ourProcessArr" :key="index">
					<our-process :item="item"/>
				</template>
			</div>
		</div>
	</section>
	<section class="our_approach">
		<div class="container">
			<template v-for="(item, i) in ourApproachArr">
				<our-approach :key="i" v-if="i === 1" :item="item"/>
			</template>
			<template v-for="(item, i) in ourApproachArr">
				<our-approach-reverse :key="i" v-if="i === 2" :item="item"/>
			</template>
		</div>
	</section>
	<section class="features container">
		<h2>The benefits of working with us</h2>
		<div class="features_grid">
			<template v-for="(item, i) in featureCardsArr">
				<feature-cards :key="i" v-if="i === 6" :item="item"/>
			</template>
			<template v-for="(item, i) in featureCardsArr">
				<feature-cards :key="i" v-if="i === 7" :item="item"/>
			</template>
			<template v-for="(item, i) in featureCardsArr">
				<feature-cards :key="i" v-if="i === 8" :item="item"/>
			</template>
		</div>
		<template v-for="(item, i) in featurePartnersArr">
			<feature-partners :key="i" v-if="i === 0" :item="item"/>
		</template>
	</section>
	<section class="our_team">
			<div class="container">
				<h2>Meet our team</h2>
				<div class="our_team_grid">
					<template v-for="(item, i) in teamCardsArr">
						<team-cards :key="i" v-if="i === 0" :item="item"/>
					</template>
					<template v-for="(item, i) in teamCardsArr">
						<team-cards :key="i" v-if="i === 1" :item="item"/>
					</template>
					<template v-for="(item, i) in teamCardsArr">
						<team-cards :key="i" v-if="i === 2" :item="item"/>
					</template>
					<template v-for="(item, i) in teamCardsArr">
						<team-cards :key="i" v-if="i === 3" :item="item"/>
					</template>
				</div>
			</div>
		</section>
</template>

<script>

import axios from 'axios';
import WhoWeAre from '@/components/about_us/WhoWeAre.vue';
import OurProcess from '@/components/about_us/OurProcess.vue';
import OurApproach from '@/components/about_us/OurApproach.vue';
import OurApproachReverse from '@/components/about_us/OurApproachReverse.vue'
import FeatureCards from '@/components/feature/FeatureCards.vue'
import FeaturePartners from '@/components/feature/FeaturePartners.vue';
import TeamCards from '@/components/about_us/TeamCards.vue'

export default {
	name: 'AboutUs',
	components: {
		WhoWeAre,
		OurProcess,
		OurApproach,
		OurApproachReverse,
		FeatureCards,
		FeaturePartners,
		TeamCards,
},
	data () {
		return {
			ourApproachArr: [],
			featureCardsArr: [],
			teamCardsArr: [],
			featurePartnersArr: [],
			whoWeAreArr: [],
			ourProcessArr: []
		}
	},
	created() {
		axios
			.get('../data/OurApproach.json')
			.then (resp =>{
				this.ourApproachArr = resp.data;
			}),
		axios 
			.get('../data/FeatureCards.json')
			.then (resp => {
				this.featureCardsArr = resp.data;
			}),
		axios
			.get('../data/TeamCards.json')
			.then (resp => {
				this.teamCardsArr = resp.data;
			}),
		axios
			.get('../data/FeaturePartners.json')
			.then (resp => {
				this.featurePartnersArr = resp.data;
			}),
		axios
			.get('../data/WhoWeAre.json')
			.then (resp => {
				this.whoWeAreArr = resp.data;
			}),
		axios
			.get('../data/OurProcess.json')
			.then (resp => {
				this.ourProcessArr = resp.data;
			})
	}

}
</script>

<style lang="scss" scoped>
	@import '@/assets/css/pages/about_us.scss'
</style>