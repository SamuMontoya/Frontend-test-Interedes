<template>
  <div class="container">
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
      <b-col class="text-center"><a href="/">ℹ️</a></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "users-component",
  data() {
    return {
      response: null,
    };
  },
  methods: {
    // this function makes the GET to the placeholder
    async asyncData() {
      const api = "https://jsonplaceholder.typicode.com/users";
      const response = await this.$axios.get(api);
      this.response = response.data;
    },
  },
  async mounted() {
    this.asyncData();
  },
};
</script>
