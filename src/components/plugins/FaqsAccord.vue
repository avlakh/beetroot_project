<template>
	<section class="faqs">
			<div class="container">
				<div class="faqs_flex">
					<div class="faqs_descr">
						<h3>Frequently asked questions</h3>
						<router-link to="contact">Contact us for more info</router-link>
					</div>
					<vue-collapsible-panel-group accordion base-color="#ffffff">
						<vue-collapsible-panel>
							<template #title>
								<h4 class="faqs_heading"><span class="faqs_number">01</span><span>How much time does it take?</span></h4>
							</template>
							<template #content>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</template>
						</vue-collapsible-panel>
						<vue-collapsible-panel :expanded="false">
							<template #title>
								<h4 class="faqs_heading"><span class="faqs_number">02</span><span>What is your class naming convention?</span></h4>
							</template>
							<template #content>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</template>
						</vue-collapsible-panel>
						<vue-collapsible-panel :expanded="false">
							<template #title>
								<h4 class="faqs_heading"><span class="faqs_number">03</span><span>How do you communicate?</span></h4>
							</template>
							<template #content>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</template>
						</vue-collapsible-panel>
						<vue-collapsible-panel :expanded="false">
							<template #title>
								<h4 class="faqs_heading"><span class="faqs_number">04</span><span>I have a bigger project. Can you handle it?</span></h4>
							</template>
							<template #content>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</template>
						</vue-collapsible-panel>
						<vue-collapsible-panel :expanded="false">
							<template #title>
								<h4 class="faqs_heading"><span class="faqs_number">05</span><span>What is your class naming convention?</span></h4>
							</template>
							<template #content>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</template>
						</vue-collapsible-panel>
					</vue-collapsible-panel-group>
				</div>
			</div>
		</section>
</template>

<style lang="scss" scoped>

@import '@/assets/css/vars.scss';

.vcp {
	margin-bottom: 10px;
}

.faqs {
padding: 128px 0;
}

.faqs_flex {
	display: flex;
	gap: 95px;
}

.faqs_descr {
	h3 {
		color: $dark-blue;
		margin-bottom: 16px;
	}
	a {
		font-weight: 500;
		font-size: 18px;
		line-height: 32px;
		text-align: center;
		color: $royal-blue;
		opacity: 0.8;
		transition: all .2s ease-out;
		&:hover {
			color: #000;
		}
	}
}

.faqs_number {
	margin-right: 56px;
}

.faqs_heading {
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: $dark-blue;
}
.faqs_number {
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: $royal-blue;
}
p {
	padding-left: 82px;
	font-weight: 500;
	font-size: 18px;
	line-height: 32px;
	color: $dark-blue;
	opacity: 0.8;
}

@media screen and (max-width: 1200px) {
	.faqs {
		padding: 60px 0 0;
	}
	.faqs_flex {
		flex-wrap: wrap;
		gap: 45px;
	}
}

@media screen and (max-width: 700px) {
	.vcp {
		margin-bottom: 20px;
	}
}

@media screen and (max-width: 600px) {
	.vcp {
		margin-bottom: 40px;
	}
}

@media screen and (max-width: 400px) {
	.vcp {
		margin-bottom: 65px;
		&:last-of-type {
			margin-bottom: 40px;
		}
	}
}

</style>

<style lang="scss">
	@media screen and (max-width: 700px) {
	.vcpg .vcp__header {
		margin-bottom: 20px;
	}
}
</style>

<script>
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
export default {
	name: 'FaqsAccord'
}
</script>