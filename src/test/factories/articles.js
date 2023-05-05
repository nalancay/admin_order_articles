import range from "lodash/range";
import { faker } from "@faker-js/faker";

const generateArticle = () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.random.word(1),
    description: faker.random.word(1),
    price: Number(faker.random.numeric()),
    impost: Number(faker.random.numeric()),
    stock: Number(faker.random.numeric()),
  };
};

export const generateArticles = (numberOfArticles = 5) =>
  [...range(numberOfArticles)].map((n) => generateArticle());
