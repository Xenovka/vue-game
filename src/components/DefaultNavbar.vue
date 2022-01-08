<template>
  <div class="default-navbar">
    <h1 class="default-navbar__brand">D N E V</h1>
    <SearchInputForm />
  </div>
</template>

<script>
import SearchInputForm from "./SearchInputForm.vue";

export default {
  components: {
    SearchInputForm
  }
};
</script>

<style lang="scss">
.default-navbar {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1rem 0 3rem;

  &__brand {
    font-weight: 900;
    font-size: 2.2rem;
    display: inline-block;
    padding-right: 2rem;
  }
}
</style>
