<template>
	<main class="page">
		<section class="detail">
			<div class="card-detail">
				<h1>Привет, меня зовут <span>Илья</span></h1>
				<p>
					Это мой сайт-портфолио, тут ты можешь увидеть все детали обо мне и об
					моих работах накопленных во время прохождения курсов в московском
					университете "Синергия"
				</p>
				<div class="btn-container">
					<button class="btn" @click="$router.push('/blog')">click</button>
				</div>
			</div>

			<div class="card-detail-image">
				<img src="../../images/5445178792663447678.jpg" alt="" />
			</div>
		</section>

		<AboutSection></AboutSection>

		<footer class="footer">
			<div class="container">
				<div class="row">
					<div class="footer-col">
						<h4>FAQ</h4>
						<ul>
							<li><a href="#">Billing</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Pricing</a></li>
							<li><a href="#">Affiliate Program</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>Services</h4>
						<ul>
							<li><a href="#">Shipping</a></li>
							<li><a href="#">Network</a></li>
							<li><a href="#">Order status</a></li>
							<li><a href="#">Payments</a></li>
							<li><a href="#">3D Security</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>About Us</h4>
						<ul>
							<li><a href="#">Company</a></li>
							<li><a href="#">Employment</a></li>
							<li><a href="#">Projects</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h4>Social Media</h4>
						<div class="socials">
							<a href="#"><i class="bx bxl-instagram"></i></a>
							<a href="#"><i class="bx bxl-facebook-square"></i></a>
							<a href="#"><i class="bx bxl-twitter"></i></a>
							<a href="#"><i class="bx bxl-linkedin-square"></i></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</main>
</template>

<script>
import AboutSection from './AboutSection.vue'

export default {
	name: 'HomePage',
	components: {
		AboutSection,
	},
}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: "Montserrat", sans-serif;
		box-sizing: border-box;
	}
	.btn {
		padding: .5vw 1.5vw;
		border: 0;
		border-radius: 20px;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 1rem;
	}
	img {
		width: 100%;
	}
	.detail {
		display: flex;
		width: 100%;
		min-height: 100vh;
		position: relative;
		justify-content: space-around;
	}
	.card-detail, .card-detail-image {
		width: 50%;
	}
	.card-detail {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.card-detail-image {
		width: 30%;	
		display: flex;
		align-items: center;
	}
	.card-detail h1 {
		text-transform: uppercase;
		font-size: 6rem;
		margin-bottom: 2vh;
	}
	.card-detail p {
		font-size: 1.3rem;
		text-align: justify;
		margin-bottom: 2vh;
	}
	@media (max-width: 501px) {
		.detail {
			
			margin-bottom: 2rem;
		}
		.card-detail-image, .card-detail {
			width: 100%;
		}
		.card-detail {
			display: block;
			margin: 8rem 1rem 8rem 1rem;
			
		}
		.card-detail-image {
			overflow: hidden; 	
			height: 100px;
			position: absolute;
			top: 0;
			
		}
		.card-detail-image img {
			min-height: 100px;
			transform: translateY(80px);
		}
		.card-detail h1 {
			font-size: 3rem;
		}
	}

</style>
