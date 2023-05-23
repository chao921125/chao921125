<template>
  <!--footer-->
  <footer id="site-footer">
    <ul id="site-inner-footer">
      <li class="inner-footer-item">
        <router-link to="/" class="footer-nav-item r-item"> Home </router-link>
      </li>
      <li class="inner-footer-item">
        <router-link to="/BestDeal" class="footer-nav-item r-item">
          BestDeal
        </router-link>
      </li>
      <li class="inner-footer-item">
        <router-link to="/AboutUs" class="footer-nav-item r-item">
          AboutUs
        </router-link>
      </li>
      <li class="inner-footer-item">
        <router-link to="/HolidayPackages" class="footer-nav-item r-item">
          HolidayPackages
        </router-link>
      </li>
      <li class="inner-footer-item">
        <router-link to="/Contact" class="footer-nav-item r-item">
          Contact
        </router-link>
      </li>
      <li class="inner-footer-item">
        <router-link to="/Services" class="footer-nav-item r-item">
          Services
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TravelFooter",
};
</script>

<style lang="scss"></style>
