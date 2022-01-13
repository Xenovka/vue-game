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
        <div class="game-details__tags">
          <h1 class="game-details__tags--title">Tags</h1>
          <a class="game-details__tags--name" v-for="tag in gameDetailsById.tags" :key="tag.id">{{ tag.name }},</a>
        </div>
      </div>
      <div>
        <div class="game-details__screenshots">
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
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
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
    grid-gap: 20px;
    grid-auto-columns: minmax(calc(100vw * 0.25), calc(100vw * 0.5));

    & > :first-child {
      grid-column: 1/2;
    }

    & > :last-child {
      grid-column: 2/3;
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
      line-height: 1.2;
      color: #fff;
    }

    &--title {
      font-size: 2.4rem;
      font-weight: 700;
      color: #fff;
      margin-top: 2rem;
    }
  }

  &__tags {
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
      max-width: 180px;
    }
  }
}
</style>
