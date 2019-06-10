<template>
  <section id="product-item" class="box">
      <div class="product-item__details">
        <h1 class="title is-4">
        <p>{{ item[0].book_details[0].title }}</p>
        </h1>
        <p class="product-item__description">{{ item[0].book_details[0].description }}</p>
        <p class="product-item__created_at">
        Published:
        <span class="has-text-weight-bold">
            {{ item[0].published_date }}
        </span>
        </p>
        <a :href="item[0].amazon_product_url"> 
        <button 
            class="button is-primary product-item__button is-pulled-right"
            >See on Amazon
        </button>
        </a>
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ItemDetail',
  computed: {
    ...mapGetters([
      'bestSellersList'
    ]),
    item() {
        return this.bestSellersList.filter((item) => {
            return item
                .book_details[0]
                .title.split(' ').join('-').toLowerCase() 
                === this.$props.dynamicId
        })
    }
  },
  props: [
      'dynamicId',
      'categoryName',
  ],
  created() {
      console.log(this.$store.state.bestSellers.bestSellersList)
      console.log(this.$props.dynamicId)
      console.log('expected?:', this.$props.categoryName)
      console.log(this.item[0])
  }
}
</script>

<style scoped>
#product-item {
    display: flex;
    width: 700px;
    position: relative;
}

.return-icon {
    position: absolute;
    top: 5px;
    left: 10px;
    color: #00d1b2;
    cursor: pointer;
}

.product-item__details {
    max-width: 100%;
    padding-left: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-item__image {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-item__description {
    padding-bottom: 10px;
}

.product-item__created_at {
    font-size: 12px;
    padding-bottom: 10px;
}

.product-item__button {
    max-width: 150px;
}
</style>