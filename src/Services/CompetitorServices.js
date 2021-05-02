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
};
export default CompetitorServices;
