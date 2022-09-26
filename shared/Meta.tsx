import Head from "next/head";
import React from "react";

interface MetaProps {
  title: string;
  description: string;
}

const Meta = ({ title, description }: MetaProps) => {
  return (
    <Head>
      <meta http-equiv="Content-Type" content="text/html, charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
