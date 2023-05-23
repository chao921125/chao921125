import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/home-page";
import BestDeals from "@/views/BestDeals";
import BestDeal from "@/views/BestDeal";
//import AboutPage from "@/views/about-page";
import HolidayPackages from "@/views/HolidayPackages";
import HolidayPackage from "@/views/HolidayPackage";
import ContactPage from "@/views/contact-page";
//import ServicePage from "@/views/service-page";
import NotFoundpage from "@/views/NotFoundpage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("@/views/about-page"),
  },
  {
    path: "/bestdeals",
    name: "BestDeals",
    component: BestDeals,
    props: true,
  },
  {
    path: "/bestdeal/:itemid/:slug",
    name: "BestDeal",
    component: BestDeal,
    props: true,
  },
  {
    path: "/holidaypackages",
    name: "HolidayPackages",
    component: HolidayPackages,
    props: true,
  },
  {
    path: "/holidaypackage/:itemid/:slug",
    name: "HolidayPackage",
    component: HolidayPackage,
    props: true,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/services",
    name: "ServicePage",
    //component: ServicePage,
    component: () => import("@/views/service-page"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundpage",
    component: NotFoundpage,
  },
  // {
  //   path: "/cart",
  //   name: "CartPage",
  //   component: CartPage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
