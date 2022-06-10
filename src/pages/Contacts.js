import Header from "../components/Header/Header";
import headerImage from "../assets/headerImages/contacts.svg";

function Contacts() {
  return (
    <>
      <Header title="Order your army!" 
        image={headerImage}
        boxTitle="Make your choice!"
        boxChildren="If you have any other questions, please contact support and we will definitely help you.">
        Hobbies will help you in difficult times and help you have fun!
      </Header>
    </>
  );
}

export default Contacts;
