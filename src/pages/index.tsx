import type { NextPage } from "next";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Highlight } from "../components/Highlight";
import { Programs } from "../components/Programs";
import { Register } from "../components/Register";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";
import Head from "next/head";
import Script from "next/script";

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Language Guru - Start your Language preparation with us</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-KNZFHW7"
        strategy="afterInteractive"
      />
      <div className="text-gray-600">
        <main
          id="home"
          className="bg-fixed bg-teal-900 bg-[left_1rem_top_20rem] xl:bg-[right_-45rem_top_-10rem] bg-repeat-space bg-cover bg-hero"
        >
          <Navbar />
          <Hero />
        </main>
        <Highlight />
        <Features />
        <Programs />
        <Register />
        <Footer />

        <div className="fixed z-50 bottom-3 right-2 lg:bottom-5 lg:right-5">
          <a
            href="https://wa.me/13828850508?text="
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center p-2 transition duration-200 ease-in border border-white rounded-full shadow-2xl bg-emerald-600 hover:bg-emerald-700 active:shadow-lg mouse focus:outline-none"
          >
            <label className="sr-only">WhatsApp</label>
            <WhatsAppIcon color="white" />
          </a>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
