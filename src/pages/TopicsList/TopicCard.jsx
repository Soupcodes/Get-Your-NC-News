import React from "react";
import { Link } from "@reach/router";
import style from "./styles/TopicsPage.module.css";

const Topic = ({ topics }) => {
  return topics.map(topic => (
    <section key={topic.slug}>
      <Link to={`/topics/${topic.slug}`} className={style.links}>
        {topic.slug === "cooking" ? (
          <span
            className="iconify"
            data-icon="emojione-monotone:pot-of-food"
            data-inline="false"
          />
        ) : topic.slug === "football" ? (
          <span
            class="iconify"
            data-icon="ion:ios-football"
            data-inline="false"
          />
        ) : topic.slug === "coding" ? (
          <span
            class="iconify"
            data-icon="emojione-monotone:desktop-computer"
            data-inline="false"
          />
        ) : (
          <></>
        )}
      </Link>
    </section>
  ));
};

export default Topic;

// {
//   `${topic.slug[0].toUpperCase()}${topic.slug.slice(1)}`;
// }
