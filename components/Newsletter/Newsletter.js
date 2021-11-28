import axios from "axios";
import React, { useEffect, useState } from "react";

function Newsletter() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://crypto-news6.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news6.p.rapidapi.com",
        "x-rapidapi-key": "c879f93668msh38effe36525dc4dp181186jsn1653c4bf345f",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setArticles(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const firts7Articles = articles?.slice(0, 7);
  return (
    <div className="col-right">
      {(firts7Articles.length <= 0 && <div>Loading...</div>) ||
        firts7Articles.map((item, _index) => (
          <a key={_index} href={item.url} target="_blank">
            <p>{item.title} </p>
          </a>
        ))}
    </div>
  );
}

export default Newsletter;
