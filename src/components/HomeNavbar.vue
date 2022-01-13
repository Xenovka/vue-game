<template>
  <div class="default-navbar">
    <router-link to="/" class="default-navbar__brand">D N E V</router-link>
    <SearchInputForm />
    <GenresListDropdown />
  </div>
</template>

<script>
import SearchInputForm from "./SearchInputForm.vue";
import GenresListDropdown from "./GenresListDropdown.vue";

export default {
  components: {
    SearchInputForm,
    GenresListDropdown
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
    text-decoration: none;
    color: #fff;
    font-weight: 900;
    font-size: 1.8rem;
    letter-spacing: 2px;
    display: inline-block;
    padding-right: 2rem;

    &:hover {
      color: #fff;
    }
  }
}
</style>
