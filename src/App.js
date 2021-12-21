import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AcsFooter from "./components/layout/footer/AcsFooter";
import AcsNavbar from "./components/layout/navbar/AcsNavbar";
import AcsArtistesPage from "./views/artistes/AcsArtistesPage";
import AcsLandingPage from "./views/landing-page/AcsLandingPage";
import AcsLivePage from "./views/live/AcsLivePage";
import UIPage from "./views/ui/UIPage";
import AcsSinglePage from "./views/single/AcsSinglePage";
import AcsCuratedPage from "./views/curated/AcsCuratedPage";

function App() {
  return (
    <Router>
      <AcsNavbar />
      <div className="acs-layout">
        <Switch>
          <Route exact path="/" component={AcsLandingPage} />
          <Route path="/design-system" component={UIPage} />
          <Route path="/live" component={AcsLivePage} />
          <Route exact path="/artistes" component={AcsArtistesPage} />
          <Route path="/artistes/:id" component={AcsSinglePage} />
          <Route exact path="/curated" component={AcsCuratedPage} />
          <Route exact path="/curated/:id" component={AcsSinglePage} />
        </Switch>
      </div>
      <AcsFooter />
    </Router>
  );
}

export default App;
