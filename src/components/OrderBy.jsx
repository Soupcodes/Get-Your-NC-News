import React from "react";

const OrderBy = props => {
  const { orderArticles, orderComments } = props;

  const handleChange = e => {
    let order = e.target.value;
    orderArticles ? orderArticles(order) : orderComments(order);
  };

  return (
    <form>
      <label>
        <select onChange={handleChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </form>
  );
};

export default OrderBy;
