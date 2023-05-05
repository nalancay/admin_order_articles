import { FormattedMessage } from "react-intl";
import { useFetchList } from "hooks/useFetchList";
import { Link } from "react-router-dom";
import { Table } from "share/components/Table";
import { StyledTableContainer } from "./ArticlesTable.syles";
import articlesApi from "services/articles";

const columnsTitleHeader = [
  "app.article.id",
  "app.article.name",
  "app.article.price",
  "app.table.actions",
];
const filterKeyColumnsBody = ["id", "name", "price"];

export const ArticlesTable = () => {
  const {
    entities: articles,
    isLoading,
    errorState,
  } = useFetchList({ functionFetch: articlesApi.getArticles });
  const locationPathBtnEdit = "/articles/edit";

  return (
    <ArticlesTable.Container>
      <Link className="btn btn-success" to={"/articles/create"}>
        <FormattedMessage id="tableArticles.btnAdd" />
      </Link>
      {errorState.hasError && (
        <span>
          <FormattedMessage id="app.messageError" /> {errorState.message}
        </span>
      )}
      {!errorState.hasError && (
        <Table
          title={"tableArticles.title"}
          data={articles}
          columnsTitleHeader={columnsTitleHeader}
          loading={isLoading}
          filterKeyColumnsBody={filterKeyColumnsBody}
          locationPathBtnEdit={locationPathBtnEdit}
        />
      )}
    </ArticlesTable.Container>
  );
};

ArticlesTable.Container = StyledTableContainer;
