import "@/styles/globals.css";
import React from "react";
import { Layout } from "../../components";
import { StateContext } from "../../context/StateContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}