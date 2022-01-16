<template>
  <div class="display-games" v-if="gamesList">
    <div class="display-games__card-wrapper" v-for="game in gamesList" :key="game.id">
      <div class="display-games__card">
        <router-link
          :to="{ name: 'GameDetails', params: { gameSlug: game.slug } }"
          class="display-games__image-wrapper"
        >
          <img :src="game.background_image" :alt="game.name" class="display-games__image" />
        </router-link>
        <h3 class="display-games__name">{{ game.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const gamesList = ref(null);

    store.dispatch("getGamesList", route.params.genre).then(() => {
      gamesList.value = store.state.gamesList;
    });

    watch(route, (g) => {
      store.dispatch("getGamesList", g.params.genre).then(() => {
        gamesList.value = store.state.gamesList;
      });
    });

    return { gamesList };
  }
};
</script>

<style lang="scss">
.display-games {
  display: grid;
  grid-gap: 10px 24px;
  grid-template-columns: repeat(auto-fit, minmax(243px, 1fr));
  width: 100%;

  &__card {
    padding: 0 !important;
    margin-bottom: 1rem;
    border-radius: 14px;
    overflow: hidden;
    background-color: #202020;
  }

  &__image-wrapper {
    width: 100%;
    display: block;
  }

  &__image {
    width: 100%;
    height: 20rem;
    background-size: cover;
  }

  &__name {
    padding: 14px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 24px;
    color: #fff;
  }
}
</style>
