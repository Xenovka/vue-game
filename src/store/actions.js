import axios from "axios";

const APIKEY = process.env.VUE_APP_APIKEY;
const ENDPOINT = process.env.VUE_APP_ENDPOINT;

export default {
  async getTopGamesDataFromAPI({ commit }) {
    const fetchGamesData = await axios.get(`${ENDPOINT}/games?key=${APIKEY}`);
    const resultFromFetchGamesData = await fetchGamesData.data;

    commit("updateTopGamesDataState", resultFromFetchGamesData.results);
  }
};
