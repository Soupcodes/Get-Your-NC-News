import React from "react";

const SortComments = ({ sortComments }) => {
  const handleChange = e => {
    sortComments(e.target.value);
  };

  return (
    <form>
      <label>
        Sort by:
        <select onChange={handleChange}>
          <option value="created_at">Date Posted</option>
          <option value="votes">Votes</option>
          {/* <option value="Date (desc)" onChange={this.handleChange}>
              Date posted / desc
            </option> */}
        </select>
      </label>
    </form>
  );
};

export default SortComments;
