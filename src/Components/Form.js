import "./Form.scss";
import 'nes.css/css/nes.min.css';
import toad from "../images/toad-PhotoRoom.png"

const Form = () => {



  return (
    <div className="reviews">
      <form autoComplete="off" className="review-form">
        <img src={toad} alt="Toad" className="toad"/>
        <p class="nes-balloon from-left nes-pointer">
          <textarea className="review-balloon" placeholder="Leave us a review!"></textarea>
          <button type="submit" className="review-button">Submit</button>
        </p>
      </form>
    </div>
  );
};




export default Form;