<template>
  <aside v-if="searchFilterFunction" id="filter-nav-sidebar" class="hide">
    <button id="side-bar-btn" @click="searchFilterFunction">SIDE</button>

    <section id="seasons">
      <h1 class="filter-title">Filter By Season</h1>
      <ul class="filter-list">
        <li class="filter-list-item">
          <button
            @click="SearchItemBtn()"
            @mouseup="InlineButtonClickHandler()"
            id="reset"
            type="submit"
          >
            RESET ALL
          </button>
        </li>
      </ul>
      <ul class="filter-list">
        <li v-for="season in seasons" :key="season.id" class="filter-list-item">
          <button
            @click="SearchItemBtn(season.title)"
            @mouseup="InlineButtonClickHandler()"
            class="filter-list-btn"
          >
            {{ season.title }}
          </button>
        </li>
      </ul>
    </section>
    <section id="locations">
      <h1 class="filter-title">Filter By Location</h1>
      <ul class="filter-list">
        <li
          v-for="location in locations"
          :key="location.id"
          class="filter-list-item"
        >
          <button
            @click="SearchItemBtn(location.title)"
            @mouseup="InlineButtonClickHandler()"
            class="filter-list-btn"
          >
            {{ location.title }}
          </button>
        </li>
      </ul>
    </section>
    <section id="prices">
      <h1 class="filter-title">Filter By Price</h1>
      <ul class="filter-list">
        <li v-for="price in prices" :key="price.id" class="filter-list-item">
          <button
            @click="SearchItemBtn(price.title)"
            @mouseup="InlineButtonClickHandler()"
            class="filter-list-btn"
          >
            {{ price.title }}
          </button>
        </li>
      </ul>
    </section>
    <section id="ratings">
      <h1 class="filter-title">Filter By Rating</h1>
      <ul class="filter-list">
        <li v-for="rating in ratings" :key="rating.id" class="filter-list-item">
          <button
            @click="SearchItemBtn(rating.title)"
            @mouseup="InlineButtonClickHandler()"
            class="filter-list-btn"
          >
            {{ rating.title }}
          </button>
        </li>
      </ul>
    </section>
    <br />
  </aside>
</template>

<script>
export default {
  name: "FilterNav",
  props: {
    seasons: {
      type: Array,
      default: null,
    },
    prices: {
      type: Array,
      default: null,
    },
    locations: {
      type: Array,
      default: null,
    },
    ratings: {
      type: Array,
      default: null,
    },
  },
  methods: {
    InlineButtonClickHandler() {
      const slideoutMenu = document.querySelector("#filter-nav-sidebar");
      if (slideoutMenu.classList.contains("show")) {
        slideoutMenu.setAttribute("class", "hide");
      } else {
        slideoutMenu.setAttribute("class", "show");
      }
    },
    searchFilterFunction(event) {
      event.preventDefault();

      const el = document.getElementById("filter-nav-sidebar");

      const box = el.getAttribute("class");

      if (box === "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
    SearchItemBtn(item) {
      this.$emit("seasonClick", item);
    },
  },
};
</script>

<style lang="scss"></style>
