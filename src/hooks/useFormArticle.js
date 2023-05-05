import { useState } from "react";
import articlesApi from "services/articles";

export const useFormArticle = ({ articles, refreshDataArticles }) => {
  const initialStateValues = {
    name: "",
    description: "",
    price: "",
    impost: "",
    stock: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const findArticle = ({ idArticle }) => {
    if (idArticle) {
      const article = articles.find(
        (article) => article.id === Number(idArticle)
      );
      setValues(article);
    } else setValues(initialStateValues);
  };

  const createArticle = async ({ dataArticle }) => {
    const { isSuccessful, status } = await articlesApi.createArticle(
      dataArticle
    );
    if (isSuccessful) refreshDataArticles();
    else {
      throw Error(`Request rejected with error: ${status}`);
    }
  };

  const editArticle = async ({ dataArticle, idArticle }) => {
    const { isSuccessful, status } = await articlesApi.editArticle(
      dataArticle,
      idArticle
    );
    if (isSuccessful) refreshDataArticles();
    else {
      throw Error(`Request rejected with error: ${status}`);
    }
  };

  return {
    values,
    functions: { createArticle, editArticle, findArticle, setValues },
  };
};
