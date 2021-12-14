import Head from "next/head";
import React from "react";

interface ViewProps {
  title: string;
  favIcon?: string;
}

const View: React.FC<ViewProps> = function ({ children, title, favIcon }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {favIcon && <link rel="icon" href={favIcon} />}
      </Head>
      <div className="h-screen w-screen p-12">{children}</div>
    </>
  );
};

export default View;
