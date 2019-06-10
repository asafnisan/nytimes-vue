<template>
  <div>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-usd"></i> ...
    </span>
    <h2 class="has-text-weight-bold">
      <router-link
        :to="'/item-detail/dynamic-id'">
        Go to category best sellers
      </router-link>
      <span
        class="tag is-primary is-pulled-right has-text-white">
          See list of best sellers 
      </span>
    </h2>
    <p>Placeholder value</p>
  </div>
</template>

<script>
export default {
  name: 'BestSellersListItem',
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}
</style>