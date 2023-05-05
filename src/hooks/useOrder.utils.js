export const initialState = {
  articles: [],
};

export const Types = {
  ADD_ARTICLE: "add an item to the order",
  REMOVE_ARTICLE: "remove an item from the order",
  LOAD_ARTICLES: "load articles",
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(payload.article),
      };
    case Types.REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.articleId !== payload.id
        ),
      };
    case Types.LOAD_ARTICLES:
      return {
        articles: payload.arrayItems,
      };
    default:
      return state;
  }
};
