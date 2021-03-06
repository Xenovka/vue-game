<template>
  <div class="game-details" v-if="gameDetailsById">
    <img class="game-details__background-image" :src="gameDetailsBySlug['background_image']" alt="game image" />
    <h1 class="game-details__name">{{ gameDetailsBySlug.name }}</h1>
    <div class="game-details__content-wrapper container py-5">
      <div>
        <div class="game-details__description">
          <h1 class="game-details__description--title">About</h1>
          <div class="game-details__description--text" v-html="gameDetailsById.description"></div>
        </div>
        <div class="game-details__publisher">
          <h1 class="game-details__publisher--title">Publisher</h1>
          <p class="game-details__publisher--name" v-for="publisher in gameDetailsById.publishers" :key="publisher.id">
            {{ publisher.name }}
          </p>
        </div>
        <div class="game-details__developer">
          <h1 class="game-details__developer--title">Developer</h1>
          <p class="game-details__developer--name" v-for="developer in gameDetailsById.developers" :key="developer.id">
            {{ developer.name }}
          </p>
        </div>
        <div class="game-details__platforms">
          <h1 class="game-details__platforms--title">Platforms</h1>
          <a class="game-details__platforms--name" v-for="p in gameDetailsById.platforms" :key="p.platform.id"
            >{{ p.platform.name }},</a
          >
        </div>
        <div class="game-details__genres">
          <h1 class="game-details__genres--title">Genres</h1>
          <router-link
            :to="{ name: 'GameByGenre', params: { genre: genre.name.toLowerCase() } }"
            v-for="genre in gameDetailsById.genres"
            :key="genre.id"
            class="game-details__genres--name"
            >{{ genre.name }}</router-link
          >
        </div>
        <div class="game-details__tags">
          <h1 class="game-details__tags--title">Tags</h1>
          <a class="game-details__tags--name" v-for="tag in gameDetailsById.tags" :key="tag.id">{{ tag.name }},</a>
        </div>
      </div>
      <div>
        <div class="game-details__screenshots">
          <h1 class="game-details__screenshots--title">Screenshots</h1>
          <img
            v-for="screenshot in gameDetailsBySlug['short_screenshots']"
            :key="screenshot.id"
            :src="screenshot.image"
            alt="game screenshot"
            class="game-details__screenshots--item"
          />
        </div>
      </div>
    </div>
  </div>
  <LoadingSpinner v-else />
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import LoadingSpinner from "../components/LoadingSpinner.vue";

export default {
  components: {
    LoadingSpinner
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const gameDetailsBySlug = ref(null);
    const gameDetailsById = ref(null);
    const gameSlug = route.params.gameSlug;

    store.dispatch("getGameDetailsBySlug", gameSlug).then(() => {
      gameDetailsBySlug.value = store.state.gameDetails[0];
      console.log(gameDetailsBySlug.value);

      store.dispatch("getGameDetailsById", gameDetailsBySlug.value.id).then(() => {
        gameDetailsById.value = store.state.gameDetails;
        console.log(gameDetailsById.value);
      });
    });

    return {
      gameDetailsBySlug,
      gameDetailsById
    };
  }
};
</script>

<style lang="scss">
.game-details {
  padding: 3rem 1.4rem;
  height: 100vh;
  background-image: linear-gradient(0deg, rgba(20, 20, 20, 1) 1%, rgba(9, 9, 121, 0) 50%, rgba(0, 212, 255, 0) 100%);

  &__background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: brightness(0.2);
    z-index: -1;
  }

  &__content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(340px, 1fr));
    grid-gap: 0 4rem;
    grid-template-areas: "content screenshots";

    & div:nth-child(1) {
      grid-area: content;
    }

    & div:nth-child(2) {
      grid-area: screenshots;
    }
  }

  &__name {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
  }

  &__description {
    &--text > p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.5;
      color: #fff;
    }

    &--title {
      font-size: 2.4rem;
      font-weight: 700;
      color: #fff;
      margin-top: 2rem;
    }
  }

  &__tags,
  &__genres,
  &__platforms,
  &__publisher,
  &__developer {
    word-wrap: break-word;

    &--title {
      font-size: 2.4rem;
      font-weight: 700;
      color: #fff;
      margin-top: 2rem;
    }

    &--name {
      font-size: 1.4rem;
      color: #fff;
      padding: 0 2px;
    }
  }

  &__screenshots {
    &--item {
      width: 50%;
      border-radius: 14px;
      padding: 8px;
    }

    &--item:nth-of-type(1) {
      width: 100%;
    }

    &--title {
      font-size: 2.4rem;
      font-weight: 700;
      color: #fff;
      margin-top: 2rem;
    }
  }
}
</style>
