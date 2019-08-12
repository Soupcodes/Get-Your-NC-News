import React, { Component } from "react";
import styles from "./styles/PostCommentForm.module.css";

class PostCommentForm extends Component {
  state = {
    body: ""
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <label>
          <textarea
            value={body}
            onChange={this.handleChange}
            type="text"
            className={styles.commentBox}
            required
          />
        </label>
        <p>{500 - body.length} characters remaining</p>
        <button className={styles.post} type="submit">
          Post
        </button>
      </form>
    );
  }

  handleChange = e => {
    if (e.target.value.length <= 500) {
      this.setState({
        body: e.target.value
      });
    }
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
