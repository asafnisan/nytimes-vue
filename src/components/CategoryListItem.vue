<template>
  <div class="category-item">
    <p class="has-text-weight-bold">
      <router-link
        :to="'/best-sellers/' + categoryItem.list_name_encoded">
        {{ categoryItem.display_name }}
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CategoryListItem',
  props: ['categoryItem'],
}
</script>

<style scoped>
.has-text-weight-bold {
  font-size: 20px;
  margin-bottom: 0px;
}
.tag {
  cursor: pointer;
}
.category-item {
    margin-bottom: 4px;
}
</style>