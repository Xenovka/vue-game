<template>
  <div class="display-games row g-4">
    <div class="col-lg-3 display-games__card" v-for="game in topGamesData" :key="game.id">
      <a href="#" class="display-games__image-wrapper">
        <img :src="game.background_image" :alt="game.name" class="display-games__image" />
      </a>
      <h3>{{ game.name }}</h3>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const topGamesData = ref(null);

    store.dispatch("getTopGamesDataFromAPI").then(() => {
      topGamesData.value = store.state.topGamesData;
      console.log(topGamesData.value);
    });

    return { topGamesData };
  }
};
</script>

<style lang="scss">
.display-games {
  &__card {
    padding: 0 !important;
    margin-bottom: 1rem;
    border-radius: 14px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
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
}
</style>
