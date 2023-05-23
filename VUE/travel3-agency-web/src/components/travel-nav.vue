<template>
  <nav id="site-navigation">
    <button id="toggle-menu" @click="naviFunction">Menu</button>
    <ul id="site-inner-nav" class="hide">
      <li class="site-inner-nav-item">
        <router-link
          to="/"
          class="nav-item r-item"
          @click="InlineMenuButtonClickHandler()"
        >
          Home
        </router-link>
      </li>
      <li class="site-inner-nav-item">
        <router-link
          to="/holidaypackages"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          Holiday Packages
        </router-link>
      </li>
      <li class="site-inner-nav-item">
        <router-link
          to="/bestdeals"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          BestDeal
        </router-link>
      </li>
      <li class="site-inner-nav-item">
        <router-link
          to="/services"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          Services
        </router-link>
      </li>
      <li class="site-inner-nav-item">
        <router-link
          to="/about"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          AboutUs
        </router-link>
      </li>
      <li class="site-inner-nav-item">
        <router-link
          to="/contact"
          class="nav-item r-item"
          @mouseup="InlineMenuButtonClickHandler()"
        >
          Contact
        </router-link>
      </li>
    </ul>

    <LanguageSelect />
  </nav>
</template>

<script>
import LanguageSelect from "@/components/LanguageSelect.vue";
export default {
  name: "TravelNav",
  components: {
    LanguageSelect,
  },
  methods: {
    naviFunction(e) {
      e.preventDefault();
      const slideoutNav = document.getElementById("site-inner-nav");
      if (slideoutNav.classList.contains("show")) {
        slideoutNav.setAttribute("class", "hide");
      } else {
        slideoutNav.setAttribute("class", "show");
      }
    },
    InlineMenuButtonClickHandler() {
      const slideoutMenu = document.getElementById("site-inner-nav");

      const box = slideoutMenu.getAttribute("class");
      if (box === "hide") {
        slideoutMenu.setAttribute("class", "show");
      } else {
        slideoutMenu.setAttribute("class", "hide");
      }
    },
  },
};
</script>

<style lang="scss"></style>
