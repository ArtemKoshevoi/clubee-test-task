import { Container } from "@mui/system";
import { NextPage } from "next";
import Head from "next/head";
import CreateArticleForm from "../../components/CreateArticleForm";
import Header from "../../components/Header";
import Meta from "../../shared/Meta";

const NewArticle: NextPage = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Meta title="New Article" description="Creation of new article" />
      <Header title="New Article" />
      <CreateArticleForm />
    </Container>
  );
};

export default NewArticle;
