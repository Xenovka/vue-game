<template>
  <div class="game-search">
    <form @keyup="searchGameDataByName(inputedGameName)">
      <input
        type="text"
        name="search-for-games"
        class="game-search__input"
        v-model="inputedGameName"
        ref="inputForm"
        placeholder="Search your games"
      />
    </form>
    <div v-if="foundGameData">
      <DisplaySearchedGames :foundGames="foundGameData" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

import DisplaySearchedGames from "./DisplaySearchedGames.vue";

export default {
  components: { DisplaySearchedGames },
  setup() {
    const store = useStore();

    const inputedGameName = ref("");
    const foundGameData = ref(null);

    const searchGameDataByName = (name) => {
      if (!name) {
        foundGameData.value = null;
        return;
      }

      store.dispatch("getSearchedGamesDataFromAPI", name).then(() => {
        foundGameData.value = store.state.foundGamesData;
      });
    };

    return {
      inputedGameName,
      foundGameData,
      searchGameDataByName
    };
  }
};
</script>

<style lang="scss">
.game-search {
  width: 70%;
  position: relative;

  &__input {
    width: 100%;
    height: 4.4rem;
    border: none;
    border-radius: 24px;
    font-size: 1.8rem;
    padding: 0 24px;
    box-shadow: 0 4px 10px rgba($color: #000000, $alpha: 0.2);

    &:focus {
      outline: none;
    }
  }
}
</style>
