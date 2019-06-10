<template>
  <div>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-usd"></i> Category
    </span>
    <h2 class="has-text-weight-bold">
      <span
        class="tag is-primary is-pulled-right has-text-white">
          See Detail
      </span>
    </h2>
    <p>{{ categoryItem.display_name }}</p>
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