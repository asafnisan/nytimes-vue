<template>
  <div id="product-item" class="box">
      hello
      <!-- <div v-if="item.book_details"class="product-item__details">
        <h1 class="title is-4">
        <p>{{ item.book_details[0].title }}</p>
        <br>
        </h1>
        <p class="product-item__created_at">
        Author:
        <span class="has-text-weight-bold">
            {{ item.book_details[0].author }}
        </span>
        </p>
        <p class="product-item__created_at">
        Publisher:
        <span class="has-text-weight-bold">
            {{ item.book_details[0].publisher }}
        </span>
        </p>
        <p class="product-item__created_at">
        Published:
        <span class="has-text-weight-bold">
            {{ item.published_date }}
        </span>
        </p>
        <p class="product-item__description">{{ item.book_details[0].description }}</p>
        <br>
        <br>
        <a :href="item.amazon_product_url"> 
        <button 
            class="button is-primary product-item__button is-pulled-right"
            >See on Amazon
        </button>
        </a>
      </div> -->
  </div>
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
        return this.$store.state.item.item;
    }
  },
  props: [
      'dynamicId',
      'categoryName',
      'selectedDate',
  ],
  created() {
      if (this.$props.selectedDate !== null) {
          console.log('here is the selected date:', this.$props.selectedDate);
      };
      if(this.$props.selectedDate)
      this.$store.dispatch('getItem', 
        { 
            categoryName: this.$props.categoryName, 
            dynamicId: this.$props.dynamicId,
            selectedDate: this.$props.selectedDate
        }
      );
  },
  destroyed() {
      this.$store.dispatch('clearItemDetail');
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