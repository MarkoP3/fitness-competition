const axios = require("axios");
let CompetitorServices = {
  AddCompetitor: (fn, ln, gender, weight, age) => {
    return axios.post(`${process.env.REACT_APP_API_URL}competitors`, {
      firstName: fn,
      lastName: ln,
      gender: gender,
      age: age,
      weight: weight,
    });
  },
  AddCompetes: (disciplines, competitor) => {
    return axios.post(`${process.env.REACT_APP_API_URL}competes`, {
      competitor: competitor,
      disciplines: disciplines,
    });
  },
  SearchCompetitor: (filter) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}competitors?filter=${filter}`
    );
  },
  changeCompetes: (competeID, result, competitor) => {
    return axios.post(`${process.env.REACT_APP_API_URL}results`, {
      competesID: competeID,
      result: result,
      competitor: competitor,
    });
  },
};
export default CompetitorServices;
