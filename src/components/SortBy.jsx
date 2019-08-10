import React from "react";

const SortBy = props => {
  const { sortArticles, sortComments } = props;

  const handleChange = e => {
    let sort_by = e.target.value;
    sortArticles ? sortArticles(sort_by) : sortComments(sort_by);
  };
  return (
    <form>
      <label>
        <select onChange={handleChange}>
          {!sortComments ? (
            <>
              <option value="comment_count">Most Commented</option>
              <option value="author">Author</option>
              <option value="title">Title</option>
            </>
          ) : (
            <></>
          )}
          <option value="created_at">Date Posted</option>
          <option value="votes">Votes</option>
        </select>
      </label>
    </form>
  );
};

export default SortBy;
