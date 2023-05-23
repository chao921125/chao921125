<template>
  <div class="Services">
    <button id="side-bar-btn" @click="servicePageFunction">SIDE</button>

    <SideBanner />

    <main id="page-content">
      <h2>Lorem ipsum dolor sit amet, consectetur</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Enim odit dolor sequi voluptatem esse doloribus libero commodi ea
        debitis id nostrum odio velit impedit vitae tenetur voluptates vero
        beatae excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
        odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi
      </p>
      <br />
      <div class="services-card">
        <h3 class="services-card-title">Enim odit dolor sequi voluptatem</h3>
        <figure class="services-card-item">
          <img
            class="service-box-img"
            :src="customerService"
            :alt="'travel-agency-website-customer-service-image'"
          />
          <figcaption class="services-card-caption">
            <p class="services-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>
            <a :href="'http://www.google.com'" class="services-card-link"
              >Learn More</a
            >
          </figcaption>
        </figure>
      </div>

      <div class="services-card">
        <h3 class="services-card-title">Enim odit dolor sequi voluptatem</h3>
        <figure class="services-card-item">
          <img
            class="service-box-img"
            :src="busTours"
            :alt="'travel-agency-website-bus-tours-image'"
          />

          <figcaption class="services-card-caption">
            <p class="services-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>

            <a :href="'http://www.google.com'" class="services-card-link"
              >Learn More</a
            >
          </figcaption>
        </figure>
      </div>

      <div class="services-card">
        <h3 class="services-card-title">Enim odit dolor sequi voluptatem</h3>
        <figure class="services-card-item">
          <img
            class="service-box-img"
            :src="hotelRoom"
            :alt="'travel-agency-website-hotel-room-image'"
          />
          <figcaption class="services-card-caption">
            <p class="services-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>
            <a :href="'http://www.google.com'" class="services-card-link"
              >Learn More</a
            >
          </figcaption>
        </figure>
      </div>

      <div class="clearfix" />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Enim odit dolor sequi voluptatem esse doloribus libero commodi ea
        debitis id nostrum odio velit impedit vitae tenetur voluptates vero
        beatae excepturi.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Enim odit dolor sequi voluptatem esse doloribus libero commodi ea
        debitis id nostrum odio velit impedit vitae tenetur voluptates vero
        beatae excepturi
      </p>
    </main>

    <div class="clearfix" />
  </div>
</template>

<script>
import SideBanner from "@/components/SideBanner.vue";

export default {
  name: "ServicePage",
  components: {
    SideBanner,
  },
  data() {
    return {
      show: "true",
      customerService: require("@/assets/images/travel-agency-website-customer-service-image.jpg"),
      busTours: require("@/assets/images/travel-agency-website-bus-tours-image.jpg"),
      hotelRoom: require("@/assets/images/travel-agency-website-hotel-room-image.jpg"),
    };
  },
  methods: {
    servicePageFunction(event) {
      event.preventDefault();
      const el = document.getElementById("about-page-banner");
      const box = el.getAttribute("class");

      if (box === "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
  },
};
</script>

<style lang="scss"></style>
