import React from "react";
import AcsCard from "../../components/card/AcsCard";
import AcsChannelCard from "../../components/card/AcsChannelCard";
import AcsIframe from "../../components/iframe/AcsIframe";
import AcsFooter from "../../components/layout/footer/AcsFooter";
import AcsNavbar from "../../components/layout/navbar/AcsNavbar";

export default function UIPage() {
  return (
    <div className="acs-page-container">
      <div style={{ display: "flex" }}>
        <div style={{ padding: "16px 32px" }}>
          <h2
            className="acs-text"
            style={{ margin: "16px 0", color: "#878787" }}
          >
            Typography
          </h2>
          <div style={{ width: 367 }}>
            <h1 className="acs-big-title">Big Title</h1>
            <a href="#" className="acs-big-link">
              Big Link
            </a>
            <br />
            <span className="acs-text">Text</span>
            <br />
            <span className="acs-small-text">Small Text</span>
            <br />
            <a href="#" className="acs-link">
              Link
            </a>
          </div>
        </div>
        <div style={{ padding: "16px 32px" }}>
          <h2
            className="acs-text"
            style={{ margin: "16px 0", color: "#878787" }}
          >
            Colors
          </h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <div
                style={{
                  height: 100,
                  width: 100,
                  background: "#fff",
                  border: "1px solid #fff",
                  marginBottom: 16,
                  padding: "8px",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
              >
                <span
                  className="acs-text"
                  style={{ color: "#000", textTransform: "uppercase" }}
                >
                  #ffffff
                </span>
              </div>
              <span className="acs-text">White</span>
            </div>
            <div
              style={{
                width: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <div
                style={{
                  height: 100,
                  width: 100,
                  background: "#000",
                  border: "1px solid #fff",
                  marginBottom: 16,
                  padding: "8px",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
              >
                <span
                  className="acs-text"
                  style={{ textTransform: "uppercase" }}
                >
                  #000000
                </span>
              </div>
              <span className="acs-text">Black</span>
            </div>
            <div
              style={{
                width: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <div
                style={{
                  height: 100,
                  width: 100,
                  background: "#878787",
                  border: "1px solid #878787",
                  marginBottom: 16,
                  padding: "8px",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
              >
                <span
                  className="acs-text"
                  style={{ color: "#000", textTransform: "uppercase" }}
                >
                  #878787
                </span>
              </div>
              <span className="acs-text">Grey</span>
            </div>
          </div>
        </div>
        <div style={{ padding: "16px 32px", marginLeft: 64, width: "auto" }}>
          <h1
            className="acs-big-title"
            style={{ margin: "16px 0", fontSize: 70 }}
          >
            UI Design System
          </h1>
        </div>
      </div>
      <div>
        <h2
          className="acs-text"
          style={{ margin: "16px 32px", color: "#878787" }}
        >
          Components
        </h2>
        <div style={{ display: "flex" }}>
          <div>
            <div style={{ padding: "16px 32px" }}>
              <AcsCard
                data={{
                  id: 1,
                  attributes: {
                    createdAt: "2021-12-14T10:31:07.363Z",
                    date: "2021-12-02",
                    iframe:
                      "https://player.viloud.tv/embed/channel/5f7e2fac869936d3e2d3149a507f40fd?autoplay=1&volume=1&controls=1&title=1&share=0&open_playlist=0&random=0",
                    img: "https://backstage.connect.artculture.studio/uploads/NONES_Art_Culture_Studio_Amine_Landoulsi_compressed_2db3809a45.jpg",
                    name: "naomi asa",
                    publishedAt: "2021-12-14T10:34:49.736Z",
                    type: "london",
                    updatedAt: "2021-12-16T12:23:18.502Z",
                  },
                }}
              />
            </div>
            <div style={{ padding: "16px 32px" }}>
              <AcsChannelCard
                data={{
                  id: 1,
                  attributes: {
                    createdAt: "2021-12-14T10:31:07.363Z",
                    date: "2021-12-02",
                    iframe:
                      "https://player.viloud.tv/embed/channel/5f7e2fac869936d3e2d3149a507f40fd?autoplay=1&volume=1&controls=1&title=1&share=0&open_playlist=0&random=0",
                    img: "https://backstage.connect.artculture.studio/uploads/logo_ACS_05_49557687dd.png",
                    name: "naomi asa",
                    publishedAt: "2021-12-14T10:34:49.736Z",
                    type: "london",
                    updatedAt: "2021-12-16T12:23:18.502Z",
                  },
                }}
              />
            </div>
          </div>
          <div style={{ width: "70%", padding: "16px 32px" }}>
            <AcsIframe url="https://player.viloud.tv/embed/channel/5f7e2fac869936d3e2d3149a507f40fd?autoplay=1&volume=1&controls=1&title=1&share=0&open_playlist=0&random=0" />
          </div>
        </div>
        <div style={{ padding: "16px 32px" }}>
          <h2
            className="acs-text"
            style={{ margin: "16px 0", color: "#878787" }}
          >
            Navbar
          </h2>
          <AcsNavbar />
        </div>
        <div style={{ padding: "16px 32px" }}>
          <h2
            className="acs-text"
            style={{ margin: "16px 0", color: "#878787" }}
          >
            Footer
          </h2>
          <AcsFooter />
        </div>
      </div>
    </div>
  );
}
