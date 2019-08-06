import React, { Component } from "react";

class PostCommentForm extends Component {
  state = {
    body: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Post</button>
      </form>
    );
  }

  handleChange = e => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { postNewComment, username, article_id } = this.props;
    postNewComment(article_id, { username, ...this.state }).then(() => {
      this.setState({ body: "" });
    });
  };
}

export default PostCommentForm;
