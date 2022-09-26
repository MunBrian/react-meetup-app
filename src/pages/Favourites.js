import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorites-context";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoriteContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ? (
        <p>No Favorites available. Add some to view.</p>
      ) : (
        <MeetupList meetups={favoritesCtx.favorites} />
      )}
    </section>
  );
};

export default FavoritesPage;
