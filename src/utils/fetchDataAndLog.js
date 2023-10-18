const axios = require("axios");

const fetchDataAndLog = async (type, value) => {
  // if type is username build username URL
  if (type === "username") {
    // fetch data with URL
    const data = await axios.get(`https://api.github.com/users/${value}`);
  }
  // if type is organisation build organisation URL
  // log data in table
  // return data
};

module.exports = { fetchDataAndLog };
