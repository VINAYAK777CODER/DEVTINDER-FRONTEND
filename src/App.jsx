import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Provider store={appStore} >
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}> // parent should render the children in an outlet so create an outlet in Body.jsx
               <Route path="/feed" element={<Feed/>} />
              <Route path="/login" element={<Login />} /> childred should be inside the parent ??
              <Route path="/profile" element={<Profile/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
