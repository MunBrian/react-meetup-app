import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";

const App = () => {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/new-meetups" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
};

export default App;
