<template>
  <div>
    <div id="products" class="box">
      <div class="products--header has-text-centered">
        Pick a category
        <i class="fa fa-2x fa-user-circle"></i>
      </div>
      <div class="product-list">
        <div v-for="category in categoryNamesList" :key="category.list_name"
          class="product-list--item">
          <CategoryListItem :categoryItem="category"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CategoryListItem from './CategoryListItem.vue';

export default {
  name: 'CategoryList',
  components: {
    CategoryListItem,
  },
  computed: {
    ...mapGetters([
      'categoryNamesList'
    ])
  }
}
</script>

<style scoped>
.box {
  width: 100%;
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
  padding: 0px 0;
}
</style>