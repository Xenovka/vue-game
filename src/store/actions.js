import axios from "axios";

const APIKEY = process.env.VUE_APP_APIKEY;
const ENDPOINT = process.env.VUE_APP_ENDPOINT;

export default {
  async getGames() {
    const fetchGamesData = await axios.get(`${ENDPOINT}/games?key=${APIKEY}`);
    const resultData = await fetchGamesData.data;
    console.log(resultData.results);
  }
};
