import React from "react";
import { Link } from "@reach/router";

const Topic = ({ topics }) => {
  console.log(topics);
  return topics.map(topic => (
    <section key={topic.slug}>
      <Link
        to={`/topics/${topic.slug}`}
      >{`${topic.slug[0].toUpperCase()}${topic.slug.slice(1)}`}</Link>
    </section>
  ));
};

export default Topic;
