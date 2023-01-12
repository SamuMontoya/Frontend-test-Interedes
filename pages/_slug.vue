<template>
  <div class="container">
    <h1 class="text-center my-4">{{ mountain.title }}</h1>
    <div class="d-flex justify-content-center">
        <img :src="mountain.image" :alt="mountain.title" />
    </div>
    <div class="container my-5">
      <b-form class="text-center">
        <b-row>
          <b-col cols="4">
            <label for="height">Height</label>
            <b-form-input
              type="text"
              id="height"
              :value="mountain.height"
              disabled
              class="text-center"
            ></b-form-input>
          </b-col>
          <b-col cols="4">
            <label for="countries">Countries</label>
            <b-form-input
              type="text"
              id="countries"
              :value="mountain.countries"
              disabled
              class="text-center"
            ></b-form-input>
          </b-col>
          <b-col cols="4">
            <label for="continent">Continent</label>
            <b-form-input
              type="text"
              id="continent"
              :value="mountain.continent"
              disabled
              class="text-center"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-form>
    </div>
    <p>{{ mountain.description }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const mountain = await $axios.$get(
      `https://api.nuxtjs.dev/mountains/${params.slug}`
    );
    mountain.countries = mountain.countries.toString()
    return { mountain };
  },
};
</script>

<style>
    img{
        max-height: 50vh;
    }
</style>