import axios from "axios";

const APIKEY = process.env.VUE_APP_APIKEY;
const ENDPOINT = process.env.VUE_APP_ENDPOINT;

export default {
  async getGamesList({ commit }, genre) {
    const fetchGamesList = genre
      ? await axios.get(`${ENDPOINT}/games?key=${APIKEY}&page_size=40&genres=${genre}`)
      : await axios.get(`${ENDPOINT}/games?key=${APIKEY}&page_size=40`);
    const resultFromFetchGamesList = await fetchGamesList.data;

    commit("updateGamesListState", resultFromFetchGamesList.results);
  },

  async getSearchedGameList({ commit }, name) {
    const fetchSearchedGame = await axios.get(`${ENDPOINT}/games?key=${APIKEY}&search=${name}&page_size=10`);
    const searchedGameResult = await fetchSearchedGame.data;

    commit("updateSearchedGameListState", searchedGameResult.results);
  },

  async getGameDetailsBySlug({ commit }, slug) {
    const fetchGameDetails = await axios.get(`${ENDPOINT}/games?key=${APIKEY}&search=${slug}`);
    const gameDetailsResult = await fetchGameDetails.data;
    console.log(gameDetailsResult);

    commit("updateGameDetailsState", gameDetailsResult.results);
  },

  async getGameDetailsById({ commit }, id) {
    const fetchGameDetails = await axios.get(`${ENDPOINT}/games/${id}?key=${APIKEY}`);
    const gameDetailsResult = await fetchGameDetails.data;

    commit("updateGameDetailsState", gameDetailsResult);
  },

  async getGenresList({ commit }) {
    const fetchGenres = await axios.get(`${ENDPOINT}/genres?key=${APIKEY}`);
    const fetchResult = await fetchGenres.data;

    commit("updateGenresListState", fetchResult.results);
  }
};
