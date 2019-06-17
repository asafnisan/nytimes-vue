<template>
  <div id="list">
    <div id="date-picker" class="box is-pulled-left">
      <span id="date-label">Pick a date:</span>
      <div class="navigation-buttons">
        <div>
          <flat-pickr 
            v-model="date" 
            placeholder="Select a date"
            class="input date"
            @on-close="selectDate"
          ></flat-pickr>
        </div>
      </div>
    </div>
    <div class="box">
      <div v-if="bestSellersError === ''">
        <span v-if="date" class="tag product-item__tag">Displaying the list of best sellers for {{ date }} // Category: {{ category }}</span>
        <span v-else="date" class="tag product-item__tag">Displaying the most recent list of best sellers // Category: {{ category }}</span>
        <div class="product-list">
          <div v-for="bestSeller in bestSellersListInChunks[selectedPageIndex]" 
            class="product-list--item">
            <BestSellersListItem 
              :bestSellerItem="bestSeller" 
              :categoryName="categoryName"
              :selectedDate="date"
            />
          </div>
        </div>
        <nav class="pagination" role="navigation" aria-label="pagination">
          <ul class="pagination-list">
            <li v-for="(list, index) in bestSellersListInChunks.length">
              <a 
                v-bind:class="{ 'is-current': index === selectedPageIndex }"
                @click="handlePaginationClick(index)"
                class="pagination-link" 
                aria-label="Goto page 1">{{ index + 1 }}</a>
            </li>
            <!-- <li>
              <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">3</a>
            </li> -->
          </ul>
        </nav>
      </div>
      <div v-else>
        <span id="error">{{ bestSellersError }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import BestSellersListItem from './BestSellersListItem.vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'BestSellersList',
  components: {
    BestSellersListItem,
    flatPickr,
  },
  computed: {
    ...mapGetters([
      'bestSellersList',
      'bestSellersError'
    ]),
    bestSellersListInChunks() {
      const listLength = this.bestSellersList.length;
      const bestSellersList = this.bestSellersList;
      var chunkifiedBestSellersList = [];
      for(var j = 0; j < Math.ceil(listLength / 5); j++) {
        var chunk = [];
        chunkifiedBestSellersList.push(chunk);
      }
      var i = 0;
      chunkifiedBestSellersList = chunkifiedBestSellersList.map((chunk) => {
        for(var k = 0; k < 5; k++) {
          chunk.push(bestSellersList[i]);
          i++;
        }
        return chunk;
      });
      return chunkifiedBestSellersList
    },
    category() {
      return this.$props.categoryName.toUpperCase().split('-').join(' ')
    }
  },
  props: [
      'categoryName',
  ],
  created() {
      this.$store.dispatch('getBestSellersList', 
        { 
          categoryName: this.$props.categoryName,
          date: this.date
        }
      );
  },
  destroyed() {
    this.$store.dispatch('clearBestSellersList');
  },
  data() {
      return {
        date: null,
        selectedPageIndex: 0,
      }
  },
  methods: {
    selectDate(e) {
      this.date = e;
      this.$store.dispatch('getBestSellersList', 
        { 
          categoryName: this.$props.categoryName,
          date: e
        }
      );
    },
    handlePaginationClick(index) {
      this.selectedPageIndex = index ;
    }
  }
}
</script>

<style scoped>
.pagination {
  margin-top: -5px;
  margin-bottom: 5px;
}

#date-label {
  position: absolute;
  top: 5px;
  z-index: 99;
  left: 10px
}
#date-picker {
  width: 170px;
  position: relative;
  top: -275px;
  z-index: 99;
  height: 80px;
  left: -20px
}
#error {
  color: salmon;
}
.date {
  width: 150px;
}
#list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 700px
}

.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 2px 0;
}

.navigation-buttons {
  position: absolute;
  top: 35px;
  left: 10px;
  width: 99%;
  z-index: 99;
}
</style>