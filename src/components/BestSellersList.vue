<template>
  <div>
    <div id="products" class="box">
      <div class="products--header has-text-centered">
        <i class="fa fa-2x fa-user-circle"></i>
      </div>
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
      console.log(this.bestSellersList)
  }
}
</script>

<style scoped>
.box {
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