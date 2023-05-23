<template>
  <article class="bestdeal-details">
    <figure v-if="bestdealitem" class="bestdeal-details-item">
      <img
        :src="bestdealitem.url"
        :alt="bestdealitem.title"
        class="bestdeal-details-img"
      />
      <figcaption class="bestdeal-details-caption">
        <h1 class="bestdeal-details-title">{{ bestdealitem.title }}</h1>

        <span class="bestdeal-details-price">
          From
          <span class="bestdeal-offer">{{ bestdealitem.price }}</span>
        </span>
        <p class="bestdeal-text">Location: {{ bestdealitem.location }}.</p>
        <p class="bestdeal-text">Available: {{ bestdealitem.month }}.</p>
        <router-link
          class="bestdeal-link"
          :to="{
            name: 'BestDeal',
            params: {
              itemid: bestdealitem.itemid,
              slug: bestdealitem.location,
            },
          }"
        >
          View Details
        </router-link>
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  name: "BestDealItem",
  props: {
    bestdealitem: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss"></style>
