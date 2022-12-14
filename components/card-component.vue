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
      <b-button
        @click="showModal(card);"
          block
        variant="primary"
        >Edit</b-button
      >
      <b-button block @click="deleteCard" variant="danger">Delete</b-button>
    </b-card>

    <b-modal hide-footer :id="card.id.toString()" :title="card.title">
      <b-row class="mx-2 mt-2">
        <label>Title</label>
        <b-form-input v-model="local.title" type="text"></b-form-input>
      </b-row>
      <b-row class="mx-2 mt-2">
        <label>Body</label>
        <b-form-textarea
          v-model="local.body"
          rows="3"
          max-rows="6"
          type="text"
        ></b-form-textarea>
      </b-row>
      <b-button
        class="mt-2"
        block
        variant="primary"
        @click="
          editCard();
          hideModal(card);
        "
        >Edit</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "card-component",
  props: ["card"],
  data() {
    return {
      local: {
        title: this.card.title,
        body: this.card.body,
        card: this.card,
      },
    };
  },
  methods: {
    deleteCard() {
      this.$store.commit("deleteCard", this.card);
    },
    showModal(card) {
      this.$root.$emit("bv::show::modal", card.id.toString());
    },
    hideModal(card) {
      this.$root.$emit("bv::hide::modal", card.id.toString());
    },
    editCard() {
      let isPosted = this.postApi()
      if(isPosted){
        this.$store.commit("editTitle", this.local);
      }
    },
    setLocal() {
      (this.local.title = this.card.title), (this.local.body = this.card.title);
    },
    async postApi (){
      const api = "https://jsonplaceholder.typicode.com/posts";
      const response = await this.$axios.post(api, this.local);
      console.log(response.status)
      if (response.status === 201){
        return true
      } else{
        return false
      }
    }
  },
};
</script>
