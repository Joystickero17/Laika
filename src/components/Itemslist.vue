<template>

	<!-- store top filter -->
	<div class="store-filter clearfix">
		<div class="store-sort">
			<label>
				Ordenar por:
				<select class="input-select">
					<option value="0">Popularidad</option>
					<option value="1">Recientes</option>
				</select>
			</label>
		</div>
	</div>
	<!-- /store top filter -->
	<!-- product -->
	<div v-if="getLoadingStatus" class="row">
		<div v-for="product in 9" :key="product.id" class="col-md-4 col-xs-6">
			<SkeletonLoader />
		</div>
	</div>
	
	<div v-if="!this.items.length && !getLoadingStatus">
		
		<NoResults/>
	</div>
	<div class="row">
		<div v-for="product in this.items" :key="product.id" class="col-md-4 col-xs-6">
			<div class="product">
				<div class="product-img">
					
					<img :src="product.thumbnail == null ? require('../img/no-photo.png') : product.thumbnail" alt="">
					<!-- <img src="../img/no-photo.png" alt=""> -->
					<div class="product-label">
						<span v-if="product.get_discount" class="sale">-{{product.discount}}%</span>
						<span class="new">{{product.verbose_condition}}</span>
					</div>
				</div>
				<div class="product-body">
					<p class="product-category">{{product.category.name}}</p>
					<h3 class="product-name"><a href="#">{{product.name}}</a></h3>
					<h4 class="product-price">{{ product.price ? `$${product.price}` : `Gratis`}} <del
							v-if="product.get_discount" class="product-old-price">${{product.get_discount}}</del></h4>
					<div class="product-rating">
					</div>
					<div class="product-btns">
						<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">Agregar a
								lista de deseos</span></button>
						<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick
								view</span></button>
					</div>
				</div>
				<div class="add-to-cart">
					<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar al Carrito</button>
				</div>
			</div>
		</div>
		<!-- /product -->
	</div>




	<!-- /store products -->
	<!-- store bottom filter -->
	<div class="store-filter clearfix">
		<span v-if="getProductsObj?.count" class="store-qty">{{getProductsObj["count"] >= 30 ?
		30:getProductsObj["count"]}} productos de {{getProductsObj["count"]}}</span>
		<ul class="store-pagination">
			<!-- <li class="active">1</li> -->
			<li v-for="page in getProductsObj?.total_pages" v-bind:key="page">
				<a :href="`/api/product/?page=${page}`">{{page}}</a>
			</li>
			<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
		</ul>
	</div>
	<!-- /store bottom filter -->

</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import NoResults from './NoResults.vue';
import SkeletonLoader from "./SkeletonLoader.vue";


export default {
	components: {
    SkeletonLoader,
    NoResults
},
	mounted() {
		if (!this.items) {
			this.items = {}
		}
	},
	data: () => {
		return {
		}
	},
	props: [
		"items"
	],
	computed: {
		...mapGetters("productModule", [
			"getProductsCount",
			"getProductsObj",
		]),
		...mapGetters(["getLoadingStatus",
			"getCurrentErrors"])
	}
}
</script>