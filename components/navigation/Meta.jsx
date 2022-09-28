import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  const metaTitle = `MovveIt - ${title || "App"}`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords || "MovveIt"} />
      <meta name="description" content={description || ""} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{metaTitle}</title>
    </Head>
  );
};

export default Meta;
