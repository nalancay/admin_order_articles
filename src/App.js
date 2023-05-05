import "bootstrap/dist/css/bootstrap.min.css";
import AdminArticles from "pages/AdminArticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormArticle from "pages/FormArticle";
import { useFetchList } from "hooks/useFetchList";
import articlesApi from "services/articles";
import { NavBar } from "components/NavBar";
import AdminOrders from "pages/AdminOrders";
import ordersApi from "services/orders";
import { ListArticles } from "pages/ListArticles";

function App() {
  const {
    entities: articles,
    setEntities: setArticles,
    forceUpdate: refreshDataArticles,
  } = useFetchList({
    functionFetch: articlesApi.getArticles,
  });

  const {
    entities: orders,
    isLoading,
    errorState,
    setEntities: setOrders,
  } = useFetchList({ functionFetch: ordersApi.getOrders });

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AdminArticles />} />
        <Route
          path="/articles/create"
          element={
            <FormArticle
              data={articles}
              refreshDataArticles={refreshDataArticles}
            />
          }
        />
        <Route
          path="/articles/edit/:articleId"
          element={
            <FormArticle
              data={articles}
              refreshDataArticles={refreshDataArticles}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <AdminOrders
              orders={orders}
              isLoading={isLoading}
              errorState={errorState}
            />
          }
        />
        <Route
          path="/orders/create"
          element={
            <ListArticles
              articles={articles}
              title={"app.ListArticles.title"}
              setOrders={setOrders}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/orders/edit/:orderId"
          element={
            <ListArticles
              articles={articles}
              orders={orders}
              title={"app.ListArticles.titleEdit"}
              setArticles={setArticles}
              setOrders={setOrders}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
