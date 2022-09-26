import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage";
import LinkButton from "../../components/LinkButton";

interface FormInputs {
  title: string;
  body: string;
  email: string;
}

const NewArticle: NextPage = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      title: "",
      body: "",
      email: "",
    },
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const response = await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        publicationDate: new Date(Date.now()).toLocaleDateString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();

    if (responseData) {
      router.push("/");
    }
    console.log(111, responseData);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          New Article
        </Typography>
      </Box>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                placeholder="Title"
                margin="dense"
              />
            )}
          />
          {errors.title && <ErrorMessage message="Title is required" />}
          <Controller
            name="body"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                minRows={3}
                placeholder="Body"
                multiline
                margin="dense"
              />
            )}
          />
          {errors.body && <ErrorMessage message="Body is required" />}
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                placeholder="Email"
                margin="dense"
              />
            )}
          />
          {errors.email && <ErrorMessage message="Email is required" />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              onClick={handleSubmit(onSubmit)}
              sx={{ marginRight: "10px" }}
              variant="contained"
            >
              Publish
            </Button>
            <Button
              onClick={() => reset()}
              variant={"outlined"}
              sx={{ marginRight: "10px" }}
            >
              Reset
            </Button>
            <LinkButton href="/" buttonTitle="To Home Page" />
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default NewArticle;
