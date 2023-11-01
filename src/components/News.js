import React from "react";
import { NEWS } from "./NewsArray";
import { NewsCard } from "./NewsCard";

const News = () => {
  return (
    <div className="newscard">
      {NEWS.map((newscard) => (
        <NewsCard data={newscard} />
      ))}
    </div>
  );
};

export default News;
