export default {
  updateTopGamesListState(state, data) {
    state.topGamesList = data;
  },

  updateSearchedGameListState(state, data) {
    state.searchedGameList = data;
  },

  updateGameDetailsState(state, data) {
    state.gameDetails = data;
  },

  updateGenresListState(state, data) {
    state.genresList = data;
  }
};
