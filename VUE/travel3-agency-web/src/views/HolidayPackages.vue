<template>
  <div class="HolidayPackages">
    <FilterNav
      :seasons="seasons"
      :prices="prices"
      :locations="locations"
      :ratings="ratings"
      @seasonClick="itemsSearched"
    />

    <!---main content-->
    <main id="holiday-items">
      <!--HolidayPackage Item component -->
      <transition-group name="fade" tag="div">
        <div
          v-for="holidaypackageitem in filteredPacks"
          :key="holidaypackageitem.itemid"
        >
          <HolidayPackageItem :holidaypackageitem="holidaypackageitem" />
        </div>
      </transition-group>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import navdata from "@/data-json.json";
import HolidayPackageItem from "@/components/HolidayPackageItem.vue";
import FilterNav from "@/components/FilterNav.vue";

export default {
  name: "HolidayPackages",
  components: {
    FilterNav,
    HolidayPackageItem,
  },
  data() {
    return {
      seasons: navdata.seasons,
      ratings: navdata.ratings,
      locations: navdata.locations,
      prices: navdata.prices,
      selected: " ",
      holidaypackageitems: [],
      count: 10,
    };
  },
  computed: {
    filteredPacks() {
      if (!this.selected) {
        return this.holidaypackageitems;
      } else if (
        "winter" === this.selected ||
        "summer" === this.selected ||
        "spring" === this.selected ||
        "autumn" === this.selected
      ) {
        return this.holidaypackageitems.filter(
          (holidaypackageitem) => holidaypackageitem.season === this.selected
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
        return this.holidaypackageitems.filter(
          (holidaypackageitem) => holidaypackageitem.location === this.selected
        );
      } else if (
        "one" === this.selected ||
        "two" === this.selected ||
        "three" === this.selected ||
        "four" === this.selected ||
        "five" === this.selected
      ) {
        return this.holidaypackageitems.filter(
          (holidaypackageitem) => holidaypackageitem.rating === this.selected
        );
      } else if (
        "$399 - $499" === this.selected ||
        "$499 - $599" === this.selected ||
        "$599 - $699" === this.selected ||
        "$699 - $999" === this.selected ||
        "$999 +" === this.selected
      ) {
        return this.holidaypackageitems.filter(
          (holidaypackageitem) => holidaypackageitem.price === this.selected
        );
      } else {
        return this.holidaypackageitems;
      }
    },
  },
  async created() {
    const result = await axios.get("/api/holidaypackages");
    const { data } = result;
    this.holidaypackageitems = data;
  },
  methods: {
    itemsSearched(id) {
      this.selected = id;
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.7s;
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
