<template>
  <div id="app">
    <CategoryList :categoryList="list"/>
  </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue'

const list = [
  {
    name: 'Category 1',
  },
  {
    name: 'Category 2',
  },
  {
    name: 'Category 3',
  },
  {
    name: 'Category 4',
  }
];

export default {
  name: 'app',
  components: {
    CategoryList,
  },
  data() {
    return {
      list
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  background: #F2F6FA;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

.column--align-center {
  margin: 0 auto;
}

.navigation-buttons {
  position: absolute;
  top: 5px;
  width: 99%;
  z-index: 99;
}

.navigation-buttons .button .fa {
  padding-right: 5px;
}
</style>
