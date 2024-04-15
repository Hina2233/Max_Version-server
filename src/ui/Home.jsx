import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import './Home.css';
import Banner from "../assets/Wen-Banner-02.png";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">

<div className="banner">
        <img 
          src={Banner} 
          alt="Banner" 
          className="bannerImage"
        />
      </div>
      
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
      Welcome to Pizza HUb
        <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
     
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
        
      )}
    </div>
  );
}

export default Home;
