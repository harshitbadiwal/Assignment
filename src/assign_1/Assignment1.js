import React, { useEffect, useState } from "react";
import "./Assignment1.css";
const Assignment1 = () => {
  const [movieinfo, setmovieinfo] = useState([]);
  const [castdata, setcastdata] = useState([]);
  
  const moviesInfo = async () => {
    const Api_url = `https://api.themoviedb.org/3/movie/${1904}?api_key=b6961d8a574415410005902a2f3e4d23`;
    let res = await fetch(Api_url);
    let data = await res.json().then(e => setmovieinfo(e)).catch(err => console.log(err));
  };
  const starcastinfo = async () => {
    const Api_Url = `https://api.themoviedb.org/3/movie/${1904}/credits?api_key=b6961d8a574415410005902a2f3e4d23`;
    let response = await fetch(Api_Url);
    let datainfo = await response.json();
    setcastdata(datainfo.cast);
  };

  useEffect(() => {
    moviesInfo();
    starcastinfo();
  }, []);

  return (
    <>
       <div className="info">
        <div className="main-info">
          <div className="movie_Imge">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movieinfo.poster_path}
            />
          </div>

          <div className="movie-Info">
            <h3>{movieinfo.original_title}</h3>
            <h5>{movieinfo.tagline}</h5>
            <h5>
              {movieinfo.runtime} min : {movieinfo.release_date}{" "}
            </h5>
            <h5>rating {movieinfo.vote_average}</h5>

            <h6>{movieinfo.overview}</h6>
          </div>
        </div>
        <h5 className="top">StarCast</h5>
        <div className="stardata">
          {castdata.map((c) => {
            return (
              <div className="starcast">
              
                <img src={"https://image.tmdb.org/t/p/w500" + c.profile_path} />
                <p>{c.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Assignment1;
