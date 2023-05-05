export const getTotalPriceArticles = (articles) => {
  return articles.reduce((accumulator, article) => {
    return accumulator + article.quantity * article.price;
  }, 0);
};

export const getTotalPriceArticlesWithImpost = (articles) => {
  return articles.reduce((accumulator, article) => {
    return (
      accumulator +
      article.quantity * article.price +
      article.quantity * article.impost
    );
  }, 0);
};

export const updateQuantityInOrders = ({ articlesInOrder, articles }) =>
  articlesInOrder.map((articlesInOrder) => {
    const article = articles.find(
      (article) => article.id === articlesInOrder.articleId
    );
    return {
      ...article,
      quantity: articlesInOrder.quantity,
    };
  });

const resetStockInArticles = (articles) =>
  articles.map((article) => {
    const resetStock = article.stock + article.quantity;
    //const { id, name, description, price, impost } = article;
    return {
      id: article?.id,
      name: article?.name,
      description: article?.description,
      price: article?.price,
      impost: article?.impost,
      stock: resetStock,
    };
  });

const updateStockInStoreArticle = (
  articlesInOrder,
  articles,
  orderId,
  articlesWithZeroInStock
) => {
  let updateStock = articlesInOrder.map((articleInOrder) => {
    const article = articles.find(
      (article) => article.id === articleInOrder.articleId
    );

    const decreaseStockInOrder =
      article?.stock + article?.quantity - articleInOrder.quantity;
    const decreaseStockInNewOrder = article?.stock - articleInOrder.quantity;

    const updateQuantityArticle = orderId
      ? decreaseStockInOrder
      : decreaseStockInNewOrder;

    //const { id, name, description, price, impost } = article;
    return {
      id: article?.id,
      name: article?.name,
      description: article?.description,
      price: article?.price,
      impost: article?.impost,
      stock: updateQuantityArticle,
    };
  });

  if (orderId) return updateStock.concat(articlesWithZeroInStock);

  return updateStock;
};

const filterArticlesInOrder = (articlesInStore, articlesInOrder) => {
  const articles = articlesInStore.map((article) => {
    if (
      !articlesInOrder.some(
        (articleInOrder) => articleInOrder.articleId === article.id
      )
    )
      return article;
    else return;
  });
  return articles.filter((article) => article !== undefined);
};

export const updateStockInArticles = ({
  articlesInOrder,
  articles,
  orderId,
}) => {
  const articlesWithZeroInStock = resetStockInArticles(
    filterArticlesInOrder(articles, articlesInOrder)
  );

  return updateStockInStoreArticle(
    articlesInOrder,
    articles,
    orderId,
    articlesWithZeroInStock
  );
};
