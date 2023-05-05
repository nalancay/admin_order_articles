import ordersApi from "services/orders";
import articlesApi from "services/articles";

export const createOrder = async ({ dataOrder, setOrders }) => {
  const { data, isSuccessful, status } = await ordersApi.createOrder(dataOrder);

  if (isSuccessful) {
    setOrders((oldOrders) => [...oldOrders, data]);
  } else throw Error(`Request rejected with error: ${status}`);
};

export const bulkUpdateArticles = async ({
  articlesForUpdate,
  setArticles,
}) => {
  for (let i = 0; i < articlesForUpdate.length; i++) {
    const dataArticle = articlesForUpdate[i];
    const idArticle = articlesForUpdate[i].id;

    const { data, isSuccessful, status } = await articlesApi.editArticle(
      dataArticle,
      idArticle
    );
    if (isSuccessful) {
      setArticles((oldArticles) =>
        oldArticles.map((oldArticle) =>
          oldArticle.id === data.id
            ? { ...oldArticle, stock: data.stock }
            : oldArticle
        )
      );
    } else {
      throw Error(`Request rejected with error: ${status}`);
    }
  }
};

export const removeOrder = async ({ articlesInOrder, orderId, setOrders }) => {
  if (articlesInOrder.length === 0) {
    const { isSuccessful, status } = await ordersApi.deleteOrder(orderId);
    if (isSuccessful) {
      setOrders((oldOrders) =>
        oldOrders.filter((oldOrder) => Number(oldOrder.id) !== Number(orderId))
      );
    } else {
      throw Error(`Request rejected with error ${status}`);
    }
  }
};

export const updateOrder = async ({ dataOrder, idOrder, setOrders }) => {
  const { articles } = dataOrder;
  if (articles.length !== 0) {
    const { data, isSuccessful } = await ordersApi.editOrder(
      dataOrder,
      idOrder
    );
    if (isSuccessful) {
      setOrders((oldOrders) =>
        oldOrders.map((oldOrder) =>
          oldOrder.id === data.id
            ? {
                ...oldOrder,
                articles: data.articles,
                total_price: data.total_price,
                total_price_impost: data.total_price_impost,
              }
            : oldOrder
        )
      );
    } else {
      throw Error(`Request rejected with error`);
    }
  }
};
