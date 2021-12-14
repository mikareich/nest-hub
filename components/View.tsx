import Head from "next/head";
import React from "react";
import ImageGallery from "./ImageGallery";

interface ViewProps {
  title: string;
  favIcon?: string;
  imageGallery?: string[];
}

const View: React.FC<ViewProps> = function ({
  children,
  title,
  favIcon,
  imageGallery = [],
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {favIcon && <link rel="icon" href={favIcon} />}
      </Head>
      <div className="h-screen w-screen bg-gray-100">
        {imageGallery?.length > 0 && <ImageGallery imageURLs={imageGallery} />}
        <div className="absolute w-full h-full z-10 p-12">{children}</div>
      </div>
    </>
  );
};

export default View;
