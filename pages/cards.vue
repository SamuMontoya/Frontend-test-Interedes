<template>
  <div class="container mb-5">
    <h1 class="text-center my-5">Cards</h1>
    <b-row>
      <b-col v-for="card in cards" :key="card.id" cols="4">
        <card-component :card="card"/>
      </b-col>
    </b-row>
    <create-compnent />
  </div>
</template>

<script>
import createCompnent from '~/components/create-compnent.vue';
export default {
  components: { createCompnent },
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
