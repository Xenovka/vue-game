<template>
  <div class="searched-games">
    <div class="searched-games__result" v-for="game in searchedGamesData" :key="game.slug">
      <h1>{{ game.name }}</h1>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  props: ["foundGames"],
  setup(props) {
    const searchedGamesData = ref(null);
    const { foundGames } = toRefs(props);

    searchedGamesData.value = foundGames.value;

    watch(
      () => props.foundGames,
      (updatedGamesData) => {
        searchedGamesData.value = updatedGamesData;
      }
    );

    return {
      searchedGamesData
    };
  }
};
</script>

<style lang="scss">
.searched-games {
  display: block;
  position: absolute;
  margin: 10px 0;
  padding: 14px;
  width: 100%;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.3);
  z-index: 999;
}
</style>
