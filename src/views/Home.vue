<template>
  <base-header>
    <h1>Hello World</h1>
  </base-header>
</template>

<script>
import { useStore } from "vuex";

import BaseHeader from "../components/BaseHeader.vue";

export default {
  components: {
    BaseHeader
  },
  setup() {
    const store = useStore();

    store.dispatch("getGames");
  }
};
</script>

BaseHeader
