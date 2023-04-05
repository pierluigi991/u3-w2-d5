import Genres from "./Genres";
import Films from "./Films";
import { Alert, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const TvShows = () => {
  const [HarryPotter, setHarryPotter] = useState([]);
  const [StarWars, setStarWars] = useState([]);
  const [LordOfTheRing, setLordOfTheRing] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const request = async (endpoint, setStato) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setStato(data.Search);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    request("http://www.omdbapi.com/?i=tt3896198&apikey=4e17b102&s=harry%20potter&type=movie", setHarryPotter);
    request("http://www.omdbapi.com/?i=tt3896198&apikey=4e17b102&s=star%20wars&type=movie", setStarWars);
    request(
      "http://www.omdbapi.com/?i=tt3896198&apikey=4e17b102&s=lord%20of%20the%20rings&type=movie",
      setLordOfTheRing
    );
  }, []);

  return (
    <div className="container-fluid">
      <Genres />
      <div className="movie-riga mx-md-5 mb-5 mt-4">
        <h5 className="text-light mt-2 mb-2">Harry Potter</h5>
        <div id="trending-now">
          <div className="movie-row">
            {isLoading && !error && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {error && !isLoading && (
              <Alert variant="danger">{errorMsg ? errorMsg : "Errore nel reperire i dati"}</Alert>
            )}

            <div className="row g-1 flex-nowrap films py-2">
              {HarryPotter.map((movie) => (
                <Films key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="movie-riga mx-md-5 mb-5 mt-4">
        <h5 className="text-light mt-2 mb-2">Star wars</h5>
        <div id="trending-now">
          {isLoading && !error && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {error && !isLoading && <Alert variant="danger">{errorMsg ? errorMsg : "Errore nel reperire i dati"}</Alert>}
          <div className="movie-row">
            <div className="row g-1 flex-nowrap films py-2">
              {StarWars.map((movie) => (
                <Films key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="movie-riga mx-md-5 mb-5 mt-4">
        <h5 className="text-light mt-2 mb-2">Lord of the rings</h5>
        <div id="trending-now">
          <div className="movie-row">
            {isLoading && !error && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {error && !isLoading && (
              <Alert variant="danger">{errorMsg ? errorMsg : "Errore nel reperire i dati"}</Alert>
            )}
            <div className="row g-1 flex-nowrap films py-2">
              {LordOfTheRing.map((movie) => (
                <Films key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
