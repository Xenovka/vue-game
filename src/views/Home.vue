<template>
  <div class="container py-4">
    <base-header>
      <h1>D N E V</h1>
    </base-header>
    <DisplayTopGames />
  </div>
</template>

<script>
import BaseHeader from "../components/BaseHeader.vue";
import DisplayTopGames from "../components/DisplayTopGames.vue";

export default {
  components: {
    BaseHeader,
    DisplayTopGames
  }
};
</script>
