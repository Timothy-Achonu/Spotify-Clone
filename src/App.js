import { useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import MainApp from "./components/mainApp/MainApp";
import { Routes, Route } from "react-router-dom";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import { useStateProvider } from "./utilities/StateProvider";
import { reducerCases } from "./utilities/Constants";
import Playlist from "./components/Center/playlist/Playlist";
import GetNewTokens from "./components/getNewTokens/GetNewTokens";
import CurrentTrack from "./components/Center/currentTrack/CurrentTrack";
function App() {
  /*
 
  */
  /*
useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    console.log("hash -----",hash);

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    // console.log(token)
  }, []);
 */
  const [initialState, dispatch] = useStateProvider();
  const { token, tokenExpired } = initialState;
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash.substring(1).split("&")[0].split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    dispatch({ type: reducerCases.SET_TOKEN, token });

  }, [token, dispatch]);
  function showApp() {
    if((token && !tokenExpired)) {
        return true
    }
  }
  
  return (
    <div className="App">
        { showApp() ? (
        <>
          <LeftSidebar />
          <CurrentTrack/>
          <Routes>
            <Route path="/" element={ <MainApp />} />
            <Route path="/playlist/:id" element={<Playlist />} />
          </Routes>
        </>
      ) : (
           !tokenExpired ? <Login /> :<GetNewTokens />
      )}
    </div>
  );
}

export default App;
