<template>
  <section id="product-item" class="box">
      <span class="return-icon">
          <i class="fa fa-arrow-left is-primary"></i>
      </span>
      <div class="product-item__details">
        <h1 class="title is-4">
        <p>item title</p>
        <span class="tag product-item__tag">item type</span>
        </h1>
        <p class="product-item__description">item description</p>
        <p class="product-item__created_at">
        Founded:
        <span class="has-text-weight-bold">
            item date
        </span>
        </p>
        <button 
            class="button is-primary product-item__button"
            >Add to Cart</button>
      </div>
      <div class="product-item__image">
          image will be here
      </div>
  </section>
</template>

<script>
export default {
    name: 'ItemDetail',
}
</script>

<style scoped>
#product-item {
    display: flex;
    width: 800px;
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
    max-width: 50%;
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