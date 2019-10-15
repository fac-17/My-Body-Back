import React from "react";

const ExtraResources = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:9000/getData")
      .then(res => res.json())
      .then(res => setData(res.records[0].fields))
  }, []);


console.log(data.Link);
const youtubeId = "drJwMlD9Mjo";

  return(
  <div>
    <iframe src={`https://www.youtube.com/embed/${youtubeId}`} />
  </div>
)
};

export default ExtraResources;
