import React from "react";
import MeetUpItem from "./MeetUpItem";
import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup, index) => (
        <MeetUpItem
          key={index}
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
