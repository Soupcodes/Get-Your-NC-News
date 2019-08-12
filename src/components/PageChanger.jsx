import React from "react";

const PageChanger = ({ page, browsePage, limit }) => {
  const handleClick = inc_page => {
    browsePage(inc_page);
  };

  return (
    <>
      <button onClick={() => handleClick(-1)} disabled={page === 1}>
        Back
      </button>
      <button onClick={() => handleClick(1)} disabled={limit === true}>
        Next
      </button>
    </>
  );
};

export default PageChanger;
