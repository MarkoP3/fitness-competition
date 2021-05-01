let categories = [
  "U18",
  "WOMEN",
  "Welterweight",
  "Middleweight",
  "Heavyweight",
];
let disciplines = [
  "Zgibovi",
  "Ruski",
  "Propadanja",
  "Deadlift",
  "Curls",
  "Bench",
];
const axios = require("axios");
const CategoryService = {
  getAllCategories: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}categories`);
  },
  getAllDiscipline: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}disciplines`);
  },
};
export default CategoryService;
