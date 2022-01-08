<template>
  <div class="container py-4">
    <DefaultNavbar />
    <DisplayTopGames />
  </div>
</template>

<script>
import DefaultNavbar from "../components/DefaultNavbar.vue";
import DisplayTopGames from "../components/DisplayTopGames.vue";

export default {
  components: {
    DefaultNavbar,
    DisplayTopGames
  }
};
</script>
