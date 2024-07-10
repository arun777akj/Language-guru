import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <meta
            name="title"
            content="Language Guru - Start your Language preparation with us"
          />
          <meta
            name="description"
            content="Smart and focused training to succeed in the Language examination."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://languageguru.ca/" />
          <meta
            property="og:title"
            content="Language Guru - Start your Language exam preparation with us"
          />
          <meta
            property="og:description"
            content="Smart and focused coaching to succeed in the Language examination."
          />
          <meta property="og:image" content="../../public/Images/summary_image.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_image.png" />
          <meta property="twitter:url" content="https://missionkas.com/" />
          <meta
            property="twitter:title"
            content="Language Guru - Start your Language preparation with us"
          />
          <meta
            property="twitter:description"
            content="Smart and focused coaching to succeed in the Language examination."
          />
          <meta property="twitter:image" content="../../public/Images/summary_image.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
