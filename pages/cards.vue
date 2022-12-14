<template>
  <div class="container mb-5">
    <h1 class="text-center my-5">Cards</h1>
    <b-row>
      <b-col v-for="card in cards" :key="card.id" cols="4">
        <card-component :card="card"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "cards",
  methods: {
    async loadDataCards() {
      const api = "https://jsonplaceholder.typicode.com/posts";
      const response = await this.$axios.get(api);
      let r = response.data;
      r = r.splice(94);
      this.$store.commit("setCards", r);
    }
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
