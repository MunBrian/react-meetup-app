import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupsPage = () => {
  const navigate = useNavigate();

  const addMeetUpHandler = (meetupData) => {
    fetch(
      "https://react-meetup-bf07f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => navigate("/"));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
};

export default NewMeetupsPage;
