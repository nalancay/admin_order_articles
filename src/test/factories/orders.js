import range from "lodash/range";
import { faker } from "@faker-js/faker";

const generateOrder = () => {
  return {
    id: faker.datatype.uuid(),
    total_price: faker.random.numeric(),
    total_price_impost: faker.random.numeric(),
    articles: [
      {
        articleId: faker.datatype.uuid(),
        quantity: 2,
      },
    ],
  };
};

export const generateOrders = (numberOfOrders = 3) =>
  [...range(numberOfOrders)].map((n) => generateOrder());
