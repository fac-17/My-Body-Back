import React from 'react';
import { Swipeable } from "react-swipeable";
import noteOne from "../assets/notes-of-love/notes-of-love-one.png";
import noteTwo from "../assets/notes-of-love/notes-of-love-two.png";
import noteThree from "../assets/notes-of-love/notes-of-love-three.png";
import noteFour from "../assets/notes-of-love/notes-of-love-four.png";
import noteFive from "../assets/notes-of-love/notes-of-love-five.png";
import noteSix from "../assets/notes-of-love/notes-of-love-six.png";
import noteSeven from "../assets/notes-of-love/notes-of-love-seven.png";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./NotesOfLove.css";


const NotesOfLove = () => {

const [index, setIndex] = React.useState(0);

React.useEffect(() => {
    const image = document.querySelectorAll(".notes-of-love__image");
    const imageArray = Array.from(image);

    imageArray.forEach(element => {
      element.id == index
        ? element.classList.add("notes-of-love__image__active")
        : element.classList.remove("notes-of-love__image__active");
    });
  }, [index]);


const swipeLeft = () => {
  index < 6 ? setIndex(index + 1) : setIndex(index);
};

const swipeRight = () => {
  index > 0 ? setIndex(index - 1) : setIndex(index);
};

  return (
    <section className="notes-of-love__container">
<Header />
  <Swipeable onSwipedLeft={swipeLeft} onSwipedRight={swipeRight}>
  <img className="notes-of-love__image" src={noteOne} alt="notes of love one" id="0" />
  <img className="notes-of-love__image" src={noteTwo} alt="notes of love one" id="1" />
  <img className="notes-of-love__image" src={noteThree} alt="notes of love one" id="2" />
  <img className="notes-of-love__image" src={noteFour} alt="notes of love one" id="3" />
  <img className="notes-of-love__image" src={noteFive} alt="notes of love one" id="4" />
  <img className="notes-of-love__image" src={noteSix} alt="notes of love one" id="5" />
  <img className="notes-of-love__image" src={noteSeven} alt="notes of love one" id="6" />
  </Swipeable>
<Menu />
</section>
)

}

export default NotesOfLove;
