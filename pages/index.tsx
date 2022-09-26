import Container from "@mui/material/Container";
import type { NextPage } from "next";
import Head from "next/head";
import Articles from "../components/Articles";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import Meta from "../shared/Meta";

const Home: NextPage = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Meta title="News" description="List of news articles" />
      <Header title="News" />
      <LinkButton href="/new-article" buttonTitle="New Article" />
      <Articles />
    </Container>
  );
};

export default Home;
