<template>
  <div class="container mb-5">
    <h1 class="text-center my-5">Cards</h1>
    <div class="d-flex justify-content-center" v-if="!this.load">
      <b-spinner class="spinner" label="Spinning"></b-spinner>
    </div>
    <div v-else>
      <b-row>
      <b-col v-for="card in cards" :key="card.id" cols="4">
        <card-component :card="card" />
      </b-col>
    </b-row>
    <create-component />
    </div>
  </div>
</template>

<script>
export default {
  name: "cards",
  data (){
    return {
      load: false
    }
  },
  methods: {
    async loadDataCards() {
      const api = "https://jsonplaceholder.typicode.com/posts";
      const response = await this.$axios.get(api);
      let r = response.data;
      r = r.splice(94);
      this.load = true
      this.$store.commit("setCards", r);
    },
  },
  async mounted() {
    await this.loadDataCards();
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
};
</script>
