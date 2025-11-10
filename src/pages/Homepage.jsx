import "./Homepage.css";
import myPic from "../images/PSX_20240716_200731.jpg";
import Navigation from "../componets/Navigation";

function Homepage() {
  const links = [
    { label: "Projects", path: "" },
    { label: "Repository", path: "" },
  ];

  return (
    <>
      <Navigation links={links} />

      <div className="main">
        <div className="hello-div">
          <h1>
            Hello,
            <br />I am Ismail M.
          </h1>
        </div>

        <div className="pic-div">
          <img src={myPic} />
        </div>

        <div className="desc-div">
          <p>
            A software engineer, I do;
            <ul>Full stack web designing.</ul>
            <ul>Mobile app development.</ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
