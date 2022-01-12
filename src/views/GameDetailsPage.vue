<template>
  <div class="game-details" v-if="gameDetails">
    <img class="game-details__background-image" :src="gameDetails['background_image']" alt="game image" />
    <div class="game-details__content-wrapper container py-5">
      <h1 class="game-details__name">{{ gameDetails.name }}</h1>
      <div class="game-details__description">
        <h1 class="game-details__description--title">About</h1>
        <div class="game-details__description--text" v-html="gameDetails.description"></div>
      </div>
      <div class="game-details__tags">
        <a class="game-details__tags--name" v-for="tag in gameDetails.tags" :key="tag.id">{{ tag.name }}</a>
      </div>
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
    const gameId = route.params.gameId;

    store.dispatch("getGameDetailsById", gameId).then(() => {
      gameDetails.value = store.state.gameDetails;
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

  &__content-wrapper {
    display: grid;
    grid-gap: 20px;
    grid-auto-columns: minmax(400px, 1fr);
  }

  &__name {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
    grid-column: 1/3;
  }

  &__description {
    grid-column: 1/2;

    &--text > p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.2;
      color: #fff;
    }

    &--title {
      font-size: 2.4rem;
      font-weight: 700;
      color: #fff;
    }
  }

  &__tags {
    grid-column: 2/3;

    &--name {
      font-size: 1.4rem;
      color: #fff;
    }
  }
}
</style>
