import axios from "axios";

const APIKEY = process.env.VUE_APP_APIKEY;
const ENDPOINT = process.env.VUE_APP_ENDPOINT;

export default {
  async getTopGamesDataFromAPI({ commit }) {
    const fetchGamesData = await axios.get(`${ENDPOINT}/games?key=${APIKEY}&page_size=40`);
    const resultFromFetchGamesData = await fetchGamesData.data;

    commit("updateTopGamesDataState", resultFromFetchGamesData.results);
  },
  async getSearchedGamesDataFromAPI({ commit }, name) {
    const fetchSearchedGame = await axios.get(`${ENDPOINT}/games?key=${APIKEY}&search=${name}&page_size=5`);
    const resultFromFetchSearcedhGame = await fetchSearchedGame.data;

    commit("updateFoundGamesData", resultFromFetchSearcedhGame.results);
  }
};
