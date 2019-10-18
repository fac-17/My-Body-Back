import React from "react";
import Header from "../Header/Header";

const ExtraResources = ({ setMenuDisplay }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setMenuDisplay(true);
  }, [setMenuDisplay]);

  React.useMemo(() => {
    async function getInfo() {
      const response = await fetch("/.netlify/functions/getData");
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
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <h2>Extra Resources</h2>
        {titleArray.map((title, i) => (
          <div>
            <h2>{title}</h2>
            <iframe src={`https://www.youtube.com/embed/${urlsArray[i]}`} />
            <p>{descriptionArray[i]}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default ExtraResources;
