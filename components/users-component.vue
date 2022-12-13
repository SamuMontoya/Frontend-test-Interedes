<template>
  <div class="container">
    <modal-component :subject="subject" />

    <h1 class="mt-5 text-center">Users</h1>
    <b
      ><b-row class="mt-5 bg-primary text-light">
        <b-col>#</b-col>
        <b-col>User</b-col>
        <b-col>Dir</b-col>
        <b-col>Email</b-col>
        <b-col class="text-center">Options</b-col>
      </b-row></b
    >
    <b-row class="mt-4" v-for="r in response" :key="r.id">
      <b-col>{{ r.id }}</b-col>
      <b-col>{{ r.name }}</b-col>
      <b-col>{{ r.address.street }}</b-col>
      <b-col>{{ r.email }}</b-col>
      <b-col 
      class="text-center" 
      @click="showModal(); modalData(r)"
      >ℹ️</b-col>
    </b-row>
  </div>
</template>

<script>
import modalComponent from './modal-component.vue';
export default {
  components: { modalComponent },
  name: "users-component",
  data() {
    return {
      response: null,
      title: 'Hello Modal',
      subject: {
        name: null,
        username: null,
        email: null,
        address: null,
        phone: null,
        website: null,
        company: null,
      },
    };
  },
  methods: {
    // this function makes the GET to the placeholder
    async asyncData() {
      const api = "https://jsonplaceholder.typicode.com/users";
      const response = await this.$axios.get(api);
      this.response = response.data;
    },
    showModal() {
      this.$root.$emit("bv::show::modal", "modal");
    },
    modalData(r){
      this.subject.name = r.name
      this.subject.username = r.username
      this.subject.email = r.email
      this.subject.address = r.address.street
      this.subject.phone = r.phone
      this.subject.website = r.website
      this.subject.company = r.company.name
    }
  },
  async mounted() {
    this.asyncData();
  },
};
</script>
