<template>
  <div class="container py-4">
    <HomeNavbar />
    <DisplayGames />
  </div>
</template>

<script>
import HomeNavbar from "../components/HomeNavbar.vue";
import DisplayGames from "../components/DisplayGames.vue";

export default {
  components: {
    HomeNavbar,
    DisplayGames
  }
};
</script>
