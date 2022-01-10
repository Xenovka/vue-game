<template>
  <div class="game-details__wrapper">
    <h1 class="game-details__name">{{ gameDetails.name }}</h1>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const gameDetails = ref(null);
    const gameSlug = route.params.gameSlug;

    store.dispatch("getGameDetailsBySlug", gameSlug).then(() => {
      gameDetails.value = store.state.gameDetails[0];
    });

    return {
      gameDetails
    };
  }
};
</script>
