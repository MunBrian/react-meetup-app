import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DummyData = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetupsPage = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //useEffect
  useEffect(() => {
    setIsLoading(true);
    const getMeetUps = async () => {
      const data = await fetchMeetUps();
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };

        meetups.push(meetup);
      }
      setIsLoading(false);
      setMeetups(meetups);
    };

    getMeetUps();
  }, []);

  //fetchtasks
  const fetchMeetUps = async () => {
    const res = await fetch(
      "https://react-meetup-bf07f-default-rtdb.firebaseio.com/meetups.json"
    );
    const data = await res.json();

    return data;
  };

  return (
    <div>
      <h1>All Meetups</h1>
      {isLoading ? (
        <section>
          <p>Loading</p>
        </section>
      ) : (
        <MeetupList meetups={meetups} />
      )}
    </div>
  );
};

export default AllMeetupsPage;
