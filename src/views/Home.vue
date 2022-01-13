<template>
  <div class="container py-4">
    <HomeNavbar />
    <DisplayTopGames />
  </div>
</template>

<script>
import HomeNavbar from "../components/HomeNavbar.vue";
import DisplayTopGames from "../components/DisplayTopGames.vue";

export default {
  components: {
    HomeNavbar,
    DisplayTopGames
  }
};
</script>
