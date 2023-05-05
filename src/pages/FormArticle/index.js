import React, { useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CapitalizedTitle } from "share/components/Table/TableStyled";
import { ArticleContainer, ButtonText } from "./FormArticle.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { DetailArticle } from "components/DetailArticle";
import { useFormArticle } from "hooks/useFormArticle";

const isValidData = (formValue) => {
  const { name, description, price, impost, stock } = formValue;
  const isValid =
    name !== "" &&
    description !== "" &&
    price !== "" &&
    impost !== "" &&
    stock !== "";

  return isValid;
};

const FormArticle = ({ data, refreshDataArticles = () => {} }) => {
  const { formatMessage } = useIntl();
  const { functions, values } = useFormArticle({
    articles: data,
    refreshDataArticles,
  });
  const { createArticle, editArticle, findArticle, setValues } = functions;

  const navigate = useNavigate();
  const { articleId: articleIdParam } = useParams();

  const title = articleIdParam
    ? "tableArticles.btnEdit"
    : "tableArticles.btnAdd";

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const dataArticle = {
      ...values,
      price: Number(values.price),
      impost: Number(values.impost),
      stock: Number(values.stock),
    };
    if (articleIdParam) {
      editArticle({ dataArticle, idArticle: articleIdParam });
    } else {
      createArticle({ dataArticle });
    }
    navigate("/");
  };

  useEffect(() => {
    findArticle({ idArticle: articleIdParam });
  }, [articleIdParam]);

  return (
    <>
      <ButtonText>
        <Link to="/" className="buttonText">
          <FontAwesomeIcon icon={faArrowLeft} />
          <strong>
            <FormattedMessage id="app.btnGoBackToArticles" />
          </strong>
        </Link>
      </ButtonText>
      <ArticleContainer className="m-4">
        <CapitalizedTitle className="title_login">
          <FormattedMessage id={title} />
        </CapitalizedTitle>
        <form className="form_container" onSubmit={onSubmit}>
          <DetailArticle values={values} onChange={onChange} />
          <div class="col text-center">
            <input
              type="submit"
              className="btn btn-primary"
              value={formatMessage({ id: title })}
              disabled={isValidData(values) ? false : true}
            />
          </div>
        </form>
      </ArticleContainer>
    </>
  );
};
export default FormArticle;
