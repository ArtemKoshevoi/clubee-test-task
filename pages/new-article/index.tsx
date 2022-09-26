import { Container } from "@mui/system";
import { NextPage } from "next";
import CreateArticleForm from "../../components/CreateArticleForm";
import Header from "../../components/Header";

const NewArticle: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Header title="New Article" />
      <CreateArticleForm />
    </Container>
  );
};

export default NewArticle;
