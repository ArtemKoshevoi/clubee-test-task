import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Article } from "../../shared/types/article";
import NewsArticle from "./NewsArticle";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const data: Article[] = await response.json();

      if (data) {
        const lastArticles = data.sort((a, b) => b.id - a.id).slice(0, 5);

        setArticles(lastArticles);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      {articles?.map((article) => {
        return <NewsArticle key={article.id} article={article} />;
      })}
    </Box>
  );
};

export default Articles;
