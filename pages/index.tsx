import Container from "@mui/material/Container";
import type { NextPage } from "next";
import Articles from "../components/Articles";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Header title="News" />
      <LinkButton href="/new-article" buttonTitle="New Article" />
      <Articles />
    </Container>
  );
};

export default Home;
