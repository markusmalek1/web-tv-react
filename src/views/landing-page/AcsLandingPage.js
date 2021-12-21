import React, { useEffect, useState } from "react";
import AcsIframe from "../../components/iframe/AcsIframe";
import Axios from "axios";
import { baseUrl } from "../../utils/constants/AcsApiVar.constants";
import AcsChannelCard from "../../components/card/AcsChannelCard";
import AcsCard from "../../components/card/AcsCard";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function AcsLandingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [artistes, setArtistes] = useState([]);
  const [curated, setCurated] = useState([]);
  const [iframeUrl, setIframeUrl] = useState(
    "https://player.viloud.tv/embed/channel/5f7e2fac869936d3e2d3149a507f40fd?autoplay=1&volume=1&controls=1&title=1&share=0&open_playlist=0&random=0"
  );
  const [categories, setCategories] = useState([]);

  const categoriesRoutes = [
    { name: "art", route: "/art" },
    { name: "fashion", route: "/fashion" },
    { name: "design", route: "/design" },
    { name: "music", route: "/music" },
    { name: "video", route: "/video" },
    { name: "food", route: "/food" },
  ];

  useEffect(() => {
    setLoading(true);
    const getChannels = async () => {
      Axios.get(`${baseUrl + "/api/acs-channels"}`)
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    const getArtistesChannels = async () => {
      Axios.get(`${baseUrl + "/api/artistes"}`)
        .then((res) => {
          setArtistes(res.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    const getCuratedChannels = async () => {
      Axios.get(`${baseUrl + "/api/curated-channels"}`)
        .then((res) => {
          setCurated(res.data.data);
          console.log("curated ", res.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    const getCategories = async () => {
      Axios.get(`${baseUrl + "/api/categories"}`)
        .then((res) => {
          setCategories(res.data.data);
          setLoading(false);
          console.log(res.data.data);
        })
        .catch((err) => console.log(err));
    };

    getCategories();
    getChannels();
    getArtistesChannels();
    getCuratedChannels();
  }, [iframeUrl]);

  return (
    <div className="acs-page-container">
      <AcsIframe url={iframeUrl} />
      <div>
        <h3 className="acs-big-title">acs channels</h3>
        <div className="acs-paragraph-container">
          <p className="acs-text-var">
            As the #1 distribution app, UnitedMasters lets you easily release
            music - straight from iMessage to all major streaming platforms.
          </p>
        </div>
        <div className="acs-cards-container">
          {loading ? (
            <h3 className="acs-big-text">Loading ...</h3>
          ) : (
            data.map((e) => (
              <AcsChannelCard key={e.id} data={e} setIframeUrl={setIframeUrl} />
            ))
          )}
        </div>
      </div>
      <div style={{ marginTop: 100 }}>
        <h3 className="acs-big-title">Artistes channels</h3>
        <div className="acs-paragraph-container">
          <p className="acs-text-var">
            As the #1 distribution app, UnitedMasters lets you easily release
            music - straight from iMessage to all major streaming platforms.
          </p>
        </div>
        <div className="acs-cards-container">
          {loading ? (
            <h3 className="acs-big-text">Loading ...</h3>
          ) : (
            artistes.map((e) => (
              <NavLink to={"/artistes/" + e.id} className="acs-link-card">
                <AcsCard key={e.id} data={e} />
              </NavLink>
            ))
          )}
        </div>
        <NavLink to="/artistes" className="acs-link acs-align-right">
          See more
        </NavLink>
      </div>
      <div style={{ marginTop: 100 }}>
        <h3 className="acs-big-title">curated channels</h3>
        <div className="acs-paragraph-container">
          <p className="acs-text-var">
            As the #1 distribution app, UnitedMasters lets you easily release
            music - straight from iMessage to all major streaming platforms.
          </p>
        </div>
        <div>
          {loading ? (
            <span className="acs-text">Loading ...</span>
          ) : (
            categories.map((e) => (
              <div>
                <h4
                  className="acs-title"
                  style={{ marginBottom: 16, marginTop: 64 }}
                >
                  {e.attributes.name}
                </h4>
                <div className="acs-cards-container">
                  {loading ? (
                    <h3 className="acs-big-text">Loading ...</h3>
                  ) : (
                    curated
                      .filter(
                        (f) => f.attributes.category === e.attributes.name
                      )
                      .map((cu) => (
                        <NavLink
                          to={"/curated" + e.id}
                          className="acs-link-card"
                        >
                          <AcsCard key={cu.id} data={cu} />
                        </NavLink>
                      ))
                  )}
                </div>
                <NavLink
                  to={{
                    pathname: "/curated",
                    state: {
                      selected: e.attributes.name,
                    },
                  }}
                  className="acs-link acs-align-right"
                >
                  See more
                </NavLink>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
