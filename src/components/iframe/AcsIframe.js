import React, { useState, useEffect } from "react";

export default function AcsIframe(props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(props.url);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        minHeight: "400px",
        height: "auto",
      }}
    >
      <iframe
        src={props.url}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "88%",
          border: "1px solid #878787",
        }}
        frameborder="0"
        allow="autoplay"
        allowfullscreen
      ></iframe>
    </div>
  );
}
