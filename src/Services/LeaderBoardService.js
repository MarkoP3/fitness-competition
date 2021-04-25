let categories = [
  {
    name: "U18",
    competitors: [
      { id: 1, name: "MARKO Kocic", points: 20 },
      { id: 2, name: "Petar Kocic", points: 20 },
      { id: 3, name: "Petar Kocic", points: 20 },
    ],
  },
  {
    name: "Women",
    competitors: [
      { id: 4, name: "Petar Kocic", points: 20 },
      { id: 5, name: "Petar Kocic", points: 20 },
      { id: 6, name: "Petar Kocic", points: 20 },
      { id: 4, name: "Petar Kocic", points: 20 },
      { id: 5, name: "Petar Kocic", points: 20 },
    ],
  },
  {
    name: "Feather",
    competitors: [
      { id: 7, name: "Petar Kocic", points: 20 },
      { id: 8, name: "Petar Kocic", points: 20 },
      { id: 9, name: "Petar Kocic", points: 20 },
      { id: 7, name: "Petar Kocic", points: 20 },
      { id: 8, name: "Petar Kocic", points: 20 },
      { id: 9, name: "Petar Kocic", points: 20 },
      { id: 7, name: "Petar Kocic", points: 20 },
    ],
  },
  {
    name: "Welterweight",
    competitors: [
      { id: 10, name: "Petar Kocic", points: 20 },
      { id: 11, name: "Petar Kocic", points: 20 },
      { id: 12, name: "Petar Kocic", points: 20 },
    ],
  },
  {
    name: "Heavyweight",
    competitors: [
      { id: 13, name: "Petar Kocic", points: 20 },
      { id: 14, name: "Petar Kocic", points: 20 },
      { id: 15, name: "Petar Kocic", points: 20 },
    ],
  },
];
const CategoryService = {
  getAllCategoriesWithCompetitors: (discipline) => {
    return new Promise((resolve, reject) => {
      resolve(categories);
    });
  },
};
export default CategoryService;
