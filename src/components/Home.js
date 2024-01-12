// src/components/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setShows(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
