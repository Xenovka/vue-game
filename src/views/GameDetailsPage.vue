<template>
  <div class="game-details" v-if="gameDetails">
    <img class="game-details__background-image" :src="gameDetails['background_image']" alt="game image" />
    <div class="game-details__content-wrapper container py-5">
      <h1 class="game-details__name">{{ gameDetails.name }}</h1>
    </div>
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
      console.log(gameDetails.value);
    });

    return {
      gameDetails
    };
  }
};
</script>

<style lang="scss">
.game-details {
  &__background-image {
    position: absolute;
    width: 100vw;
    height: 100vh;
    filter: brightness(0.2);
    z-index: -1;
  }

  &__name {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
  }
}
</style>
