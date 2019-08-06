import React, { Component } from "react";

class PostCommentBox extends Component {
  state = {
    comment: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            // type="text"
            value={this.state.comment}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Post</button>
      </form>
    );
  }

  handleChange = e => {
    e.preventDefault();
    console.log(this.state.comment);
    this.setState({ input: this.state.comment });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
}

export default PostCommentBox;
