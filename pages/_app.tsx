import { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";
import Fullscreen from "../components/FullScreen";

const App = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fullscreen />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
