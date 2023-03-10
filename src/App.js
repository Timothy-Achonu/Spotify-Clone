import { createContext, useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import MainApp from "./components/mainApp/MainApp";
import { Routes, Route } from "react-router-dom";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";

export const AuthContext = createContext();

function App() {
  /*
  The leftSidebar can be actual links. That would mean that the
  mainApp would not contain the sidebar anymore and then sidebar 
  would be link a nav that would be showing on every route
  *****
  The other Links like Trends can just lead to a static page with
  Trends written on it.
  ****
  The fav artists can actually lead to the artist's page. Maybe the
  spotify API can give us access to each users favorite artists, if
  not then we can use some Nigerian artists.
  ***
  Note: the search API can be different from other API's spotify
  API provides.
  ***
  Chill mix and his colleagues can be normal Links instead of NavLinks to avoid 
  getting the styling for active NavLinks
  ***
  Note: Search Leads to a new Route. Like the whole main app is replaced by a different page.
  */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <AuthContext.Provider value={setIsLoggedIn}>
        {isLoggedIn ? (
          <>
          <LeftSidebar />
          <Routes>
            <Route path="/" element={<MainApp />} />
          </Routes>
          </>
        ) : (
          <Login />
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
