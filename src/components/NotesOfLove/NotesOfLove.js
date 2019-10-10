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

const imageArray = [ noteOne, noteTwo, noteThree, noteFour, noteFive, noteSix, noteSeven ];

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
  {imageArray.map((image, i) => (
    <img src={image}
    id={i}
    className={this.id == index ? "notes-of-love__image__active" : "notes-of-love__image"}
    />
  ))}
  </Swipeable>
<Menu />
</section>
)
}

export default NotesOfLove;
