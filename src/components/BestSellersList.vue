<template>
  <div id="list">
    <div class="navigation-buttons">
      <div class="is-pulled-left">
        <flat-pickr 
          v-model="date" 
          placeholder="Select a date"
          class="input date"
          @on-close="doSomething"
        ></flat-pickr>
      </div>
    </div>
    <div id="products" class="box">
      <span v-if="date">Displaying the list of best sellers for {{ date }}</span>
      <span v-else="date">Displaying the most recent list of best sellers </span>
      <div class="product-list">
        <div v-for="bestSeller in bestSellersList" class="product-list--item">
          <BestSellersListItem :bestSellerItem="bestSeller" :categoryName="categoryName"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import BestSellersListItem from './BestSellersListItem.vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'BestSellersList',
  components: {
    BestSellersListItem,
    flatPickr,
  },
  computed: {
    ...mapGetters([
      'bestSellersList'
    ])
  },
  props: [
      'categoryName'
  ],
  created() {
      this.$store.dispatch('getBestSellersList', 
        { 
          categoryName: this.$props.categoryName,
          date: this.date
        }
      );
      console.log(this.date);
  },
  destroyed() {
    this.$store.dispatch('clearBestSellersList');
  },
  data() {
      return {
        date: null,
      }
  },
  methods: {
    doSomething(e) {
      this.date = e;
      this.$store.dispatch('getBestSellersList', 
        { 
          categoryName: this.$props.categoryName,
          date: e
        }
      );
    }
  }
}
</script>

<style scoped>
.date {
  width: 150px;
}
#list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 700px
}

.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 2px 0;
}

.navigation-buttons {
  position: absolute;
  top: 5px;
  width: 99%;
  z-index: 99;
}
</style>