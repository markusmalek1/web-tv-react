import React, { useState, useEffect } from "react";
import { baseUrl } from "../../utils/constants/AcsApiVar.constants";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import AcsCard from "../../components/card/AcsCard";
import { useLocation } from "react-router-dom";

export default function AcsCuratedPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtred, setFiltred] = useState([]);

  const location = useLocation();
  const [selected, setSelected] = useState(location?.state.selected);
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState("acs-text");
  const [inactive, setInactive] = useState("acs-text-var");

  useEffect(() => {
    setLoading(true);

    const getCuratedChannels = async () => {
      Axios.get(`${baseUrl + "/api/curated-channels"}`)
        .then((res) => {
          setData(res.data.data);
          selected
            ? setFiltred(
                res.data.data.filter((e) => e.attributes.category === selected)
              )
            : setFiltred(res.data.data);
          setLoading(false);
          console.log(res.data.data);
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
    getCuratedChannels();
  }, []);

  return (
    <div className="acs-page-container">
      <h1 className="acs-big-title">Curated channels</h1>
      {/* <div className="acs-paragraph-container">
        <p className="acs-text-var">
          As the #1 distribution app, UnitedMasters lets you easily release
          music - straight from iMessage to all major streaming platforms.
        </p>
      </div> */}
      <div className="acs-filter-gallery">
        <span
          className={clicked ? active : inactive}
          onClick={() => {
            setFiltred(data);
            setClicked(true);
            setSelected("");
          }}
        >
          All
        </span>
        {categories.map((e) => (
          <span
            className={selected === e.attributes.name ? active : inactive}
            onClick={() => {
              setFiltred(
                data.filter((f) => f.attributes.category === e.attributes.name)
              );
              setClicked(false);
              setSelected(e.attributes.name);
            }}
          >
            {e.attributes.name}
          </span>
        ))}
      </div>
      <div className="acs-card-gallery">
        {loading ? (
          <span className="acs-text">Loading ...</span>
        ) : (
          filtred.map((e) => (
            <NavLink to={"/curated/" + e.id} className="acs-link-card">
              <AcsCard key={e.id} data={e} />
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
}
