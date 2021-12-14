import Head from "next/head";
import React from "react";
import ImageGallery from "./ImageGallery";

interface ViewProps {
  title: string;
  favIcon?: string;
  imageGallery?: string[];
  withBanner?: boolean;
}

const View: React.FC<ViewProps> = function ({
  children,
  title,
  favIcon,
  imageGallery = [],
  withBanner,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {favIcon && <link rel="icon" href={favIcon} />}
      </Head>
      <div className="h-screen w-screen bg-gray-100">
        {imageGallery?.length > 0 && <ImageGallery imageURLs={imageGallery} />}
        {withBanner && (
          <div className="absolute bottom-0 w-screen h-64 bg-gradient-to-t from-black" />
        )}
        <div className="absolute w-full h-full z-10 p-12">
          <div className="relative w-full h-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default View;
