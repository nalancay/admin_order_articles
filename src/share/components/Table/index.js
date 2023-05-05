import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { CapitalizedTitle } from "./TableStyled";
import { Link } from "react-router-dom";

const TableHeader = ({ titleHeader, title }) => (
  <thead>
    {title && (
      <CapitalizedTitle>
        <FormattedMessage id={title} />
      </CapitalizedTitle>
    )}
    <tr>
      {titleHeader.map((columnTitle, index) => (
        <th key={`columnHeader-${index}`}>
          {<FormattedMessage id={columnTitle} />}
        </th>
      ))}
    </tr>
  </thead>
);

const TableBodyRows = ({
  data,
  loading,
  filterKeyColumnsBody,
  locationPathBtnEdit,
}) => {
  const filteredColumnsBody = data.map((column) => {
    const valueField = filterKeyColumnsBody.map(
      (keyColumn) => column[keyColumn]
    );
    return valueField;
  });

  return (
    <>
      {loading && (
        <p data-testid="LoadingComponent">
          <FormattedMessage id={"app.table.loading"} />
        </p>
      )}
      {!loading && (
        <tbody>
          {filteredColumnsBody.map((filteredValue, index) => {
            const idField = filteredValue[0];

            return (
              <tr key={`columnsBody-${index}`}>
                {filteredValue.map((singleValue, index) => (
                  <td key={`singleValue-${index}`}>{singleValue}</td>
                ))}
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`${locationPathBtnEdit}/${idField}`}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </>
  );
};

export const Table = ({
  title,
  data,
  columnsTitleHeader,
  filterKeyColumnsBody,
  loading,
  locationPathBtnEdit,
}) => {
  return (
    <>
      {data.length === 0 ? (
        <p>
          <FormattedMessage id={"app.common.messageEmptyData"} />
        </p>
      ) : (
        <table className="table ">
          <TableHeader titleHeader={columnsTitleHeader} title={title} />
          <TableBodyRows
            data={data}
            loading={loading}
            filterKeyColumnsBody={filterKeyColumnsBody}
            locationPathBtnEdit={locationPathBtnEdit}
          />
        </table>
      )}
    </>
  );
};
