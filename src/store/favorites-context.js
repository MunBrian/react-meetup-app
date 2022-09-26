import { createContext, useState } from "react";

const FavoriteContext = createContext({
  //initial value
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favouriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

//component - providing context for all components
//that are interested in the value - responsible for updating context value
export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favouriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return [favouriteMeetup, ...prevUserFavorites];
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      const newUserFavorites = prevUserFavorites.filter(
        (meetup) => meetup.id !== meetupId
      );
      return newUserFavorites;
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
