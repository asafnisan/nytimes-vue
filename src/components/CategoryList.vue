<template>
  <div>
    <div id="products" class="box">
      <div class="products--header has-text-centered">
        <i class="fa fa-2x fa-user-circle"></i>
      </div>
      <div class="product-list">
        <div v-for="category in categoryList" :key="category.name"
          class="product-list--item">
          <CategoryListItem :categoryItem="category"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem.vue';

export default {
  name: 'CategoryList',
  props: ['categoryList'],
  components: {
    CategoryListItem,
  },
  created() {
    console.log('hello world!', this.$props.categoryList);
  }
}
</script>

<style scoped>
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
  padding: 10px 0;
}
</style>