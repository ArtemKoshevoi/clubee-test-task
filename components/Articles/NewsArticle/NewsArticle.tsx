import { CardHeader, CardContent, Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import { ReactElement, ReactNode } from "react";
import { Article } from "../../../shared/types/article";

interface NewsArticleProps {
  article: Article;
}

const NewsArticle = ({ article }: NewsArticleProps): ReactElement => {
  return (
    <Card sx={{ width: 600, marginBottom: "20px", backgroundColor: "#f2f2f2" }}>
      <CardHeader
        title={article.title}
        subheader={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{article.publicationDate}</Typography>
            <Typography>{article.email}</Typography>
          </Box>
        }
      />
      <CardContent>
        <Typography variant="body2">{article.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default NewsArticle;
