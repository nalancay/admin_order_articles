import { OrdersTable } from "components/OrdersTable";

export default function AdminOrders({ orders, isLoading, errorState }) {
  return (
    <OrdersTable
      orders={orders}
      isLoading={isLoading}
      errorState={errorState}
    />
  );
}
