import React, { useEffect, useState } from "react";
import AcsCard from "../../components/card/AcsCard";
import { baseUrl } from "../../utils/constants/AcsApiVar.constants";
import Axios from "axios";
import { NavLink } from "react-router-dom";

export default function AcsArtistesPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getArtistesChannels = async () => {
      Axios.get(`${baseUrl + "/api/artistes"}`)
        .then((res) => {
          setData(res.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getArtistesChannels();
  }, []);

  return (
    <div className="acs-page-container">
      <h1 className="acs-big-title">Artistes channels</h1>
      <div className="acs-paragraph-container">
        <p className="acs-text-var">
          As the #1 distribution app, UnitedMasters lets you easily release
          music - straight from iMessage to all major streaming platforms.
        </p>
      </div>
      <div className="acs-card-gallery">
        {loading ? (
          <span className="acs-text">Loading ...</span>
        ) : (
          data.map((e) => (
            <NavLink to={"/artistes/" + e.id} className="acs-link-card">
              <AcsCard key={e.id} data={e} />
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
}
