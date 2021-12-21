import React, { useState } from "react";

export default function AcsCard(props) {
  const [data, setData] = useState(props.data);
  return (
    <div className="acs-card-container">
      <div className="acs-card-content">
        <div className="acs-card-img">
          <img src={data.attributes.img} alt={data.attributes.name} />
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
