<template>
  <form class="game-search" @keypress.enter.prevent="searchGameDataByName(inputedGameName)">
    <input type="text" name="search-for-games" class="game-search__input" v-model="inputedGameName" ref="inputForm" placeholder="Search your games" />
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const inputedGameName = ref("");
    const foundGameData = ref(null);

    const searchGameDataByName = (name) => {
      store.dispatch("getSearchedGamesDataFromAPI", name).then(() => {
        foundGameData.value = store.state.foundGamesData;
        console.log(foundGameData.value);
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
