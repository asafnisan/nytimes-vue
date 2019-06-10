<template>
  <div class="category-item">
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-usd"></i>
    </span>
    <h2 class="has-text-weight-bold">
      <router-link
        :to="'/best-sellers/' + categoryItem.list_name_encoded">
        {{ categoryItem.display_name }}
      </router-link>
    </h2>
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
.category-item {
    margin-bottom: 30px;
}
</style>