import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Profyle from "./components/Profyle";
import TVShows from "./components/TvShows";
import NotFound from "./components/NotFound";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <MyNav />;
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Profyle" element={<Profyle />}></Route>
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </main>
  );
}

export default App;
