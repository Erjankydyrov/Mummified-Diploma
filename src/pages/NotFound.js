import headerImage from "../assets/headerImages/home.svg";
import Header from "../components/Header/Header";

function NotFound() {
  return (
    <>
      <Header 
        title="Page not found" 
        image={headerImage}>
        Maybe the page you are looking for was moved or deleted.
      </Header>
    </>
  );
}

export default NotFound;
