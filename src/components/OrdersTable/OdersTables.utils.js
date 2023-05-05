import {
  getTotalPriceArticles,
  getTotalPriceArticlesWithImpost,
  updateQuantityInOrders,
} from "components/utils/helpers";

/*const getTotalPriceArticlesWithImpost = (articles) => {
  return articles.reduce((accumulator, article) => {
    return (
      accumulator +
      article.quantity * article.price +
      article.quantity * article.impost
    );
  }, 0);
};*/

export const getDataOrders = ({ orders, articles }) => {
  const DataOrders = orders.map((order) => {
    const { id } = order;

    const Data_Articles = updateQuantityInOrders({
      articlesInOrder: order.articles,
      articles,
    });

    const total_price = getTotalPriceArticles(Data_Articles).toFixed(2);
    const total_price_impost =
      getTotalPriceArticlesWithImpost(Data_Articles).toFixed(2);

    return { id, total_price, total_price_impost };
  });
  return DataOrders;
};
