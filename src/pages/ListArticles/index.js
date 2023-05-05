import { ArticleCard } from "components/ArticleCard";
import { OrderSummary } from "components/OrderSummary";
import {
  getTotalPriceArticles,
  getTotalPriceArticlesWithImpost,
  updateQuantityInOrders,
  updateStockInArticles,
} from "components/utils/helpers";
import { useOrder } from "hooks/useOrder";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import { ListContainer } from "./ListArticles.styles";
import { availableArticles, findArticlesInOrder } from "./ListArticles.utils";

export const ListArticles = ({
  articles = [],
  orders = [],
  title,
  setOrders,
  setArticles,
}) => {
  const { orderId } = useParams();
  const titleBtnSumary = orderId ? "app.btnEditOrder" : "app.btnCreateOrder";
  const filterAvailableArticles = availableArticles(articles);

  const findArticles_Order = findArticlesInOrder({
    orders,
    orderId,
    articles,
  });

  const arrayArticles = orderId ? findArticles_Order : filterAvailableArticles;

  const { state, LoadArticles, addToOrder, editToOrder } = useOrder();

  const articlesInOrder = updateQuantityInOrders({
    articlesInOrder: state.articles,
    articles,
  });

  const articlesForUpdate = updateStockInArticles({
    articlesInOrder: state.articles,
    articles: arrayArticles,
    orderId,
  });

  const total = getTotalPriceArticles(articlesInOrder).toFixed(2);
  const totalImpost =
    getTotalPriceArticlesWithImpost(articlesInOrder).toFixed(2);

  useEffect(() => {
    if (orderId) LoadArticles(findArticles_Order);
  }, [orderId]);

  return (
    <div className="m-5" style={{ display: "flex" }}>
      <div style={{ width: "70%" }}>
        <h4>
          <FormattedMessage id={title} />
        </h4>
        <ListContainer>
          {arrayArticles.map((article) => (
            <ArticleCard
              key={`article-item-${article.id}`}
              article={article}
              addToOrder={addToOrder}
              editToOrder={editToOrder}
            />
          ))}
        </ListContainer>
      </div>
      <OrderSummary
        articlesInOrder={state.articles}
        total={total}
        totalImpost={totalImpost}
        articlesForUpdate={articlesForUpdate}
        titleBtn={titleBtnSumary}
        setOrders={setOrders}
        setArticles={setArticles}
      />
    </div>
  );
};
