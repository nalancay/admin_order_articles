import { FormattedMessage } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import {
  bulkUpdateArticles,
  createOrder,
  removeOrder,
  updateOrder,
} from "./OrderSummary.utils";

export const OrderSummary = ({
  articlesInOrder,
  total,
  totalImpost,
  articlesForUpdate,
  titleBtn,
  setOrders,
  setArticles,
}) => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    const dataOrder = {
      articles: articlesInOrder,
      total_price: Number(total),
      total_price_impost: Number(totalImpost),
    };

    bulkUpdateArticles({ articlesForUpdate, setArticles });
    if (orderId) {
      removeOrder({ articlesInOrder, orderId, setOrders });
      updateOrder({ dataOrder, idOrder: orderId, setOrders });
      navigate("/orders");
    } else {
      createOrder({ dataOrder, setOrders });
      navigate("/orders");
    }
  };

  const disabledforCreate = articlesInOrder.length === 0 ? true : false;
  const disabledforEdit = orderId && false;
  const disabledButton = disabledforEdit ?? disabledforCreate;

  return (
    <div style={{ width: "30%" }}>
      <h4>
        <FormattedMessage id="app.ListArticls.OrderSummary" />
      </h4>
      <p>
        <FormattedMessage id="app.text.QuantityOfArticles" />
        {articlesInOrder.length}
      </p>
      <p>
        <FormattedMessage id="app.text.Total" />
        {total}
      </p>
      <p>
        <FormattedMessage id="app.order.totalPriceImpost" />
        :$ {totalImpost}
      </p>
      <button
        className="btn btn-success col-10"
        onClick={handleClick}
        disabled={disabledButton}
      >
        <FormattedMessage id={titleBtn} />
      </button>
    </div>
  );
};
