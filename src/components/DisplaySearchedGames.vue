<template>
  <div class="searched-games">
    <div class="searched-games__result" v-for="game in searchedGamesList" :key="game.id">
      <router-link class="searched-games__name" :to="{ name: 'GameDetails', params: { gameSlug: game.slug } }">{{ game.name }}</router-link>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  props: ["searchedGames"],
  setup(props) {
    const searchedGamesList = ref(null);
    const { searchedGames } = toRefs(props);

    searchedGamesList.value = searchedGames.value;

    watch(
      () => props.searchedGames,
      (updatedGamesList) => {
        searchedGamesList.value = updatedGamesList;
      }
    );

    return {
      searchedGamesList
    };
  }
};
</script>

<style lang="scss">
.searched-games {
  display: block;
  position: absolute;
  margin: 10px 0;
  padding: 24px;
  width: 100%;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.3);
  z-index: 999;

  &__name {
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
    color: inherit;
  }
}
</style>
