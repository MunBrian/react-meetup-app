import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";
import FavoriteContext from "../../store/favorites-context";

const MeetUpItem = (props) => {
  const favoriteCtx = useContext(FavoriteContext)

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites' }</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
