<template>
  <div>
    <span v-if="errors.length" id="contact-form-errors">
      <h2 id="error-message">Please Correct the Following Errors:</h2>
      <ul id="errors-list">
        <li v-for="error in errors" :key="error" id="errors-item">
          {{ error }}
        </li>
      </ul>
    </span>

    <form id="contact-form" @submit.prevent="onSubmit">
      <ul id="contact-form-fields">
        <li class="contact-form-field">
          <label for="firstname" class="contact-label"
            >First name
            <input
              id="firstname"
              v-model="firstname"
              type="text"
              name="firstname"
          /></label>
        </li>
        <li class="contact-form-field">
          <label for="lastname" class="contact-label"
            >Last name
            <input id="lastname" v-model="lastname" type="text" name="lastname"
          /></label>
        </li>
        <li class="contact-form-field">
          <label for="email" class="contact-label"
            >Email <input id="email" v-model="email" type="text" name="email"
          /></label>
        </li>
        <li class="contact-form-field">
          <label for="phone" class="contact-label"
            >Phone <input id="phone" v-model="phone" type="text" name="phone"
          /></label>
        </li>
        <li class="contact-form-field">
          <label for="message" class="contact-label"
            >Message
            <textarea
              v-model="message"
              id="message"
              name="message"
              class="required"
              cols="50"
              rows="10"
            >
            </textarea>
          </label>
        </li>
        <li class="contact-form-field">
          <input id="contact-submit" type="submit" value="submit" />
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "ContactForm",

  data() {
    return {
      show: "true",
      firstname: " ",
      lastname: " ",
      email: " ",
      phone: " ",
      message: " ",
      errors: [],
    };
  },

  methods: {
    async onSubmit() {
      if (
        this.firstname !== " " &&
        this.lastname !== " " &&
        this.email !== " "
      ) {
        const contactData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          message: this.message,
        };

        console.error(contactData);

        //await axios.post("/api/contact", contactData);

        this.firstname = " ";
        this.lastname = " ";
        this.email = " ";
        this.phone = " ";
        this.message = " ";
      } else {
        this.errors.push("FirstName required");
        this.errors.push("LastName required");
        this.errors.push("e-mail required");
      }
    },
  },
};
</script>

<style lang="scss"></style>
