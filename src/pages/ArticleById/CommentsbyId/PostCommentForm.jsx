import React, { Component } from "react";
import styles from "./styles/PostCommentForm.module.css";

class PostCommentForm extends Component {
  state = {
    body: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <label>
          <textarea
            value={this.state.body}
            onChange={this.handleChange}

            type="text"
            name="comment"
            form="usrform"
            className={styles.commentBox}
            required
          >
            Enter text here...
          </textarea>
        </label>
        <button className={styles.post} type="submit">
          Post
        </button>
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
