<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ErrorModal from "./components/ErrorModal.vue"
import SearchBar from './components/SearchBar.vue';
import InteractionModal from './components/InteractionModal.vue';



</script>

<template>
		<InteractionModal/>

		<!-- HEADER -->
		<header>
			<!-- TOP HEADER -->
			<div id="top-header">
				<div class="container-fluid p-2">
					<div class="row">
						<div class="d-none d-md-block col-12 col-md-9 col-lg-9">
							<ul class="header-links pull-left d-flex nowrap">
								<li><a href="#"><i class="fa fa-phone"></i> +58 424-4713056</a></li>
								<li><a href="#"><i class="fa fa-envelope-o"></i> jorgeram822@gmail.com</a></li>
								<li><a href="#"><i class="fa fa-map-marker text-nowrap"></i> 4WFQ+C58, Troncal11, Tocuyito 2035, Carabobo, Venezuela</a>
								</li>
							</ul>
						</div>
						<div class="col-12 col-md-3 col-lg-3">
							<ul class="header-links pull-right d-flex justify-content-rigth">
								<li><a href="#"><i class="fa fa-dollar"></i> USD</a></li>
								<li><a href="#"><i class="fa fa-user-o"></i> Mi Cuenta</a></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
			<!-- /TOP HEADER -->

			<!-- MAIN HEADER -->
			<div id="header">
				<!-- container -->
				<div class="container">
					<!-- row -->
					<div class="row">
						<!-- LOGO -->
						<div class="col-md-3">
							<div class="header-logo">
								<a href="#" class="logo">
									<img src="./img/logo.png" alt="">
								</a>
							</div>
						</div>
						<!-- /LOGO -->

						<SearchBar/>

						<!-- ACCOUNT -->
						<div class="col-md-3 clearfix h-50">
							<div class="header-ctn">
								<!-- Wishlist -->
								<div class="align-top">
									<a href="#">
										<i class="fa fa-heart-o"></i>
										<span class="d-block">lista de deseos</span>
										<div class="qty">2</div>
									</a>
								</div>
								<!-- /Wishlist -->

								<!-- Cart -->
								<div class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
										<i class="fa fa-shopping-cart"></i>
										<span class="d-block">Carrito</span>
										<div class="qty">3</div>
									</a>
									<div class="cart-dropdown">
										<div class="cart-list">
											<div class="product-widget">
												<div class="product-img">
													<img src="./img/product01.png" alt="">
												</div>
												<div class="product-body">
													<h3 class="product-name"><a href="#">Nombre del producto</a></h3>
													<h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
												</div>
												<button class="delete"><i class="fa fa-close"></i></button>
											</div>

											<div class="product-widget">
												<div class="product-img">
													<img src="./img/product02.png" alt="">
												</div>
												<div class="product-body">
													<h3 class="product-name"><a href="#">Nombre del producto</a></h3>
													<h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
												</div>
												<button class="delete"><i class="fa fa-close"></i></button>
											</div>
										</div>
										<div class="cart-summary">
											<small>3 Item(s) selected</small>
											<h5>SUBTOTAL: $2940.00</h5>
										</div>
										<div class="cart-btns d-flex">
											<a href="#">Ver Carrito</a>
											<a href="#">Checkout  <i class="fa fa-arrow-circle-right"></i></a>
										</div>
									</div>
								</div>
								<!-- /Cart -->

								<!-- Menu Toogle -->
								<div class="menu-toggle">
									<a href="#">
										<i class="fa fa-bars"></i>
										<span>Menu</span>
									</a>
								</div>
								<!-- /Menu Toogle -->
							</div>
						</div>
						<!-- /ACCOUNT -->
					</div>
					<!-- row -->
				</div>
				<!-- container -->
			</div>
			<!-- /MAIN HEADER -->
		</header>
		<!-- /HEADER -->

		<!-- NAVIGATION -->
		<nav id="navigation">
			<!-- container -->
			<div class="container">
				<!-- responsive-nav -->
				
					<!-- NAV -->
					<ul class="main-nav nav">
						<li class="nav-item active"><a href="#">Home</a></li>
						<li><a href="#">Tiendas y Franquicias</a></li>
						<li><a href="#">Ofertas</a></li>
						<li><a href="#">Categorías</a></li>
						<li><a href="#">Motores</a></li>
						<li><a href="#">Cajas y Transmisiones</a></li>
						<li><a href="#">Carrocería</a></li>
						<li><a href="#">Accesorios</a></li>
					</ul>
					<!-- /NAV -->
			</div>
			<!-- /container -->
		</nav>
		<!-- /NAVIGATION -->



		<!-- SECTION -->
		<div class="section">
      <div class="container pt-5">
        <RouterView />
      </div>
			
		</div>
		<!-- /SECTION -->

		<!-- FOOTER -->
		<footer id="footer">
			<!-- top footer -->
			<div class="section">
				<!-- container -->
				<div class="container">
					<!-- row -->
					<div class="row justify-content-center">
						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">Nosotros</h3>
								<p>Empresa dedicada a la importación de autopartes ( motores, cajas, carrocerias, transmisiones, trenes delanteros. Especialistas en: Ford, Chevrolet, cherokee, Toyota.</p>
								<ul class="footer-links">
									<li><a href="#"><i class="fa fa-map-marker"></i>4WFQ+C58, Troncal11, Tocuyito 2035, Carabobo, Venezuela</a></li>
									<li><a href="#"><i class="fa fa-phone"></i>+58 424-4713056</a></li>
									<li><a href="#"><i class="fa fa-envelope-o"></i>jorgeram822@gmail.com</a></li>
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">Categorías</h3>
								<ul class="footer-links">
									<li><a href="#">Ofertas</a></li>
									<li><a href="#">Motores</a></li>
									<li><a href="#">Cajas y Transmisiones</a></li>
									<li><a href="#">Carrocería</a></li>
									<li><a href="#">Accesorios</a></li>
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">Información</h3>
								<ul class="footer-links">
									<li><a href="#">Nosotros</a></li>
									<li><a href="#">Contáctanos</a></li>
									<li><a href="#">Política de Privacidad</a></li>
									
									<li><a href="#">Términos y condiciones</a></li>
								</ul>
							</div>
						</div>

						<div class="col-md-3 col-xs-6">
							<div class="footer">
								<h3 class="footer-title">Servicios</h3>
								<ul class="footer-links">
									<li><a href="#">Mi Cuenta</a></li>
									<li><a href="#">Ver Carrito</a></li>
									<li><a href="#">Wishlist</a></li>
									<li><a href="#">Tracking de orden</a></li>
									<li><a href="#">Ayuda</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /row -->
				</div>
				<!-- /container -->
			</div>
			<!-- /top footer -->

			<!-- bottom footer -->
			<div id="bottom-footer" class="section">
				<div class="container">
					<!-- row -->
					<div class="row">
						<div class="col-md-12 text-center">
							<ul class="footer-payments">
								<li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
								<li><a href="#"><i class="fa fa-credit-card"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
								<li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
							</ul>
							<span class="copyright">
								
								Copyright &copy;2022 MLS Parts
							
							</span>


						</div>
					</div>
						<!-- /row -->
				</div>
				<!-- /container -->
			</div>
			<!-- /bottom footer -->
		</footer>
		<!-- /FOOTER -->

		<!-- jQuery Plugins -->
		<!-- <script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/slick.min.js"></script>
		<script src="js/nouislider.min.js"></script>
		<script src="js/jquery.zoom.min.js"></script>
		<script src="js/main.js"></script> -->

    

</template>
