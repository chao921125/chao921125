<template>
  <aside id="about-page-banner" class="hide">
    <figure class="page-banner">
      <figcaption class="page-banner-caption">
        <h3 class="page-banner-title">Lorem ipsum dolor sit amet</h3>
        <span class="caption-img-span"
          ><img
            class="caption-img"
            :src="bannerImageLabel"
            :alt="'travel-agency-website-sidebar-banner-image-label'"
        /></span>

        <p class="page-banner-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p class="page-banner-text">
          Maxime minima magnam iure libero, laboriosam. Vitae magnam earum, quae
        </p>
        <p class="page-banner-text">
          rillo cupiditate deleniti expedita. Maxime minima magnam iure libero
        </p>
      </figcaption>
      <img
        class="page-banner-img"
        :src="bannerImage"
        :alt="'travel-agency-website-sidebar-banner-image'"
      />
    </figure>
  </aside>
</template>

<script>
export default {
  name: "TravelFooter",
  data() {
    return {
      show: "true",
      bannerImage: require("@/assets/images/travel-agency-website-sidebar-banner-image.jpg"),
      bannerImageLabel: require("@/assets/images/travel-agency-website-sidebar-banner-image-label.jpg"),
    };
  },
};
</script>

<style lang="scss"></style>
