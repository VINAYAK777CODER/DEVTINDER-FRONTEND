import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Body from "./Body";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}> // parent should render the children in an outlet so create an outlet in Body.jsx
            <Route path="/login" element={<Login />} /> childered should be inside the parent ??
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
