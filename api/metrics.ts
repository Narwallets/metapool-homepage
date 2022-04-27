import axios from "axios";

const api = {
  getMetrics: async () => {
    return axios
      .get(`https://validators.narwallets.com/metrics_json`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  },
};

export default api;
