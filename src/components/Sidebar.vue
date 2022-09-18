
<template>
  <!-- ASIDE -->
  <div id="aside" class="col-md-12">
    <!-- aside Widget -->
    <div class="aside">
      <h3 class="aside-title">Categorías</h3>
      <div class="checkbox-filter">
        <div
          v-for="category in categories"
          :key="category.id"
          class="input-checkbox"
        >
          <input type="checkbox" id="category-1" />
          <label for="category-1">
            <span></span>
            {{ category.name }}
            <small class="d-inline">(120)</small>
          </label>
        </div>
      </div>
    </div>
    <!-- /aside Widget -->

    <!-- aside Widget -->
    <div class="aside">
      <h3 class="aside-title">Precio</h3>
      <div class="price-filter">
        <div ref="priceslider"></div>
        <div class="input-number price-min">
          <input ref="priceMin" v-model="minPrice" type="number" />
          <span @click="minPrice += 1" class="qty-up">+</span>
          <span @click="minPrice < 1 ? 1 : (minPrice -= 1)" class="qty-down"
            >-</span
          >
        </div>
        <span>-</span>
        <div class="input-number price-max">
          <input ref="priceMax" v-model="maxPrice" type="number" />
          <span @click="maxPrice += 1" class="qty-up">+</span>
          <span @click="maxPrice < 1 ? 1 : (maxPrice -= 1)" class="qty-down"
            >-</span
          >
        </div>
      </div>
	  <div class="row pt-4 justify-content-center">
		<div class="input-checkbox">
          <input v-model="seeFreeProducts" type="checkbox" id="free-products" />
          <label for="free-products">
            <span></span>
            <small>Ver productos Gratuitos</small>
          </label>
        </div>
		
	  </div>
      <div class="row pt-4 justify-content-center">

        <button @click="this.fetchProducts()" class="btn btn-danger btn-block w-75">Filtrar</button>
      </div>
    </div>
    <!-- /aside Widget -->

    <!-- aside Widget -->
    <div class="aside">
      <h3 class="aside-title">Marcas</h3>
      <div class="checkbox-filter">
        <div class="input-checkbox">
          <input type="checkbox" id="brand-1" />
          <label for="brand-1">
            <span></span>
            General Motors
            <small>(578)</small>
          </label>
        </div>
        <div class="input-checkbox">
          <input type="checkbox" id="brand-2" />
          <label for="brand-2">
            <span></span>
            Ford
            <small>(125)</small>
          </label>
        </div>
        <div class="input-checkbox">
          <input type="checkbox" id="brand-3" />
          <label for="brand-3">
            <span></span>
            Jeep
            <small>(755)</small>
          </label>
        </div>
        <div class="input-checkbox">
          <input type="checkbox" id="brand-4" />
          <label for="brand-4">
            <span></span>
            Isuzu
            <small>(578)</small>
          </label>
        </div>
        <div class="input-checkbox">
          <input type="checkbox" id="brand-5" />
          <label for="brand-5">
            <span></span>
            Fiat
            <small>(125)</small>
          </label>
        </div>
        <div class="input-checkbox">
          <input type="checkbox" id="brand-6" />
          <label for="brand-6">
            <span></span>
            Toyota
            <small>(755)</small>
          </label>
        </div>
      </div>
    </div>
    <!-- /aside Widget -->

    <!-- aside Widget -->
    <div class="aside">
      <h3 class="aside-title">Más vendidos</h3>
      <div class="product-widget">
        <div class="product-img">
          <img src="../img/product01.png" alt="" />
        </div>
        <div class="product-body">
          <p class="product-category">Categoría</p>
          <h3 class="product-name"><a href="#">Nombre del producto</a></h3>
          <h4 class="product-price">
            $980.00 <del class="product-old-price">$990.00</del>
          </h4>
        </div>
      </div>

      <div class="product-widget">
        <div class="product-img">
          <img src="../img/product02.png" alt="" />
        </div>
        <div class="product-body">
          <p class="product-category">Categoría</p>
          <h3 class="product-name"><a href="#">Nombre del producto</a></h3>
          <h4 class="product-price">
            $980.00 <del class="product-old-price">$990.00</del>
          </h4>
        </div>
      </div>

      <div class="product-widget">
        <div class="product-img">
          <img src="../img/product03.png" alt="" />
        </div>
        <div class="product-body">
          <p class="product-category">Categoría</p>
          <h3 class="product-name"><a href="#">Nombre del producto</a></h3>
          <h4 class="product-price">
            $980.00 <del class="product-old-price">$990.00</del>
          </h4>
        </div>
      </div>
    </div>
    <!-- /aside Widget -->
  </div>
  <!-- /ASIDE -->
</template>
<script>
import noUiSlider from "nouislider/dist/nouislider.mjs";
import store from '../store';
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  props: ["categories"],
  data() {
    return {
      categories: [],
      minPrice: 1,
      maxPrice: 999,
	  seeFreeProducts: true,
    };
  },
  methods: {
	...mapMutations("productModule",[
		"updateMinPrice",
		"updateMaxPrice",
		"setSeeFreeProducts"
	]),
	...mapActions("productModule",[
		"fetchProducts"
	])
  },
  watch: {
    minPrice(value) {
      console.log(value);
      if (this.$refs.priceslider) {
        this.$refs.priceslider.noUiSlider.set([value, null]);
        this.updateMinPrice(value);
      }
    },
    maxPrice(value) {
      this.$refs.priceslider.noUiSlider.set([null, value]);
      this.updateMaxPrice(value)
    },
	seeFreeProducts(value){
		this.setSeeFreeProducts(value)
	}
  },
  mounted() {
    if (this.$refs.priceslider) {
      noUiSlider.create(this.$refs.priceslider, {
        start: [1, 999],
        connect: true,
        step: 1,
        range: {
          min: 1,
          max: 999,
        },
      });

      this.$refs.priceslider.noUiSlider.on("update", (values, handle) => {
        let value = values[handle];
        if (handle == 0) {
          this.minPrice = parseInt(value);
        } else {
          this.maxPrice = parseInt(value);
        }
      });
    }
  },
  computed:{
	...mapGetters([
		"getSearchParam"
	])
  }
};
</script>
