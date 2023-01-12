<template>
  <div class="mb-4">
    <NuxtLink :to="mountain.slug" class="nuxt-link">
    <b-card
      :title="mountain.title"
      :sub-title="mountain.height"
      :img-src="mountain.image"
      img-alt="Image"
      img-right
      class="card-container text-right d-flex align-items-center"
    >
      <b-card-text class="mr-2">{{ mountain.description }}</b-card-text>
    </b-card>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["mountain"],
};
</script>

<style>
    .nuxt-link{
        text-decoration: none;
        color: inherit;
    }
    .nuxt-link:hover{
        text-decoration: none;
    }
    .card-container:hover{
        background: rgb(238, 238, 238);
        color: lightgray;
    }
</style>