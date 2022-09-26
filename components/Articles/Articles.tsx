import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Article } from "../../shared/types/article";
import NewsArticle from "./NewsArticle";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {articles?.map((article) => {
        return <NewsArticle key={article.id} article={article} />;
      })}
    </Box>
  );
};

export default Articles;
