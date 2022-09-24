import React from "react";
import MeetUpItem from "./MeetUpItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={props.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          desc={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
