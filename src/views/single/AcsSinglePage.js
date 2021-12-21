import React from "react";
import AcsIframe from "../../components/iframe/AcsIframe";

export default function AcsSinglePage() {
  return (
    <div className="acs-page-container">
      <h1 className="acs-big-title">Artiste Single</h1>
      <AcsIframe url="https://player.viloud.tv/embed/channel/5f7e2fac869936d3e2d3149a507f40fd?autoplay=1&volume=1&controls=1&title=1&share=0&open_playlist=0&random=0" />
    </div>
  );
}
