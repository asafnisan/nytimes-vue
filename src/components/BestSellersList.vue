<template>
  <div>
    <div id="products" class="box">
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

export default {
  name: 'BestSellersList',
  components: {
    BestSellersListItem,
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
      this.$store.dispatch('getBestSellersList', this.$props.categoryName);
  },
  destroyed() {
    this.$store.dispatch('clearBestSellersList');
  }
}
</script>

<style scoped>
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
</style>