<template>
  <div class="game-search">
    <form @submit.prevent="searchGameListByName(inputedGameName)" @keyup="searchGameListByName(inputedGameName)">
      <input
        type="text"
        name="search-for-games"
        class="game-search__input"
        v-model="inputedGameName"
        ref="inputForm"
        placeholder="Search your games"
      />
    </form>
    <div v-if="searchedGamesList">
      <DisplaySearchedGames :searchedGames="searchedGamesList" />
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
    const searchedGamesList = ref(null);

    const searchGameListByName = (name) => {
      if (!name) {
        searchedGamesList.value = null;
        return;
      }

      store.dispatch("getSearchedGameList", name).then(() => {
        searchedGamesList.value = store.state.searchedGameList;
      });
    };

    return {
      inputedGameName,
      searchedGamesList,
      searchGameListByName
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
    height: 4rem;
    border: none;
    border-radius: 24px;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 0 24px;
    color: #fff;
    background-color: #3b3b3b;
    transition: all 0.3s ease;

    &:focus,
    &:hover {
      outline: none;
      background-color: #eee;
      color: #141414;
    }
  }
}
</style>
