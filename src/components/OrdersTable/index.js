import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Table } from "share/components/Table";
import { StyledTableContainer } from "./OrdersTable.styles";

const columnsTitleHeader = [
  "app.order.id",
  "app.order.totalPrice",
  "app.order.totalPriceImpost",
  "app.table.actions",
];
const filterKeyColumnsBody = ["id", "total_price", "total_price_impost"];

export const OrdersTable = ({ orders, isLoading, errorState }) => {
  const locationPathBtnEdit = "/orders/edit";

  return (
    <OrdersTable.Container>
      <Link className="btn btn-success" to={"/orders/create"}>
        <FormattedMessage id="app.btnCreateOrder" />
      </Link>
      {errorState.hasError && (
        <span>
          <FormattedMessage id="app.messageError" /> {errorState.message}
        </span>
      )}
      {!errorState.hasError && (
        <Table
          title={"tableOrders.title"}
          data={orders}
          columnsTitleHeader={columnsTitleHeader}
          loading={isLoading}
          filterKeyColumnsBody={filterKeyColumnsBody}
          locationPathBtnEdit={locationPathBtnEdit}
        />
      )}
    </OrdersTable.Container>
  );
};

OrdersTable.Container = StyledTableContainer;
