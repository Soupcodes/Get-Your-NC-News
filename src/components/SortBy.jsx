import React from "react";

const SortBy = ({ sortArticles }) => {
  const handleChange = e => {
    sortArticles(e.target.value);
  };
  return (
    <form>
      <label>
        Sort by:
        <select onChange={handleChange}>
          <option value="comment_count">Most Commented</option>
          <option value="author">Author</option>
          <option value="created_at">Date Posted</option>
          <option value="title">Title</option>
          <option value="votes">Votes</option>
        </select>
      </label>
    </form>
  );
};

export default SortBy;
