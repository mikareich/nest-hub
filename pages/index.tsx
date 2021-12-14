import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import View from "../components/View";

const Index: NextPage = function () {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const imageGallery = [
    "https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress",
    "https://images.pexels.com/photos/1170572/pexels-photo-1170572.jpeg?auto=compress",
    "https://images.pexels.com/photos/1056497/pexels-photo-1056497.jpeg?auto=compress",
  ];

  return (
    <View title="Nest Hub" imageGallery={imageGallery} withBanner>
      <div className="text-white absolute bottom-0 left-0">
        <div className="text-7xl">
          {new Date(currentTime).toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div className="text-lg">
          {new Date(currentTime).toLocaleDateString("de-DE", {
            weekday: "short",
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
    </View>
  );
};

export default Index;
