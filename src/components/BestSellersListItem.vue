<template>
<div>
  <div class="box">
    <div class="cart-item__details">
      <router-link
        :to="'/best-sellers/' + categoryName + '/' +  itemPath">
        {{ bestSellerItem.book_details[0].title }}
      </router-link>
      <span class="tag product-item__tag is-pulled-right">Rank: {{ bestSellerItem.rank }}</span>
      <div>
        <span class="is-inline">
          {{ bestSellerItem.book_details[0].author }}
        </span>
        <span>
          <i
            class="fa fa-arrow-circle-up cart-item__modify"></i>
          <i
            class="fa fa-arrow-circle-down cart-item__modify"></i>
        </span>
      </div>
    </div>
    <div class="cart-item__image"> 
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BestSellersListItem',
  props: [
      'bestSellerItem',
      'categoryName',
  ],
  computed: {
      itemPath() {
          return this
            .$props
            .bestSellerItem
            .book_details[0]
            .title.split(' ').join('-').toLowerCase()
      }
  },
  created() {
      // console.log('thisss:', this.itemPath)
      console.log('yo yo props:', this.$props.bestSellerItem);
  }
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}
.best-seller-item {
    margin-bottom: 30px;
}
.box {
    margin-bottom: 20px;
}
</style>