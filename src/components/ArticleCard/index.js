import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import { getStockOptions } from "./ArticleCard.utils";
import { ItemContainer } from "./ArticlesCard.styles";

export const ArticleCard = ({ article, addToOrder, editToOrder }) => {
  const { orderId } = useParams();
  const defaultValue = article.quantity ?? 0;
  const [count, setCount] = useState(defaultValue);

  const stock = article.quantity
    ? article.stock + article.quantity
    : article.stock;

  const handleClick = () => {
    if (orderId) {
      editToOrder(article, count);
    } else addToOrder(article, count);
  };

  return (
    <ItemContainer className="d-flex flex-column">
      <span>
        <FormattedMessage id="app.article.name" />: {article.name}
      </span>
      <span>
        <FormattedMessage id="app.article.price" />: $ {article.price}
      </span>
      <div className="d-flex justify-content-start">
        <span>
          <FormattedMessage id="app.article.quantity" />:{" "}
        </span>
        <select
          className="form-select form-select-sm"
          aria-label="Ejemplo de .form-select-sm"
          style={{ width: "80px" }}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          <option selected>{count}</option>
          {getStockOptions(stock)}
        </select>
      </div>
      <small>
        ({stock} <FormattedMessage id="app.ListArticls.text.articleAvailable" />
        )
      </small>
      <button
        className="btn btn-success mt-2"
        style={{ width: "156px" }}
        onClick={() => handleClick()}
      >
        <FormattedMessage
          id={orderId ? "app.ListArticles.btnEdit" : "app.ListArticles.btnAdd"}
        />
      </button>
    </ItemContainer>
  );
};
