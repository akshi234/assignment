import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
    <div className="container">
      {show && (
        <div>
          <h1>{show.name}</h1>
          <p>{show.summary}</p>
          <div className="button-container">
            <Link to="/">
              <button className="button">Book Now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
