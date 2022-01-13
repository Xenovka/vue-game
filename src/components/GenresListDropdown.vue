<template>
  <div class="genres">
    <h1 class="genres__target" @mouseenter="mouseEnteredGenres">Genres</h1>
    <ul class="genres__wrapper" v-if="isHovered" @mouseleave="mouseLeftGenres">
      <li v-for="genre in genresList" :key="genre.id" class="genres__list">
        <router-link to="/" class="genres__item">{{ genre.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const genresList = ref(null);
    const isHovered = ref(false);

    store.dispatch("getGenresList").then(() => {
      genresList.value = store.state.genresList;
      console.log(genresList.value);
    });

    const mouseEnteredGenres = () => {
      isHovered.value = true;
    };

    const mouseLeftGenres = () => {
      isHovered.value = false;
    };

    return {
      genresList,
      isHovered,
      mouseEnteredGenres,
      mouseLeftGenres
    };
  }
};
</script>

<style lang="scss">
.genres {
  position: relative;
  display: flex;
  align-items: center;

  &__target {
    width: 220px;
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      color: #ccc;
    }
  }

  &__wrapper {
    margin: 18px 0 0 40px;
    position: absolute;
    top: 100%;
    background-color: #020202;
    padding: 16px 20px;
    border-radius: 24px;
    z-index: 999;
  }

  &__list {
    padding: 4px 0;
  }

  &__item {
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 600;
    list-style: none;
    color: #fff;
  }
}
</style>
