<template>
  <div class="display-games" v-if="gamesList && isLoaded">
    <div>
      <div class="display-games__card-wrapper" v-for="game in firstColumnGames" :key="game.id">
        <div class="display-games__card">
          <router-link
            :to="{ name: 'GameDetails', params: { gameSlug: game.slug } }"
            class="display-games__image-wrapper"
          >
            <img :src="game.background_image" srcset="" :alt="game.name" class="display-games__image" />
          </router-link>
          <h3 class="display-games__name">{{ game.name }}</h3>
        </div>
      </div>
    </div>
    <div>
      <div class="display-games__card-wrapper" v-for="game in secondColumnGames" :key="game.id">
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
    <div>
      <div class="display-games__card-wrapper" v-for="game in thirdColumnGames" :key="game.id">
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
    <div>
      <div class="display-games__card-wrapper" v-for="game in fourthColumnGames" :key="game.id">
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
  </div>
  <LoadingSpinner v-else />
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";

import LoadingSpinner from "./LoadingSpinner.vue";

export default {
  components: {
    LoadingSpinner
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    let firstColumnGames = [],
      secondColumnGames = [],
      thirdColumnGames = [],
      fourthColumnGames = [];

    const gamesList = ref(null);
    const isLoaded = ref(false);

    function insertGameToArray(array, game) {
      array.push(game);
    }

    function checkIsGamesListAlreadyFull(list) {
      list.forEach((game) => {
        if (firstColumnGames.length !== 10) insertGameToArray(firstColumnGames, game);
        else if (secondColumnGames.length !== 10) insertGameToArray(secondColumnGames, game);
        else if (thirdColumnGames.length !== 10) insertGameToArray(thirdColumnGames, game);
        else if (fourthColumnGames.length !== 10) insertGameToArray(fourthColumnGames, game);
        else {
          return;
        }
      });
    }

    store.dispatch("getGamesList", route.params.genre).then(() => {
      gamesList.value = store.state.gamesList;
      checkIsGamesListAlreadyFull(gamesList.value);
      isLoaded.value = true;
    });

    watch(route, (g) => {
      isLoaded.value = false;
      store.dispatch("getGamesList", g.params.genre).then(() => {
        gamesList.value = store.state.gamesList;
        console.log(gamesList.value);
        checkIsGamesListAlreadyFull(gamesList.value);
        isLoaded.value = true;
      });
    });

    return { gamesList, firstColumnGames, secondColumnGames, thirdColumnGames, fourthColumnGames, isLoaded };
  }
};
</script>

<style lang="scss">
.display-games {
  display: grid;
  grid-gap: 0 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-areas: "col1 col2 col3 col4";
  width: 100%;

  &:nth-child(1) {
    grid-area: col1;
  }

  &:nth-child(2) {
    grid-area: col2;
  }

  &:nth-child(3) {
    grid-area: col3;
  }

  &:nth-child(4) {
    grid-area: col4;
  }

  &__card {
    padding: 0 !important;
    margin-bottom: 1.8rem;
    border-radius: 14px;
    overflow: hidden;
    background-color: #323232;
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
    line-height: 1.2;
    color: #fff;
  }
}
</style>
