import React from "react";
import type { NextPage } from "next";
import View from "../components/View";

const Index: NextPage = function () {
  const imageGallery = [
    "https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress",
    "https://images.pexels.com/photos/1170572/pexels-photo-1170572.jpeg?auto=compress",
    "https://images.pexels.com/photos/1056497/pexels-photo-1056497.jpeg?auto=compress",
  ];

  return (
    <View title="Nest Hub" imageGallery={imageGallery}>
      Hey
    </View>
  );
};

export default Index;
