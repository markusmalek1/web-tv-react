import React, { useState } from "react";

export default function AcsChannelCard(props) {
  const [data, setData] = useState(props.data);

  const channelSwitch = () => {
    props.setIframeUrl(data.attributes.iframeUrl);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="acs-channel-card-container" onClick={channelSwitch}>
      <div className="acs-card-content">
        <div className="acs-card-img">
          <img src={data.attributes.img} alt="artiste" />
        </div>
        <div className="acs-card-date">
          <span className="acs-small-text">{data.attributes.date}</span>
        </div>
        <div className="acs-card-info">
          <h4 className="acs-text">{data.attributes.name}</h4>
          <span className="acs-small-text">{data.attributes.type}</span>
        </div>
      </div>
      <div className="acs-card-footer"></div>
    </div>
  );
}
