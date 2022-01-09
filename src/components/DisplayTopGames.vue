<template>
  <div class="display-games">
    <div class="display-games__card-wrapper" v-for="game in topGamesData" :key="game.id">
      <div class="display-games__card">
        <a href="#" class="display-games__image-wrapper">
          <img :src="game.background_image" :alt="game.name" class="display-games__image" />
        </a>
        <h3 class="display-games__name">{{ game.name }}</h3>
      </div>
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
  display: grid;
  grid-gap: 10px 24px;
  grid-template-columns: repeat(auto-fit, minmax(243px, 1fr));
  width: 100%;

  &__card {
    padding: 0 !important;
    margin-bottom: 1rem;
    border-radius: 14px;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.3);
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

  &__name {
    padding: 14px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 24px;
  }
}
</style>
