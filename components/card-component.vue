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
      <b-button class="ml-5" @click="showModal(card); editCard()" variant="primary">Edit</b-button>
      <b-button class="ml-5" @click="deleteCard" variant="danger">Delete</b-button>
    </b-card>

    <b-modal :id="card.id.toString()" :title="card.title">
    <b-row class="mx-2 mt-2">
      <label>Title</label>
      <b-form-input v-model="title" type="text">{{title}}</b-form-input>
    </b-row>
    <b-row class="mx-2 mt-2">
      <label>Body</label>
      <b-form-textarea v-model="body" rows="3" max-rows="6" type="text">{{body}}</b-form-textarea>
    </b-row>
  </b-modal>
  </div>
</template>

<script>
export default {
  name: "card-component",
  props: ['card'],
  data(){
    return{
      title: this.card.title,
      body: this.card.body
    }
  },
  methods:{
    deleteCard(){
      this.$store.commit('deleteCard', this.card)
    },
    showModal(card) {
      this.$root.$emit("bv::show::modal", card.id.toString());
    },
    editCard(){
      
    }
  }
};
</script>
