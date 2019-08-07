import React from "react";

const OrderComments = ({ orderComments }) => {
  const handleChange = e => {
    orderComments(e.target.value);
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

export default OrderComments;
