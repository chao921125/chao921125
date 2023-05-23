<template>
  <aside id="language-select">
    <form id="language-selector">
      <label for="languageselectitems"
        >Language:
        <img
          id="flag-img"
          v-bind:src="
            selected !== ' '
              ? `./assets/images/flags/png/${selected}.png`
              : defaultImage
          "
          :alt="'flag image'"
        />
        <select
          v-model="selected"
          name="languageselectitems"
          @click="itemsSearched($event.target.value)"
          aria-label="select country"
        >
          <option
            v-for="(languageselectitem, i) in onChangeImg"
            :key="i"
            :value="languageselectitem.value"
          >
            {{ languageselectitem.text }}
          </option>
        </select>
      </label>
    </form>
  </aside>
</template>

<script>
import navdata from "@/data-json.json";
export default {
  name: "LanguageSelect",
  data() {
    return {
      selected: " ",
      defaultImage: require(`@/assets/images/flags/default.jpg`),
      languageselectitems: navdata.languageselectitems,
    };
  },
  computed: {
    onChangeImg() {
      if (this.selected === "default") {
        return this.languageselectitems;
      } else if (this.selected === "United_Kingdom") {
        return this.languageselectitems;
      } else if (this.selected === "Germany") {
        return this.languageselectitems;
      } else if (this.selected === "United_States") {
        return this.languageselectitems;
      } else if (this.selected === "Jamaica") {
        return this.languageselectitems;
      } else if (this.selected === "France") {
        return this.languageselectitems;
      } else if (this.selected === "Spain") {
        return this.languageselectitems;
      } else {
        return this.languageselectitems;
      }
    },
  },
  methods: {
    itemsSearched(id) {
      this.selected = id;
    },
    imgUrlAlt(e) {
      e.target.src = `./assets/images/flags/default.jpg`;
    },
  },
};
</script>

<style lang="scss"></style>
