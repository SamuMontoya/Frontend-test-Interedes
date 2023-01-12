<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="d-flex mx-auto">
          <b-nav-item class="mr-3"><NuxtLink class="nuxtlink" to="/users">Users</NuxtLink></b-nav-item>
          <b-nav-item class="mr-3"><NuxtLink class="nuxtlink" to="/posts">Posts</NuxtLink></b-nav-item>
          <b-navbar-brand><NuxtLink class="nuxtlink" to="/">interedesTest</NuxtLink></b-navbar-brand>
          <b-nav-item><NuxtLink class="nuxtlink" to="/cards">Cards</NuxtLink></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar-component",
};
</script>

<style scoped>
  .nuxtlink{
    color:aliceblue
  }
</style>