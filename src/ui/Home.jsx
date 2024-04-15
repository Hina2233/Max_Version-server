import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import './Home.css';
import Banner from "../assets/Wen-Banner-02.png";
import { motion } from "framer-motion";

function Home() {
  
  const username = useSelector((state) => state.user.username);

  return (
    <div className="banner-container">
        <motion.img 
          src={Banner} 
          alt="Banner" 
          className="bannerImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
    <div className="home-container">
      <div className="content-container">
        <h1 className="main-heading">
          Welcome to Pizza Hub
          <br />
          <span className="sub-heading">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        
        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/userHome" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </div>
    </div>
  );
}

export default Home;
