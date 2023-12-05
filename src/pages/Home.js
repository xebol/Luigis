import './Home.scss'
import Luigi from "../images/luigichef-PhotoRoom.png"

const Home = () => {
  return (
    <div className="container">
      <div className="main">
        <img src={Luigi} alt="luigi-chef" className="chef-logo"/>
        <h1>Welcome to Luigi's!</h1>
      </div>
    </div>
  );
};




export default Home; 