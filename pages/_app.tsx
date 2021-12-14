import { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";

const App = function ({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default App;
