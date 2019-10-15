import React, { Component } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";


const ExtraResources = () => {
  const [data, setData] = React.useState(null);
  React.useMemo(() => {
    async function getInfo() {
    const response = await fetch("http://localhost:9000/getData")
    const json = await response.json();
    return json;
  }

getInfo()
.then(json => setData(json.records))

}, []);

let urlsArray = [];
let descriptionArray = [];
let titleArray = [];

if(data !== null){
  data.forEach((record) => {
  urlsArray.push(record.fields.Link);
  descriptionArray.push(record.fields.Decription);
  titleArray.push(record.fields.Title);
  })
}

console.log(titleArray);

const youtubeId = "drJwMlD9Mjo";

    if(data === null) {
      return(<div><h1>...loading</h1></div>)
    } else {
    return(
    <div>
    <Header />
    <iframe src={`https://www.youtube.com/embed/${youtubeId}`} />
    <Menu />
  </div>
)
}
};

export default ExtraResources;
