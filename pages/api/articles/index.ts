import { NextApiRequest, NextApiResponse } from "next";
import { articles } from "../../../data/articles";
import { Article } from "../../../shared/types/article";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  if (req.method === "GET") {
    res.status(200).json(articles);
  } else if (req.method === "POST") {
    const article = req.body;
    const newArticle = { id: articles.length + 1, ...article };

    articles.push(newArticle);
    // articles.sort((a, b) => b.id - a.id);

    res.status(201).json(newArticle);
  }
}
