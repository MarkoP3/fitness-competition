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
const CategoryService = {
  getAllCategories: () => {
    return new Promise((resolve, reject) => {
      resolve(categories);
    });
  },
  getAllDiscipline: () => {
    return new Promise((resolve, reject) => {
      resolve(disciplines);
    });
  },
};
export default CategoryService;
