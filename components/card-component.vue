<template>
  <div class="container">
    <b-card
      :title="card.title"
      img-src="https://picsum.photos/600/300"
      img-alt="Image"
      img-top
      style="max-width: 20rem"
      class="mb-3"
    >
      <b-card-text> {{ card.body }} </b-card-text>
      <b-button @click="showModal(card)" block variant="primary">Edit</b-button>
      <b-button block @click="deleteCard" variant="danger">Delete</b-button>
    </b-card>

    <modalCards-component :card="card" />
  </div>
</template>

<script>
export default {
  name: "card-component",
  props: ["card"],
  methods: {
    deleteCard() {
      this.$store.commit("deleteCard", this.card);
    },
    showModal(card) {
      this.$root.$emit("bv::show::modal", card.id.toString());
    },
    
    
    setLocal() {
      (this.local.title = this.card.title), (this.local.body = this.card.title);
    },
    
  },
};
</script>
