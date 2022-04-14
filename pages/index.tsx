import type { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/pages/Home/Home.module.scss";

import TextOverlay from "@/components/pages/home/TextOverlay";
import ImageGallery from "@/components/pages/home/ImageGallery";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`relative min-h-full ${styles.main}`}>
        <TextOverlay />

        <ImageGallery />
      </main>
    </>
  );
};

export default Home;
