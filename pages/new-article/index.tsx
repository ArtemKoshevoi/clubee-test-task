import { NextPage } from "next";

const NewArticle: NextPage = () => {
  const submitArticle = async () => {
    const response = await fetch("/api/articles", {
      method: "POST",
      body: JSON.stringify({
        id: 4,
        title: "Fouth article",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare massa eget egestas purus. Consequat nisl vel pretium lectus quam id leo in. Sit amet risus nullam eget felis. Dapibus ultrices in iaculis nunc sed. Ut consequat semper viverra nam libero. Arcu ac tortor dignissim convallis aenean et tortor. Semper auctor neque vitae tempus quam. Consequat nisl vel pretium lectus quam id leo in vitae. Egestas sed sed risus pretium quam vulputate dignissim.",
        email: "second_author@gmail.com",
        publicationDate: "10.10.2022",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(111, data);
  };
  return (
    <>
      <button onClick={submitArticle}>Submit article</button>
    </>
  );
};

export default NewArticle;