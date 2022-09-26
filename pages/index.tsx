import { Box, Card } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Articles from "../components/Articles";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import { Article } from "../shared/types/article";

const Home: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>();

  return (
    <Container maxWidth="lg">
      <Header />
      <LinkButton href="/new-article" buttonTitle="New Article" />
      <Articles />
    </Container>
  );
};

export default Home;
