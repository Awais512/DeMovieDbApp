import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Actors, MovieInfo, Movies, NavBar, Profile } from "./components";

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
