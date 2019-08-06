import React from "react";

const OrderBy = ({ orderArticles }) => {
  const handleChange = e => {
    orderArticles(e.target.value);
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
