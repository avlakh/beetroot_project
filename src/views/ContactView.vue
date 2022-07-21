<template>
	<section class="contact container">
			<div class="contact_form_text">
				<h2>Contact Us</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
				<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
				</symbol>
				<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
					<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
				</symbol>
			</svg>
			<div class="form_container">
				<form id="main_form" @submit.prevent="checkAndSend">
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
					<div class="contact_form">
						<div class="form_input form_first_name">
							<label for="first_name">Your First Name</label>
							<input :class="{'error_input': errors.firstName !== ''}" type="text" id="first_name" placeholder="Enter your first name" v-model.trim="firstName" @focus="resetError('firstName')">
							<div class="form_error_text">{{errors.firstName}}</div>
						</div>
						<div class="form_input form_last_name">
							<label for="last_name">Your Last Name</label>
							<input :class="{'error_input': errors.lastName !== ''}" type="text" id="last_name" placeholder="Enter your last name" v-model.trim="lastName" @focus="resetError('lastName')">
							<div class="form_error_text">{{errors.lastName}}</div>
						</div>
						<div class="form_input form_email">
							<label for="email">Your Email</label>
							<input :class="{'error_input': errors.email !== ''}" type="text" id="email" placeholder="Enter your email" v-model.trim="email" @focus="resetError('email')">
							<div class="form_error_text">{{errors.email}}</div>
						</div>
						<div class="form_input form_subject">
							<label for="subject">Subject</label>
							<input :class="{'error_input': errors.subject !== ''}" type="text" id="subject" placeholder="Enter subject of your email" v-model.trim="subject" @focus="resetError('subject')">
							<div class="form_error_text">{{errors.subject}}</div>
						</div>
						<div class="form_input form_message">
							<label for="message">Message</label>
							<textarea :class="{'error_input': errors.message !== ''}" id="message" placeholder="Enter your message to us" v-model.trim="message" @focus="resetError('message')"></textarea>
							<div class="form_error_text">{{errors.message}}</div>
						</div>
						<button type="submit" class="round_btn">Send message</button>
					</div>
				</form>
			</div>
		</section>
</template>

<script>
import axios from 'axios';
export default {
	name: "ContactView",
	data () {
		return {
			API_BOT_ID: '5418916099:AAGDMXUx4XQRdK6ai4-m7Xco_1Q1wVDjT60',
			CHAT_ID: '-1001385692547',
			firstName: '',
			lastName: '',
			email: '',
			subject: '',
			message: '',
			errors: {
				firstName: '',
				lastName: '',
				email: '',
				subject: '',
				message: ''
			},
			answer: {
				success: null,
				text: ''
			}
		}
	},
	methods: {
		checkAndSend(){
			let valid = true;
			if (this.firstName === ''){
				this.errors.firstName = 'Enter your first name';
				valid = false;
			}
			if (this.firstName.length === 1){
				this.errors.firstName = 'Minimal length is 2 characters';
				valid = false;
			}
			if (this.lastName === ''){
				this.errors.lastName = 'Enter your last name';
				valid = false;
			}
			if (this.lastName.length === 1){
				this.errors.lastName = 'Minimal length is 2 characters';
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
			if (this.subject === ''){
				this.errors.subject = 'Enter your subject';
				valid = false;
			}
			if (this.message === ''){
				this.errors.message = 'Enter your message';
				valid = false;
			}
			if (valid){
				const message_text = '<i>Messages from main contact form</i>'+
				'%0a<b>First Name: </b>'+this.firstName + 
				'%0a<b>Last Name: </b>'+this.lastName + 
				'%0a<b>Email: </b>'+this.email + 
				'%0a<b>Subject: </b>'+this.subject + 
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
							this.firstName = this.lastName = this.email = this.subject = this.message = ''

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
			this.errors[fld] = ''
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

	@import '@/assets/css/vars.scss';
	.contact {
	padding-top: 220px;
}

.form_container {
	max-width: 1060px;
	width: 90%;
	margin: 0 auto 64px;
}

.alert_success {
	display: flex;
	align-items: center;
	gap: 15px;
	background-color: #badbcc;
	color: #000;
	border-radius: 12px;
	padding: 10px;
	width: 35%;
	margin: 0 auto 25px;
}

.alert_danger {
	display: flex;
	align-items: center;
	gap: 15px;
	background-color: #f8d7da;
	color: #000;
	border-radius: 12px;
	padding: 10px;
	width: 35%;
	margin: 0 auto 25px;
}

.contact_form_text {
	width: 40%;
	margin: 0 auto;
	text-align: center;
	margin-bottom: 64px;
	h2 {
		margin-bottom: 20px;
	}
}

.contact_form {
	border-radius: 12px;
	width: 100%;
	background-color: $grey;
	padding: 50px 76px 0px;
	display: grid;
	gap: 0 34px;
	grid-template: repeat(4, 150px) / 1fr 1fr;
}

.form_input {
	margin-bottom: 16px;
}

label {
	display: block;
	font-weight: 500;
	font-size: 18px;
	line-height: 32px;
	margin-bottom: 8px;
}

input, textarea {
	display: block;
	width: 100%;
	font-family: 'Poppins';
	font-weight: 400;
	font-size: 16px;
	line-height: 28px;
	padding: 18px 32px;
	background-color: $grey;
	border: 1px solid rgba(0, 0, 0, 0.12);
	border-radius: 8px;
}

.error_input {
	border: 1px solid red;
}

textarea {
	resize: none;
}

.form_error_text {
	color: red;
}

.form_message {
	grid-column: 1 / 3;
}

.round_btn {
	display: block;
	cursor: pointer;
	height: 64px;
	width: 250px;
	background-color: $dark-blue;
	outline-color: $dark-blue;
	border: 1px solid $dark-blue;
	border-radius: 41px;
	padding: 15px 51px;
	font-family: 'Manrope';
	font-weight: 600;
	font-size: 18px;
	line-height: 32px;
	text-align: center;
	color: #fff;
	margin-top: 20px;
	&:hover {
		background-color: #535460;
		border-color: #535460;
		outline-color: #535460;
	}
	&:active {
		background-color: $dark-blue;
		outline-color: $dark-blue;
		border: 1px solid $dark-blue;
	}
}

@media screen and (max-width: 1000px) {
	.contact_form_text {
		width: 100%;
	}
	.contact_form {
		padding-bottom: 32px;
	}
	.form_input {
		grid-column: 1 / 3;
	}
}

@media screen and (max-width: 700px) {
	.contact {
		padding-top: 150px;
	}
	.contact_form {
		padding: 25px 38px 32px;
	}
}

@media screen and (max-width: 500px) {
	.contact_form {
		padding: 15px 15px 32px;
	}
	input, textarea {
		padding: 18px 10px;
	}
	.round_btn {
		padding: 15px 25px;
		width: 200px;
		margin-top: 10px;
	}
}

</style>