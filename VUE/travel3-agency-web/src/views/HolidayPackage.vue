<template>
  <div v-if="singleholidaypackage" class="singleholidaypackage">
    <article class="single-item-details">
      <h2 class="single-item-title">{{ singleholidaypackage.title }}</h2>
      <span class="single-item-price">
        from
        <span class="single-item-offer">{{ singleholidaypackage.price }}</span>
      </span>
      <p class="single-item-text">{{ singleholidaypackage.text }}</p>

      <figure class="single-item">
        <img
          class="single-item-img"
          :src="singleholidaypackage.url"
          :alt="singleholidaypackage.title"
        />
        <figcaption class="single-item-caption">
          <h3 class="single-item-location">
            Location : {{ singleholidaypackage.location }}
          </h3>
          <p class="single-item-rating">
            Rating: {{ singleholidaypackage.rating }} Star
          </p>
        </figcaption>
      </figure>
    </article>
  </div>
  <NotFoundpage v-else />
</template>

<script>
import NotFoundpage from "./NotFoundpage";
import axios from "axios";

export default {
  name: "HolidayPackage",
  title: "Holiday Package Page",
  props: {
    itemid: { type: String, required: true },
  },
  components: {
    NotFoundpage,
  },
  data() {
    return {
      singleholidaypackage: {},
    };
  },
  methods: {
    async initData() {
      const result = await axios.get(
        `/api/holidaypackage/${parseInt(this.itemid)}`
      );
      const { data } = result;
      this.singleholidaypackage = data;
    },
  },
  created() {
    this.initData();
  },
  beforeRouteUpdate(to, from, next) {
    this.initData();
    next();
  },
};
</script>

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
    transform: translateX(-200px);
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
    transform: translateX(-200px);
    opacity: 0;
  }
}
.singleholidaypackage {
  border: 2px #ededeb solid;
  margin: 2em auto;
  display: block;
  width: 90%;
  padding: 0.5em;
}

.single-item-details {
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}
.single-item-title {
  text-align: center;
  display: block;
  line-height: 50px;
  color: #1485c9;
  font-size: 1.4em;
  margin: 0;
}
.single-item-text {
  margin: 0;
  width: 100%;
  line-height: 1.6em;
  font-size: 1em;
  align-self: flex-start;
  text-align: center;
}
.single-item-price {
  font-size: 1.1em;
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #9e9e9e;
}
.single-item-offer {
  display: inline-block;
  font-weight: bold;
  color: #ff6d00;
}
.single-item {
  margin: 0;
}
.single-item-img {
  width: auto;
  display: block;
  margin: 0.5em auto;
}
.single-item-caption {
  width: 100%;
  display: inline-block;
  margin-bottom: 0.5em;
}
.single-item-location {
  margin: 0;
  width: 100%;
  line-height: 40px;
  font-size: 1em;
  text-align: center;
  color: #1485c9;
}
.single-item-rating {
  font-size: 0.9em;
  margin: 0;
  line-height: 35px;
  color: #9e9e9e;
  text-transform: capitalize;
}
.single-item-button {
  width: 80%;
  text-align: center;
  color: #ffffff;
  height: auto;
  font-size: 1em;
  text-decoration: none;
  padding: 0;
  margin: 0 auto;
  line-height: 45px;
  border: 1px solid #ffffff;
  display: block;
  &:hover {
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
