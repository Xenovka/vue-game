import axios from "axios";

const APIKEY = process.env.VUE_APP_APIKEY;
const ENDPOINT = process.env.VUE_APP_ENDPOINT;

export default {
  async getTopGamesList({ commit }) {
    const fetchGamesList = await axios.get(`${ENDPOINT}/games?key=${APIKEY}&page_size=40`);
    const resultFromFetchGamesList = await fetchGamesList.data;

    commit("updateTopGamesListState", resultFromFetchGamesList.results);
  },

  async getSearchedGameList({ commit }, name) {
    const fetchSearchedGame = await axios.get(`${ENDPOINT}/games?key=${APIKEY}&search=${name}&page_size=10`);
    const searchedGameResult = await fetchSearchedGame.data;

    commit("updateSearchedGameListState", searchedGameResult.results);
  },

  async getGameDetailsById({ commit }, id) {
    const fetchGameDetails = await axios.get(`${ENDPOINT}/games/${id}?key=${APIKEY}`);
    const gameDetailsResult = await fetchGameDetails.data;

    commit("updateGameDetailsState", gameDetailsResult);
  }
};
