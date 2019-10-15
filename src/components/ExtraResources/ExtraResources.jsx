import React, { Component } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";


const ExtraResources = () => {
  const [data, setData] = React.useState([]);
  const [urls, setUrls] = React.useState([]);
  const [titles, setTitles] = React.useState([]);

  React.useEffect(() => {
    async function getInfo() {
    const response = await fetch("http://localhost:9000/getData")
    const json = await response.json();
    return json;
  }

getInfo()
.then(json => setData(json.records))

// let Urls = data.forEach((record) => {
//   return record.fields.Link
// })
//
// return Urls;

}, []);

console.log("This is data", data);


// const youtubeurl = data.Link;
// const youtubeId = youtubeurl.split('v=', 2)[1];
// console.log("This is URL", youtubeurl);

const youtubeId = "drJwMlD9Mjo";

  return(
    <div>
    <Header />
    <iframe src={`https://www.youtube.com/embed/${youtubeId}`} />
    <Menu />
  </div>
)
};

export default ExtraResources;
