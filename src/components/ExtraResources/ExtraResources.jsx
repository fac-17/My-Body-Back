import React from "react";

const ExtraResources = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:9000/getData")
      .then(res => res.json())
      .then( res => {console.log(res)})
      .then(res => setData(data))
      // .then(res => console.log(data));
  }, []);

  return(
  <div>
    <h1>HELLO</h1>
  </div>
)
};

export default ExtraResources;
