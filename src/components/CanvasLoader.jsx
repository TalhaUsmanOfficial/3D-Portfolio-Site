/*
! Created On Sun July 06 4:30 PM 2025

! @author: Talha Usman
! Status: Developer
*/

import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const progress = useProgress();
  return ( 
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress !== 0 ? `${(progress * 100).toFixed(2)}%` : "Loading"}
        {/* {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading"} */}
      </p>
    </Html>
  );
};

export default CanvasLoader;
