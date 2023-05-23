<template>
  <div class="BestDeals">
    <FilterNav
      :seasons="seasons"
      :prices="prices"
      :locations="locations"
      :ratings="ratings"
      @seasonClick="itemsSearched"
    />

    <main id="holiday-items">
      <transition-group name="fade" tag="div">
        <div v-for="bestdealitem in filteredPacks" :key="bestdealitem.itemid">
          <BestDealItem :bestdealitem="bestdealitem" />
        </div>
      </transition-group>
    </main>

    <div class="clearfix" />
  </div>
</template>

<script>
import navdata from "@/data-json.json";
import BestDealItem from "@/components/BestDealItem.vue";
import FilterNav from "@/components/FilterNav.vue";
import axios from "axios";

export default {
  name: "BestDeals",
  components: {
    BestDealItem,
    FilterNav,
  },
  data() {
    return {
      seasons: navdata.seasons,
      ratings: navdata.ratings,
      locations: navdata.locations,
      prices: navdata.prices,
      selected: " ",
      bestdealitems: [],
    };
  },
  computed: {
    filteredPacks() {
      if (!this.selected) {
        return this.bestdealitems;
      } else if (
        "winter" === this.selected ||
        "summer" === this.selected ||
        "spring" === this.selected ||
        "autumn" === this.selected
      ) {
        return this.bestdealitems.filter(
          (bestdealitem) => bestdealitem.season === this.selected
        );
      } else if (
        "london" === this.selected ||
        "paris" === this.selected ||
        "madrid" === this.selected ||
        "dubai" === this.selected ||
        "rome" === this.selected ||
        "goldcoast" === this.selected ||
        "singapore" === this.selected ||
        "toronto" === this.selected ||
        "tajmahal" === this.selected
      ) {
        return this.bestdealitems.filter(
          (bestdealitem) => bestdealitem.location === this.selected
        );
      } else if (
        "one" === this.selected ||
        "two" === this.selected ||
        "three" === this.selected ||
        "four" === this.selected ||
        "five" === this.selected
      ) {
        return this.bestdealitems.filter(
          (bestdealitem) => bestdealitem.rating === this.selected
        );
      } else if (
        "$399 - $499" === this.selected ||
        "$499 - $599" === this.selected ||
        "$599 - $699" === this.selected ||
        "$699 - $999" === this.selected ||
        "$999 +" === this.selected
      ) {
        return this.bestdealitems.filter(
          (bestdealitem) => bestdealitem.price === this.selected
        );
      } else {
        return this.bestdealitems;
      }
    },
  },
  async created() {
    const result = await axios.get("/api/bestdeals");
    const { data } = result;
    this.bestdealitems = data;
  },

  methods: {
    itemsSearched(id) {
      this.selected = id;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.fade-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 0.5s;
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
