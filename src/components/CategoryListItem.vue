<template>
  <div>
    <h2 class="has-text-weight-bold">
      <span
        class="tag is-primary is-pulled-right has-text-white">
          Add to Cart
      </span>
    </h2>
    <p>{{ categoryItem }}</p>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-usd"></i> Static info
    </span>
  </div>
</template>

<script>
export default {
  name: 'CategoryListItem',
  props: ['categoryItem'],
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}
</style>