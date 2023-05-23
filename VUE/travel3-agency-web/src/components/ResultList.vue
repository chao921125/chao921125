<template>
  <div v-if="products.length > 0">
    <ResultListItem :key="product.id" />
  </div>
  <p v-else>You haven't added anything to your cart yet!</p>
</template>

<script>
import ResultListItem from "@/components/ResultListItem.vue";

export default {
  name: "ResultList",
  props: ["products"],
  components: {
    ResultListItem,
  },
  data() {
    return {
      SearchQuery: {},
    };
  },
};
</script>
