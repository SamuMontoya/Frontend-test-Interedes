<template>
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
</template>

<script>
export default {
  name:'modalCards-component',
  props: ['card'],
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
    editCard() {
      let isPosted = this.postApi();
      if (isPosted) {
        this.$store.commit("editTitle", this.local);
      }
    },
    async postApi() {
      const api = "https://jsonplaceholder.typicode.com/posts";
      const response = await this.$axios.post(api, this.local);
      console.log(response.status);
      if (response.status === 201) {
        return true;
      } else {
        return false;
      }
    },
    hideModal(card) {
      this.$root.$emit("bv::hide::modal", card.id.toString());
    },
  }
}
</script>