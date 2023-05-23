<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Text:</p>
    <CartList
      :products="cartItems"
      v-on:remove-from-cart="removeFromCart($event)"
    />
    <button>Remove</button>
    <p>Total: ${{ totalPrice }}</p>
    <button>Proceed to checkout</button>
  </div>
</template>

<script>
import axios from "axios";
import CartList from "@/components/CartList.vue";
export default {
  name: "CartPage",
  components: {
    CartList,
  },
  data() {
    return {
      title: "Shopping Cart page",
      cartItems: {},
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
  methods: {
    async removeFromCart(productId) {
      const result = await axios.delete(`/api/users/12345/cart/${productId}`);
      this.cartItems = result.data;
    },
  },
  async created() {
    const result = await axios.get("/api/users/12345/cart");
    const cartItems = result.data;
    this.cartItems = cartItems;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
