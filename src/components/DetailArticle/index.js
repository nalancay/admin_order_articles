import { FormattedMessage } from "react-intl";

export const DetailArticle = ({ values, onChange }) => {
  const { name, description, price, impost, stock } = values;
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              <FormattedMessage id="app.article.name" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            name="name"
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FormattedMessage id="app.article.description" />
            </span>
          </div>
          <textarea
            className="form-control"
            aria-label="description"
            value={description}
            name="description"
            onChange={onChange}
          ></textarea>
        </div>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            <FormattedMessage id="app.article.price" />
          </span>
        </div>
        <input
          type="number"
          className="form-control"
          id="price"
          aria-describedby="basic-addon3"
          value={price}
          name="price"
          onChange={onChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            <FormattedMessage id="app.article.impost" />
          </span>
        </div>
        <input
          type="number"
          className="form-control"
          id="impost"
          aria-describedby="basic-addon3"
          value={impost}
          name="impost"
          onChange={onChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            <FormattedMessage id="app.article.quantity" />
          </span>
        </div>
        <input
          type="number"
          className="form-control"
          id="stock"
          aria-describedby="basic-addon3"
          value={stock}
          name="stock"
          onChange={onChange}
        />
      </div>
    </>
  );
};
