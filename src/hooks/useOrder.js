import { useReducer } from "react";
import { initialState, Types, reducer } from "./useOrder.utils";

export const useOrder = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const findArticleInOrder = (id) =>
    state.articles.find((item) => item.articleId === id);

  const editToOrder = (article, count) => {
    const articleInOrder = {
      articleId: article.id,
      quantity: count,
    };

    dispatch({ type: Types.REMOVE_ARTICLE, payload: { id: article.id } });
    if (count > 0)
      dispatch({
        type: Types.ADD_ARTICLE,
        payload: { article: articleInOrder },
      });
  };

  function addToOrder(article, count) {
    const itemExisting = findArticleInOrder(article.id);

    const articleInOrder = {
      articleId: article.id,
      quantity: count,
    };

    if (!itemExisting && count === 0) return;

    if (!itemExisting && count > 0) {
      dispatch({
        type: Types.ADD_ARTICLE,
        payload: { article: articleInOrder },
      });
    } else {
      editToOrder(article, count);
    }
  }

  const LoadArticles = (articles) => {
    const arrayItems = articles.map((article) => {
      return {
        articleId: article.articleId,
        quantity: article.quantity,
      };
    });

    dispatch({ type: Types.LOAD_ARTICLES, payload: { arrayItems } });
  };

  return { state, LoadArticles, addToOrder, editToOrder };
};
