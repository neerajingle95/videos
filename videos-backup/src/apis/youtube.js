import axios from "axios";

const KEY = "AIzaSyDYm12jN-nm6DJt9MNwoM0uDyLjoLrUXos";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
