export const getStockOptions = (stockAvaliable) => {
  let options = [];
  for (let i = 0; i <= stockAvaliable; i++) {
    options.push(<option value={i}>{i}</option>);
  }
  return options;
};
