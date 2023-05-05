export const availableArticles = (articles) =>
  articles.filter((article) => article.stock > 0);

export const findOrder = ({ orders, orderId }) =>
  orders.find((order) => order.id === Number(orderId));

export const findArticlesInOrder = ({ orders, orderId, articles }) => {
  const artcilesInOrder = findOrder({ orders, orderId });
  const dataArticlesInOrder = artcilesInOrder?.articles.map(
    (articlesInOrder) => {
      const article = articles.find(
        (article) => Number(article.id) === Number(articlesInOrder.articleId)
      );

      return {
        ...article,
        articleId: articlesInOrder.articleId,
        quantity: articlesInOrder.quantity,
      };
    }
  );
  return dataArticlesInOrder;
};
