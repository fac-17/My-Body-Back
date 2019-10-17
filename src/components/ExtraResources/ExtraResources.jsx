import React, { Component } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const ExtraResources = () => {
  const [data, setData] = React.useState(null);
  React.useMemo(() => {
    async function getInfo() {
      const response = await fetch("/.netlify/src/functions/getData");
      const json = await response.json();
      return json;
    }

    getInfo().then(json => setData(json.records));
  }, []);

  let urlsArray = [];
  let descriptionArray = [];
  let titleArray = [];

  if (data !== null) {
    data.forEach(record => {
      urlsArray.push(record.fields.Link.split("v=", 2)[1]);
      descriptionArray.push(record.fields.Description);
      titleArray.push(record.fields.Title);
    });
  }

  if (data === null) {
    return (
      <div>
        <Header />
        <h1>...loading</h1>
        <Menu />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        {titleArray.map((title, i) => (
          <div>
            <h2>{title}</h2>
            <iframe src={`https://www.youtube.com/embed/${urlsArray[i]}`} />
            <p>{descriptionArray[i]}</p>
          </div>
        ))}
        <Menu />
      </div>
    );
  }
};

export default ExtraResources;
