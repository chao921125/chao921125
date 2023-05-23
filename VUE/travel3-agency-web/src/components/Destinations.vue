<template>
  <!--Destinations-->
  <section class="holiday-search-sidebar">
    <h2 id="holiday-search-title">Top Destinations</h2>
    <div
      v-for="destination in destinationitems"
      :key="destination.id"
      class="destinations"
    >
      <figure class="destination">
        <img
          class="destination-img"
          :src="destination.url"
          :alt="`Destination : ${destination.country}`"
        />

        <figcaption class="destination-caption">
          <h3 class="destination-title">{{ destination.city }}</h3>
          <p class="destination-txt">{{ destination.country }}</p>
          <p class="destination-txt">{{ destination.hotels }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: "Destinations",
  props: {
    destinationitems: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss"></style>
