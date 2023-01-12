<template>
  <div>
    <h1 class="my-5 text-center">Nuxt Mountains</h1>
    <div class="d-flex justify-content-center" v-if="$fetchState.pending">
      <b-spinner class="spinner" label="Spinning"></b-spinner>
    </div>
    <div v-else-if="$fetchState.error">
      <b-alert class="text-center" show variant="danger"
        >¡Something went wrong! 😨</b-alert
      >
    </div>
    <div v-else>
      <div class="cardsGrid container">
        <b-row>
          <b-col v-for="mountain in mountains" :key="mountain.id">
            <cardpost-component :mountain="mountain" />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import cardComponent from "~/components/card-component.vue";
export default {
  components: { cardComponent },
  data() {
    return {
      mountains: [],
    };
  },
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      (res) => res.json()
    );
  },
};
</script>

<style>
.spinner {
}
</style>
