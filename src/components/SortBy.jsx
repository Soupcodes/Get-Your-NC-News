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
          <option value="created_at">Recently Posted</option>
          <option value="title">Title</option>
          <option value="votes">Votes</option>
          {/* <option value="Date (desc)" onChange={this.handleChange}>
              Date posted / desc
            </option> */}
        </select>
      </label>
    </form>
  );
};

export default SortBy;
