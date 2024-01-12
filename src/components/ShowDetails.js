// src/components/ShowDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./showDetails.css";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => setShow(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {show && (
        <div>
          <h1>{show.name}</h1>
          <p>{show.summary}</p>
          {/* Add a button to book a movie ticket here */}
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
