"use client";

import React, { useEffect } from "react";
import { infinity } from "ldrs";

const Loader = () => {
  useEffect(() => {
    infinity.register(); // Initialize the infinity loader
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70 backdrop-blur-lg">
      {/* Spinner */}
      <div className="flex flex-col items-center">
        <l-infinity
          size="55"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.3"
          color="white"
        ></l-infinity>

        {/* "Jai Shri Ram" text */}
        <p className="mt-4 text-2xl font-bold text-white animate-bounce">
          Loading Please Wait
        </p>
      </div>
    </div>
  );
};

export default Loader;
